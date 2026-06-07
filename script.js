/* Quiz POO Python — Logique principale */
(function () {
  'use strict';

  const QUESTIONS = window.QUIZ_QUESTIONS || [];
  const HEART_EMOJIS = ['❤️', '💜', '💖', '💕', '💗', '💝', '🩷', '💓', '🧡', '💛'];

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
  }

  function getCategories() {
    const map = new Map();
    QUESTIONS.forEach((q) => {
      map.set(q.category, (map.get(q.category) || 0) + 1);
    });
    return Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  }

  // Insertion de coeurs aléatoires dans le texte d'une question
  function addRandomHearts(text) {
    // Probabilité d'ajouter des coeurs : 35%
    if (Math.random() > 0.35) return escapeHtml(text);

    const words = text.split(' ');
    const nHearts = 1 + Math.floor(Math.random() * 2); // 1 ou 2 coeurs
    const positions = new Set();
    for (let i = 0; i < nHearts; i++) {
      positions.add(Math.floor(Math.random() * (words.length + 1)));
    }

    const out = [];
    words.forEach((w, i) => {
      if (positions.has(i)) {
        const h = HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)];
        out.push(`<span class="question-heart">${h}</span>`);
      }
      out.push(escapeHtml(w));
    });
    if (positions.has(words.length)) {
      const h = HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)];
      out.push(`<span class="question-heart">${h}</span>`);
    }
    return out.join(' ');
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

    state.answers.push({
      qIdx: QUESTIONS.indexOf(q),
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

    // Scroll doux vers l'explication sur mobile
    setTimeout(() => {
      exp.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
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

    showScreen('#screen-result');
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

    // Raccourcis clavier
    document.addEventListener('keydown', (ev) => {
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
