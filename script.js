/* Quiz POO Python — Logique principale */
(function () {
  'use strict';

  const QUESTIONS = window.QUIZ_QUESTIONS || [];
  const HEART_EMOJIS = ['❤️', '💜', '💖', '💕', '💗', '💝', '🩷', '💓', '🧡', '💛'];
  const STORAGE_KEY = 'quiz_poo_mistakes_v1';

  // -------------------- PERSISTANCE ERREURS --------------------
  function loadMistakes() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return new Set();
      return new Set(JSON.parse(raw));
    } catch (e) { return new Set(); }
  }
  function saveMistakes(set) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(set))); }
    catch (e) { /* ignore */ }
  }
  function addMistake(qIdx) {
    const m = loadMistakes(); m.add(qIdx); saveMistakes(m); return m;
  }
  function removeMistake(qIdx) {
    const m = loadMistakes(); m.delete(qIdx); saveMistakes(m); return m;
  }
  function clearMistakes() {
    try { localStorage.removeItem(STORAGE_KEY); } catch(e) {}
  }
  function refreshMistakeBadge() {
    const m = loadMistakes();
    const badge = $('#mistakeCount');
    if (badge) {
      badge.textContent = m.size;
      badge.classList.toggle('is-zero', m.size === 0);
    }
    const card = $('#modeMistakes');
    if (card) card.classList.toggle('disabled', m.size === 0);
    const clearBtn = $('#clearMistakesBtn');
    if (clearBtn) clearBtn.classList.toggle('hidden', m.size === 0);
  }

  // -------------------- ETAT --------------------
  const state = {
    deck: [],          // questions de la session courante
    index: 0,          // index courant
    answers: [],       // {qIdx, given, correct}
    ok: 0,
    ko: 0,
    mode: 'random',
    category: null,
  };

  // -------------------- HELPERS --------------------
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function showScreen(id) {
    $$('.screen').forEach((s) => s.classList.remove('active'));
    $(id).classList.add('active');
    window.scrollTo(0, 0);
    // Le badge "Mes erreurs" se met à jour à chaque retour à l'accueil
    if (id === '#screen-home') refreshMistakeBadge();
  }

  function getCategories() {
    const map = new Map();
    QUESTIONS.forEach((q) => {
      map.set(q.category, (map.get(q.category) || 0) + 1);
    });
    return Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  }

  // Cœur (couleur aléatoire) ajouté à la FIN de chaque question
  function addRandomHearts(text) {
    const h = HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)];
    return escapeHtml(text) + ' <span class="question-heart">' + h + '</span>';
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Animation petit cœur flottant à un endroit donné
  function spawnFloatingHeart(x, y) {
    const wrap = $('#floatingHearts');
    const h = document.createElement('span');
    h.className = 'float-heart';
    h.textContent = HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)];
    h.style.left = x + 'px';
    h.style.top = y + 'px';
    wrap.appendChild(h);
    setTimeout(() => h.remove(), 2100);
  }

  function burstHearts(centerX, centerY, n = 6) {
    for (let i = 0; i < n; i++) {
      const dx = (Math.random() - 0.5) * 80;
      const dy = (Math.random() - 0.5) * 40;
      setTimeout(() => spawnFloatingHeart(centerX + dx, centerY + dy), i * 50);
    }
  }

  // -------------------- ACCUEIL --------------------
  function setupHome() {
    $('#totalQuestions').textContent = QUESTIONS.length;

    const cats = getCategories();
    $('#totalCategories').textContent = cats.length;

    const list = $('#categoryList');
    list.innerHTML = '';
    cats.forEach(([name, count]) => {
      const div = document.createElement('div');
      div.className = 'category-item';
      div.dataset.cat = name;
      div.innerHTML = `${escapeHtml(name)}<span class="cat-count">${count} questions</span>`;
      div.addEventListener('click', () => {
        $$('.category-item').forEach((el) => el.classList.remove('selected'));
        div.classList.add('selected');
        state.category = name;
      });
      list.appendChild(div);
    });

    // Mode change
    $$('input[name="mode"]').forEach((r) => {
      r.addEventListener('change', () => {
        state.mode = r.value;
        if (r.value === 'category') {
          $('#categoryPicker').classList.remove('hidden');
        } else {
          $('#categoryPicker').classList.add('hidden');
          state.category = null;
        }
      });
    });

    $('#startBtn').addEventListener('click', startQuiz);
    $('#clearMistakesBtn').addEventListener('click', () => {
      if (confirm('Effacer toutes les questions ratées enregistrées ?')) {
        clearMistakes();
        refreshMistakeBadge();
      }
    });
    refreshMistakeBadge();
  }

  // -------------------- DEMARRAGE --------------------
  function startQuiz() {
    let pool = QUESTIONS.slice();

    if (state.mode === 'category') {
      if (!state.category) {
        alert('Choisis un thème avant de commencer !');
        return;
      }
      pool = pool.filter((q) => q.category === state.category);
    } else if (state.mode === 'mistakes') {
      const m = loadMistakes();
      if (m.size === 0) {
        alert('Aucune erreur enregistrée pour le moment.\nFais d\'abord quelques questions !');
        return;
      }
      pool = QUESTIONS.filter((_, i) => m.has(i));
    }

    pool = shuffle(pool);
    if (state.mode === 'exam') {
      pool = pool.slice(0, 20);
    }

    state.deck = pool;
    state.index = 0;
    state.answers = [];
    state.ok = 0;
    state.ko = 0;

    $('#scoreOk').textContent = '0';
    $('#scoreKo').textContent = '0';
    $('#qTotal').textContent = state.deck.length;

    showScreen('#screen-quiz');
    renderQuestion();
  }

  // -------------------- RENDU QUESTION --------------------
  function renderQuestion() {
    const q = state.deck[state.index];
    if (!q) { finish(); return; }

    $('#qIndex').textContent = state.index + 1;
    $('#qCategory').textContent = q.category;

    const pct = ((state.index) / state.deck.length) * 100;
    $('#progressFill').style.width = pct + '%';

    // Texte avec cœurs aléatoires
    $('#qText').innerHTML = addRandomHearts(q.q);

    const optsBox = $('#qOptions');
    optsBox.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'option';
      btn.type = 'button';
      btn.innerHTML = `
        <span class="option-letter">${letters[i]}</span>
        <span class="option-text">${escapeHtml(opt)}</span>
      `;
      btn.addEventListener('click', (ev) => handleAnswer(i, btn, ev));
      optsBox.appendChild(btn);
    });

    $('#explanation').classList.add('hidden');
    $('#explanation').classList.remove('is-correct', 'is-wrong');
  }

  // -------------------- TRAITEMENT REPONSE --------------------
  function handleAnswer(givenIdx, btn, ev) {
    const q = state.deck[state.index];
    const correctIdx = q.answer;
    const isCorrect = givenIdx === correctIdx;
    const qIdx = QUESTIONS.indexOf(q);

    state.answers.push({
      qIdx: qIdx,
      q: q,
      given: givenIdx,
      correct: isCorrect,
    });

    if (isCorrect) {
      state.ok++;
      $('#scoreOk').textContent = state.ok;
      // Anim cœurs
      const rect = btn.getBoundingClientRect();
      burstHearts(rect.left + rect.width / 2, rect.top + rect.height / 2, 7);
    } else {
      state.ko++;
      $('#scoreKo').textContent = state.ko;
      // Mémorise l'erreur de façon persistante (Set : idempotent)
      addMistake(qIdx);
    }

    // Désactiver toutes les options
    const allOpts = $$('#qOptions .option');
    allOpts.forEach((o, i) => {
      o.disabled = true;
      if (i === correctIdx) o.classList.add('correct');
      else if (i === givenIdx) o.classList.add('wrong');
      else o.classList.add('disabled');
    });

    // Afficher explication
    const exp = $('#explanation');
    exp.classList.remove('hidden');
    if (isCorrect) {
      exp.classList.add('is-correct');
      $('#explIcon').textContent = '✅';
      $('#explStatus').textContent = 'Bonne réponse !';
    } else {
      exp.classList.add('is-wrong');
      $('#explIcon').textContent = '❌';
      $('#explStatus').textContent = `Mauvaise réponse — la bonne était : ${q.options[correctIdx]}`;
    }
    $('#explText').textContent = q.explanation;

    // Source : image du cours
    const srcBlock = $('#sourceBlock');
    if (q.source && q.source.img) {
      $('#sourceImg').src = q.source.img;
      $('#sourceImg').alt = `Cours ${q.source.pdf} — page ${q.source.page}`;
      const caption = `Cours ${q.source.pdf} · page ${q.source.page}` +
        (q.source.title ? ` — ${q.source.title}` : '');
      $('#sourceCaption').textContent = caption;
      srcBlock.classList.remove('hidden');
      // Stocker pour le modal
      srcBlock.dataset.imgSrc = q.source.img;
      srcBlock.dataset.imgCaption = caption;
    } else {
      srcBlock.classList.add('hidden');
    }

    // Scroll doux vers l'explication sur mobile
    setTimeout(() => {
      exp.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  }

  // -------------------- MODAL IMAGE --------------------
  function openImgModal() {
    const block = $('#sourceBlock');
    const src = block.dataset.imgSrc;
    if (!src) return;
    $('#modalImg').src = src;
    $('#modalCaption').textContent = block.dataset.imgCaption || '';
    $('#imgModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeImgModal() {
    $('#imgModal').classList.add('hidden');
    $('#modalImg').src = '';
    document.body.style.overflow = '';
  }

  function nextQuestion() {
    state.index++;
    if (state.index >= state.deck.length) {
      finish();
    } else {
      renderQuestion();
    }
  }

  // -------------------- RESULTAT --------------------
  function finish() {
    const total = state.deck.length;
    const score = state.ok;
    const pct = total === 0 ? 0 : Math.round((score / total) * 100);

    $('#finalScore').textContent = score;
    $('#finalTotal').textContent = total;
    $('#finalPercent').textContent = pct;

    let title, emoji;
    if (pct >= 90)      { title = 'Excellent ! Tu vas cartonner.'; emoji = '🏆'; }
    else if (pct >= 75) { title = 'Très bon score !'; emoji = '🎉'; }
    else if (pct >= 50) { title = 'Pas mal, continue !'; emoji = '💪'; }
    else if (pct >= 30) { title = 'Encore un peu de travail…'; emoji = '📚'; }
    else                { title = 'Allez, on recommence !'; emoji = '🔁'; }
    $('#resultTitle').textContent = title;
    $('#resultEmoji').textContent = emoji;

    // Récap par catégorie
    const catStats = new Map();
    state.answers.forEach((a) => {
      const c = a.q.category;
      if (!catStats.has(c)) catStats.set(c, { ok: 0, total: 0 });
      const s = catStats.get(c);
      s.total++;
      if (a.correct) s.ok++;
    });

    const recap = $('#categoryRecap');
    recap.innerHTML = '';
    Array.from(catStats.entries())
      .sort((a, b) => (b[1].ok / b[1].total) - (a[1].ok / a[1].total))
      .forEach(([cat, s]) => {
        const p = Math.round((s.ok / s.total) * 100);
        const row = document.createElement('div');
        row.className = 'recap-row';
        row.innerHTML = `
          <span class="recap-cat">${escapeHtml(cat)}</span>
          <span class="recap-score">${s.ok}/${s.total}</span>
          <span class="recap-bar"><span class="recap-bar-fill" style="width:${p}%"></span></span>
        `;
        recap.appendChild(row);
      });

    // Si parfait, faire pleuvoir des cœurs
    if (pct === 100) {
      for (let i = 0; i < 30; i++) {
        setTimeout(() => {
          spawnFloatingHeart(
            Math.random() * window.innerWidth,
            window.innerHeight - 50
          );
        }, i * 80);
      }
    }

    // Mode "Mes erreurs" : proposer de retirer les réussies
    const pruneBtn = $('#pruneOkBtn');
    const correctIdxs = state.answers.filter((a) => a.correct).map((a) => a.qIdx);
    if (state.mode === 'mistakes' && correctIdxs.length > 0) {
      $('#pruneCount').textContent = correctIdxs.length;
      pruneBtn.classList.remove('hidden');
      pruneBtn.onclick = () => {
        correctIdxs.forEach((i) => removeMistake(i));
        pruneBtn.classList.add('hidden');
        refreshMistakeBadge();
        pruneBtn.textContent = `Retirées ✓`;
      };
    } else {
      pruneBtn.classList.add('hidden');
    }

    showScreen('#screen-result');
    refreshMistakeBadge();
  }

  // -------------------- REVISION --------------------
  function showReview() {
    const wrongs = state.answers.filter((a) => !a.correct);
    const list = $('#reviewList');
    list.innerHTML = '';

    if (wrongs.length === 0) {
      list.innerHTML = `
        <div class="review-empty">
          <div style="font-size:3rem">🌟</div>
          <p>Aucune erreur ! Tu as tout bon, bravo !</p>
        </div>`;
    } else {
      wrongs.forEach((a) => {
        const div = document.createElement('div');
        div.className = 'review-item';
        const srcLine = (a.q.source && a.q.source.pdf)
          ? `<div class="review-source">📖 Cours ${a.q.source.pdf} · page ${a.q.source.page}${a.q.source.title ? ' — ' + escapeHtml(a.q.source.title) : ''}</div>`
          : '';
        div.innerHTML = `
          <div class="review-question">${escapeHtml(a.q.q)}</div>
          <div class="review-row wrong">
            <span class="label">Ta réponse :</span>
            <span class="val">${escapeHtml(a.q.options[a.given])}</span>
          </div>
          <div class="review-row right">
            <span class="label">Bonne réponse :</span>
            <span class="val">${escapeHtml(a.q.options[a.q.answer])}</span>
          </div>
          <div class="review-explanation">💡 ${escapeHtml(a.q.explanation)}</div>
          ${srcLine}
        `;
        list.appendChild(div);
      });
    }

    showScreen('#screen-review');
  }

  // -------------------- EVENTS --------------------
  function setupEvents() {
    $('#nextBtn').addEventListener('click', nextQuestion);
    $('#quitBtn').addEventListener('click', () => {
      if (confirm('Quitter le quiz en cours ? Ta progression sera perdue.')) {
        showScreen('#screen-home');
      }
    });
    $('#restartBtn').addEventListener('click', () => showScreen('#screen-home'));
    $('#reviewBtn').addEventListener('click', showReview);
    $('#backFromReviewBtn').addEventListener('click', () => showScreen('#screen-result'));

    // Modal image
    $('#sourceImgBtn').addEventListener('click', openImgModal);
    $('#zoomBtn').addEventListener('click', openImgModal);
    $('#closeModalBtn').addEventListener('click', closeImgModal);
    $('#imgModal').addEventListener('click', (ev) => {
      if (ev.target.id === 'imgModal') closeImgModal();
    });

    // Raccourcis clavier
    document.addEventListener('keydown', (ev) => {
      // Modal ouvert : Esc ferme
      if (!$('#imgModal').classList.contains('hidden')) {
        if (ev.key === 'Escape') closeImgModal();
        return;
      }
      if (!$('#screen-quiz').classList.contains('active')) return;
      const expVisible = !$('#explanation').classList.contains('hidden');
      if (expVisible && (ev.key === 'Enter' || ev.key === ' ' || ev.key === 'ArrowRight')) {
        ev.preventDefault();
        nextQuestion();
      } else if (!expVisible && /^[1-6]$/.test(ev.key)) {
        const idx = parseInt(ev.key, 10) - 1;
        const opts = $$('#qOptions .option');
        if (opts[idx]) opts[idx].click();
      }
    });
  }

  // -------------------- INIT --------------------
  document.addEventListener('DOMContentLoaded', () => {
    if (!QUESTIONS.length) {
      $('#totalQuestions').textContent = '0';
      alert('Les questions n\'ont pas pu être chargées.');
      return;
    }
    setupHome();
    setupEvents();
  });
})();
