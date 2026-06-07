window.QUIZ_QUESTIONS = [
 {
  "q": "Quel est l'auteur originel du langage Python ?",
  "options": [
   "Linus Torvalds",
   "Guido Van Rossum",
   "James Gosling",
   "Bjarne Stroustrup"
  ],
  "answer": 1,
  "explanation": "Python a ete cree par Guido Van Rossum a l'Universite d'Amsterdam en 1990, en tant que langage de script du systeme Amoeba.",
  "category": "Introduction"
 },
 {
  "q": "De quel groupe humoristique le nom 'Python' s'inspire-t-il ?",
  "options": [
   "Monty Python's Flying Circus",
   "Saturday Night Live",
   "The Goodies",
   "Mr Bean"
  ],
  "answer": 0,
  "explanation": "Le nom Python vient du groupe Monty Python's Flying Circus, dont Guido Van Rossum etait fan.",
  "category": "Introduction"
 },
 {
  "q": "Python est un langage :",
  "options": [
   "Compile",
   "Interprete",
   "Assemble",
   "Bytecode pur uniquement"
  ],
  "answer": 1,
  "explanation": "Python est analyse a l'execution par un interpreteur. Le cycle est : charger l'instruction, verifier la syntaxe, executer, passer a la suivante.",
  "category": "Introduction"
 },
 {
  "q": "Le typage en Python est :",
  "options": [
   "Statique",
   "Fort et statique",
   "Dynamique",
   "Inexistant"
  ],
  "answer": 2,
  "explanation": "Python est dynamiquement type : le type d'une variable est defini par sa valeur et peut changer pendant l'execution.",
  "category": "Introduction"
 },
 {
  "q": "Quelle est la principale faiblesse d'un langage script comme Python ?",
  "options": [
   "Le debug est plus complique",
   "La vitesse d'execution",
   "L'absence de bibliotheques",
   "La syntaxe verbeuse"
  ],
  "answer": 1,
  "explanation": "Le defaut principal du scripting est la vitesse d'execution, mais le cycle de developpement et le debug sont plus rapides.",
  "category": "Introduction"
 },
 {
  "q": "Quel symbole introduit un commentaire en Python ?",
  "options": [
   "//",
   "/*",
   "#",
   "--"
  ],
  "answer": 2,
  "explanation": "Les commentaires Python sont introduits par le caractere #. Tout le reste de la ligne est ignore.",
  "category": "Introduction"
 },
 {
  "q": "Comment Python delimite-t-il un bloc de code ?",
  "options": [
   "Avec des accolades { }",
   "Avec begin/end",
   "Par l'indentation",
   "Avec des parentheses"
  ],
  "answer": 2,
  "explanation": "Python utilise l'indentation (en general 2 ou 4 espaces) pour delimiter les blocs. C'est syntaxiquement significatif.",
  "category": "Introduction"
 },
 {
  "q": "Quelle est la convention de nommage Python pour une variable simple ?",
  "options": [
   "camelCase",
   "PascalCase",
   "nom_en_snake_case",
   "NomEnMajuscules"
  ],
  "answer": 2,
  "explanation": "La convention Python (PEP 8) recommande snake_case : nom en minuscules avec underscores comme separateurs.",
  "category": "Introduction"
 },
 {
  "q": "Quelle est la convention de nommage pour une classe en Python ?",
  "options": [
   "nom_avec_underscores",
   "MAJUSCULES_TOTALES",
   "NomAvecMajusculeSansSeparateur",
   "_nomPrive"
  ],
  "answer": 2,
  "explanation": "Les classes Python suivent la convention CamelCase : NomAvecMajuscules, sans separateur.",
  "category": "Introduction"
 },
 {
  "q": "Quel IDE est recommande pour les TPs du cours ?",
  "options": [
   "Visual Studio",
   "Eclipse",
   "PyCharm",
   "NetBeans"
  ],
  "answer": 2,
  "explanation": "PyCharm de JetBrains est recommande : disponible sur Linux, macOS et Windows, il integre editeur, interpreteur et debogueur Python.",
  "category": "Introduction"
 },
 {
  "q": "Que permet la coloration parenthesee dans PyCharm ?",
  "options": [
   "Detecter les fautes d'orthographe",
   "Visualiser les paires d'ouverture/fermeture",
   "Compiler plus vite",
   "Lancer le debogueur"
  ],
  "answer": 1,
  "explanation": "La coloration parenthesee aide a reperer visuellement les couples de parentheses/crochets ouvrants et fermants.",
  "category": "Introduction"
 },
 {
  "q": "Sur Linux, comment installe-t-on Python 3 selon le cours ?",
  "options": [
   "sudo yum install python",
   "sudo apt-get install python3",
   "brew install python",
   "pacman -S python"
  ],
  "answer": 1,
  "explanation": "La commande indiquee dans le cours est : sudo apt-get install python3 (sur les distributions a base Debian/Ubuntu).",
  "category": "Introduction"
 },
 {
  "q": "Quel raccourci PyCharm execute le script courant ?",
  "options": [
   "Ctrl+R",
   "F5",
   "Ctrl+Maj+F10",
   "Alt+Entree"
  ],
  "answer": 2,
  "explanation": "Le raccourci PyCharm pour executer est Ctrl+Maj+F10 (ou clic droit -> Run 'script').",
  "category": "Introduction"
 },
 {
  "q": "Quelle commande change de dossier en invite de commande Windows ?",
  "options": [
   "mv",
   "ls",
   "cd",
   "go"
  ],
  "answer": 2,
  "explanation": "La commande cd C:\\Temp\\nom_du_dossier permet de naviguer entre repertoires sous l'invite de commande.",
  "category": "Introduction"
 },
 {
  "q": "Sur quel systeme d'exploitation Python fut-il developpe a l'origine ?",
  "options": [
   "Linux",
   "MS-DOS",
   "Amoeba",
   "Solaris"
  ],
  "answer": 2,
  "explanation": "Python a ete concu comme langage de script pour le systeme d'exploitation distribue Amoeba en 1990.",
  "category": "Introduction"
 },
 {
  "q": "Le type 'int' fait-il partie des types primitifs Python ?",
  "options": [
   "Oui",
   "Non, c'est un module externe",
   "Oui mais via import",
   "Non, c'est une classe utilisateur"
  ],
  "answer": 0,
  "explanation": "'int' est un type primitif natif Python : il n'est pas necessaire de le declarer ou de l'importer.",
  "category": "Types"
 },
 {
  "q": "Le type 'float' fait-il partie des types primitifs Python ?",
  "options": [
   "Oui",
   "Non, c'est un module externe",
   "Oui mais via import",
   "Non, c'est une classe utilisateur"
  ],
  "answer": 0,
  "explanation": "'float' est un type primitif natif Python : il n'est pas necessaire de le declarer ou de l'importer.",
  "category": "Types"
 },
 {
  "q": "Le type 'str' fait-il partie des types primitifs Python ?",
  "options": [
   "Oui",
   "Non, c'est un module externe",
   "Oui mais via import",
   "Non, c'est une classe utilisateur"
  ],
  "answer": 0,
  "explanation": "'str' est un type primitif natif Python : il n'est pas necessaire de le declarer ou de l'importer.",
  "category": "Types"
 },
 {
  "q": "Le type 'bool' fait-il partie des types primitifs Python ?",
  "options": [
   "Oui",
   "Non, c'est un module externe",
   "Oui mais via import",
   "Non, c'est une classe utilisateur"
  ],
  "answer": 0,
  "explanation": "'bool' est un type primitif natif Python : il n'est pas necessaire de le declarer ou de l'importer.",
  "category": "Types"
 },
 {
  "q": "Le type 'list' fait-il partie des types primitifs Python ?",
  "options": [
   "Oui",
   "Non, c'est un module externe",
   "Oui mais via import",
   "Non, c'est une classe utilisateur"
  ],
  "answer": 0,
  "explanation": "'list' est un type primitif natif Python : il n'est pas necessaire de le declarer ou de l'importer.",
  "category": "Types"
 },
 {
  "q": "Le type 'tuple' fait-il partie des types primitifs Python ?",
  "options": [
   "Oui",
   "Non, c'est un module externe",
   "Oui mais via import",
   "Non, c'est une classe utilisateur"
  ],
  "answer": 0,
  "explanation": "'tuple' est un type primitif natif Python : il n'est pas necessaire de le declarer ou de l'importer.",
  "category": "Types"
 },
 {
  "q": "Le type 'dict' fait-il partie des types primitifs Python ?",
  "options": [
   "Oui",
   "Non, c'est un module externe",
   "Oui mais via import",
   "Non, c'est une classe utilisateur"
  ],
  "answer": 0,
  "explanation": "'dict' est un type primitif natif Python : il n'est pas necessaire de le declarer ou de l'importer.",
  "category": "Types"
 },
 {
  "q": "Le type 'set' fait-il partie des types primitifs Python ?",
  "options": [
   "Oui",
   "Non, c'est un module externe",
   "Oui mais via import",
   "Non, c'est une classe utilisateur"
  ],
  "answer": 0,
  "explanation": "'set' est un type primitif natif Python : il n'est pas necessaire de le declarer ou de l'importer.",
  "category": "Types"
 },
 {
  "q": "Le type 'bytes' fait-il partie des types primitifs Python ?",
  "options": [
   "Oui",
   "Non, c'est un module externe",
   "Oui mais via import",
   "Non, c'est une classe utilisateur"
  ],
  "answer": 0,
  "explanation": "'bytes' est un type primitif natif Python : il n'est pas necessaire de le declarer ou de l'importer.",
  "category": "Types"
 },
 {
  "q": "Le type 'bytearray' fait-il partie des types primitifs Python ?",
  "options": [
   "Oui",
   "Non, c'est un module externe",
   "Oui mais via import",
   "Non, c'est une classe utilisateur"
  ],
  "answer": 0,
  "explanation": "'bytearray' est un type primitif natif Python : il n'est pas necessaire de le declarer ou de l'importer.",
  "category": "Types"
 },
 {
  "q": "Le type 'complex' fait-il partie des types primitifs Python ?",
  "options": [
   "Oui",
   "Non, c'est un module externe",
   "Oui mais via import",
   "Non, c'est une classe utilisateur"
  ],
  "answer": 0,
  "explanation": "'complex' est un type primitif natif Python : il n'est pas necessaire de le declarer ou de l'importer.",
  "category": "Types"
 },
 {
  "q": "Le type 'memoryview' fait-il partie des types primitifs Python ?",
  "options": [
   "Oui",
   "Non, c'est un module externe",
   "Oui mais via import",
   "Non, c'est une classe utilisateur"
  ],
  "answer": 0,
  "explanation": "'memoryview' est un type primitif natif Python : il n'est pas necessaire de le declarer ou de l'importer.",
  "category": "Types"
 },
 {
  "q": "Le type 'frozenset' fait-il partie des types primitifs Python ?",
  "options": [
   "Oui",
   "Non, c'est un module externe",
   "Oui mais via import",
   "Non, c'est une classe utilisateur"
  ],
  "answer": 0,
  "explanation": "'frozenset' est un type primitif natif Python : il n'est pas necessaire de le declarer ou de l'importer.",
  "category": "Types"
 },
 {
  "q": "Le type 'range' fait-il partie des types primitifs Python ?",
  "options": [
   "Oui",
   "Non, c'est un module externe",
   "Oui mais via import",
   "Non, c'est une classe utilisateur"
  ],
  "answer": 0,
  "explanation": "'range' est un type primitif natif Python : il n'est pas necessaire de le declarer ou de l'importer.",
  "category": "Types"
 },
 {
  "q": "Que retourne float('0.1') ?",
  "options": [
   "Une erreur",
   "Le float 0.1",
   "Le str '0.1'",
   "L'entier 0"
  ],
  "answer": 1,
  "explanation": "float('0.1') convertit la chaine '0.1' en flottant 0.1. La conversion est coherente.",
  "category": "Types"
 },
 {
  "q": "Que retourne float('bonjour') ?",
  "options": [
   "0.0",
   "Une erreur ValueError",
   "None",
   "'bonjour'"
  ],
  "answer": 1,
  "explanation": "float('bonjour') leve une ValueError car la chaine n'est pas convertible en flottant.",
  "category": "Types"
 },
 {
  "q": "Que vaut int('0xff', 0) ?",
  "options": [
   "0",
   "255",
   "Erreur",
   "ff"
  ],
  "answer": 1,
  "explanation": "Avec la base 0, Python detecte le prefixe 0x et interprete la chaine comme hexadecimale : 0xff = 255.",
  "category": "Types"
 },
 {
  "q": "Que vaut int('ff', 16) ?",
  "options": [
   "0",
   "16",
   "255",
   "Erreur"
  ],
  "answer": 2,
  "explanation": "int('ff', 16) interprete 'ff' en base 16 et retourne 255.",
  "category": "Types"
 },
 {
  "q": "Que vaut int(3.7) ?",
  "options": [
   "4",
   "3",
   "3.7",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "int(3.7) tronque la partie decimale et retourne 3. C'est une troncature et non un arrondi.",
  "category": "Types"
 },
 {
  "q": "Quel operateur teste l'egalite en Python ?",
  "options": [
   "=",
   "==",
   "===",
   "<>"
  ],
  "answer": 1,
  "explanation": "L'operateur d'egalite est ==. Le simple = est l'affectation.",
  "category": "Types"
 },
 {
  "q": "Quel operateur teste l'inegalite en Python ?",
  "options": [
   "!==",
   "<>",
   "!=",
   "not="
  ],
  "answer": 2,
  "explanation": "L'operateur d'inegalite est !=. Aucun autre operateur n'est valide pour cela.",
  "category": "Types"
 },
 {
  "q": "Comment tester explicitement si une variable vaut None ?",
  "options": [
   "a == None",
   "a is None",
   "a = None",
   "a equals None"
  ],
  "answer": 1,
  "explanation": "La convention pythonique est 'a is None' (comparaison d'identite), bien que '==' fonctionne aussi.",
  "category": "Types"
 },
 {
  "q": "Quelles sont les deux fonctions natives pour tester le type d'une variable ?",
  "options": [
   "typeof() et instanceof()",
   "type() et isinstance()",
   "kind() et instance()",
   "classof() et typeof()"
  ],
  "answer": 1,
  "explanation": "type(a) == int et isinstance(a, int) verifient le type. Ces fonctions retournent un booleen.",
  "category": "Types"
 },
 {
  "q": "Que vaut 'cou' * 2 en Python ?",
  "options": [
   "'cou cou'",
   "'cou2'",
   "'coucou'",
   "Erreur"
  ],
  "answer": 2,
  "explanation": "L'operateur * applique a une str la repete : 'cou' * 2 vaut 'coucou'.",
  "category": "Types"
 },
 {
  "q": "Que vaut 'cou' + 'cou' ?",
  "options": [
   "'cou cou'",
   "'coucou'",
   "'cou+cou'",
   "Erreur de type"
  ],
  "answer": 1,
  "explanation": "L'operateur + concatene les chaines de caracteres : 'cou' + 'cou' vaut 'coucou'.",
  "category": "Types"
 },
 {
  "q": "Comment definit-on un tuple en Python ?",
  "options": [
   "[1, 2, 3]",
   "(1, 2, 3)",
   "{1, 2, 3}",
   "<1, 2, 3>"
  ],
  "answer": 1,
  "explanation": "Les tuples sont declares avec des parentheses. Ce sont des sequences non modifiables (immutables).",
  "category": "Types"
 },
 {
  "q": "Comment definit-on une liste en Python ?",
  "options": [
   "(1, 2, 3)",
   "{1, 2, 3}",
   "[1, 2, 3]",
   "<1, 2, 3>"
  ],
  "answer": 2,
  "explanation": "Les listes sont definies avec les crochets [ ]. Elles sont mutables.",
  "category": "Types"
 },
 {
  "q": "Comment definit-on un dictionnaire en Python ?",
  "options": [
   "[clef: valeur]",
   "{clef: valeur}",
   "(clef, valeur)",
   "<clef: valeur>"
  ],
  "answer": 1,
  "explanation": "Un dictionnaire (tableau associatif) se definit avec { cle: valeur, ... } et l'acces se fait par d['cle'].",
  "category": "Types"
 },
 {
  "q": "Que vaut a apres 'a, b = 1, 2; a, b = b, a' ?",
  "options": [
   "1",
   "2",
   "0",
   "(1, 2)"
  ],
  "answer": 1,
  "explanation": "L'echange tuple a, b = b, a inverse les valeurs en une instruction. Apres execution, a vaut 2 et b vaut 1.",
  "category": "Types"
 },
 {
  "q": "Avec t = {'un':1, 'deux':2, 'trois':{'a':10, 'b':20}}, que vaut t['trois']['a'] ?",
  "options": [
   "10",
   "20",
   "trois",
   "Erreur"
  ],
  "answer": 0,
  "explanation": "L'acces emboite t['trois']['a'] descend dans le dictionnaire imbrique et retourne 10.",
  "category": "Types"
 },
 {
  "q": "Une liste peut-elle etre heterogene en Python ?",
  "options": [
   "Non, jamais",
   "Oui : [1, 'deux', 3.0] est valide",
   "Seulement avec un cast",
   "Uniquement les tuples le peuvent"
  ],
  "answer": 1,
  "explanation": "Les listes Python peuvent contenir des elements de types differents : a = [1, 'deux', 3.0] est valide.",
  "category": "Types"
 },
 {
  "q": "Un dictionnaire peut-il etre heterogene (cles et valeurs de types differents) ?",
  "options": [
   "Non",
   "Oui : {'un': 1, 2: 'deux'} est valide",
   "Cles oui, valeurs non",
   "Cles non, valeurs oui"
  ],
  "answer": 1,
  "explanation": "Les dictionnaires acceptent des cles et valeurs heterogenes. Toute valeur hashable peut etre cle.",
  "category": "Types"
 },
 {
  "q": "Que valent les variables a True/False en Python ?",
  "options": [
   "Des entiers",
   "Des booleens",
   "Des strings",
   "Des None"
  ],
  "answer": 1,
  "explanation": "True et False sont les deux valeurs du type bool. Note : isinstance(True, int) renvoie True car bool herite de int.",
  "category": "Types"
 },
 {
  "q": "A quoi correspond la valeur None ?",
  "options": [
   "Zero",
   "Une chaine vide",
   "Rien, l'absence de valeur",
   "False"
  ],
  "answer": 2,
  "explanation": "None represente l'absence de valeur. Pour la tester on utilise 'is None' ou 'is not None'.",
  "category": "Types"
 },
 {
  "q": "Que produit print('a',1,'b') ?",
  "options": [
   "a1b",
   "a 1 b",
   "(a,1,b)",
   "a,1,b"
  ],
  "answer": 1,
  "explanation": "print insere automatiquement un espace entre les arguments separes par virgules, et un retour a la ligne final.",
  "category": "Affichage"
 },
 {
  "q": "Quel format C-style affiche un entier ?",
  "options": [
   "%i",
   "%d",
   "%n",
   "%e"
  ],
  "answer": 1,
  "explanation": "%d (ou %i) affiche un entier en format decimal. Exemple : print('a=%d' % 10).",
  "category": "Affichage"
 },
 {
  "q": "Quel format C-style affiche un float avec 3 decimales ?",
  "options": [
   "%.3d",
   "%3f",
   "%.3f",
   "%f3"
  ],
  "answer": 2,
  "explanation": "%.3f formate un flottant avec 3 chiffres apres la virgule.",
  "category": "Affichage"
 },
 {
  "q": "Quel format C-style affiche une chaine ?",
  "options": [
   "%c",
   "%s",
   "%t",
   "%str"
  ],
  "answer": 1,
  "explanation": "%s formate une chaine de caracteres en C-style. Exemple : print('c=%s' % chaine).",
  "category": "Affichage"
 },
 {
  "q": "Avec txt = 'r:{val:.3f}', comment formate-t-on 0.3333 ?",
  "options": [
   "txt.replace(val, 0.3333)",
   "txt.format(val=0.3333)",
   "txt % 0.3333",
   "format(txt, 0.3333)"
  ],
  "answer": 1,
  "explanation": "La methode .format() avec arguments nommes substitue les placeholders : 'r:0.333'.",
  "category": "Affichage"
 },
 {
  "q": "Le print final ajoute-t-il un retour a la ligne par defaut ?",
  "options": [
   "Non",
   "Oui",
   "Seulement si end='\\n'",
   "Sur Linux uniquement"
  ],
  "answer": 1,
  "explanation": "Par defaut, print ajoute un saut de ligne en fin (parametre end='\\n'). On peut le modifier avec end=''.",
  "category": "Affichage"
 },
 {
  "q": "Que produit print('resultats :', 10, 1/3, 'hi') ?",
  "options": [
   "resultats: 10 0.333 hi",
   "resultats : 10 0.3333333333333333 hi",
   "resultats : 100.333hi",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "Sans formatage, le float affiche toute sa precision. Resultat : 'resultats : 10 0.3333333333333333 hi'.",
  "category": "Affichage"
 },
 {
  "q": "'v:%d' % 10 produit :",
  "options": [
   "'v:%d'",
   "'v:10'",
   "Erreur",
   "10"
  ],
  "answer": 1,
  "explanation": "L'operateur % applique le format : '%d' est remplace par 10 et le resultat est 'v:10'.",
  "category": "Affichage"
 },
 {
  "q": "Quel mot-cle marque le 'sinon' apres un if ?",
  "options": [
   "elseif",
   "elif ou else",
   "otherwise",
   "endif"
  ],
  "answer": 1,
  "explanation": "Python utilise elif pour les conditions intermediaires et else (optionnel) pour le cas final.",
  "category": "Boucles"
 },
 {
  "q": "Le else final d'un if est-il obligatoire ?",
  "options": [
   "Oui",
   "Non, il est optionnel",
   "Seulement si il y a un elif",
   "Uniquement dans une fonction"
  ],
  "answer": 1,
  "explanation": "Le bloc else en fin de chaine if/elif n'est pas obligatoire.",
  "category": "Boucles"
 },
 {
  "q": "Combien de blocs elif sont autorises dans une chaine if ?",
  "options": [
   "Un seul",
   "Deux maximum",
   "Autant que necessaire",
   "Aucun"
  ],
  "answer": 2,
  "explanation": "On peut chainer autant de blocs elif que necessaire entre le if et le else final.",
  "category": "Boucles"
 },
 {
  "q": "Quelle syntaxe correcte de boucle for sur un iterable ?",
  "options": [
   "for x of iterable:",
   "foreach x in iterable:",
   "for x in iterable:",
   "for(x : iterable):"
  ],
  "answer": 2,
  "explanation": "La syntaxe Python est : for x in iterable: AAA. Le bloc AAA est indente.",
  "category": "Boucles"
 },
 {
  "q": "Quelle syntaxe correcte d'une boucle while ?",
  "options": [
   "while(cond) do",
   "while cond:",
   "while cond {",
   "loop until cond:"
  ],
  "answer": 1,
  "explanation": "Python : while condition: bloc indente. Pas de parentheses ni d'accolades.",
  "category": "Boucles"
 },
 {
  "q": "Combien d'espaces sont recommandes par niveau d'indentation ?",
  "options": [
   "1",
   "2 ou 4",
   "8",
   "Variable selon humeur"
  ],
  "answer": 1,
  "explanation": "Convention : 2 ou 4 espaces par niveau d'indentation (PEP 8 recommande 4).",
  "category": "Boucles"
 },
 {
  "q": "Que fait 'for i in range(len(a)):' ?",
  "options": [
   "Parcourt les valeurs",
   "Parcourt les indices 0..len(a)-1",
   "Parcourt indices et valeurs",
   "Provoque une erreur"
  ],
  "answer": 1,
  "explanation": "range(len(a)) genere 0, 1, ..., len(a)-1, utile pour acceder aux indices.",
  "category": "Boucles"
 },
 {
  "q": "Comment parcourir indices ET valeurs d'une liste ?",
  "options": [
   "for i in a:",
   "for i, val in enumerate(a):",
   "for (i, val) in a:",
   "for val, i in indexed(a):"
  ],
  "answer": 1,
  "explanation": "enumerate(a) retourne des paires (indice, valeur). Syntaxe : for i, val in enumerate(a).",
  "category": "Boucles"
 },
 {
  "q": "Que produit ce code : a=[0,1,2,3]; for e in a: e += 1 ; print(a) ?",
  "options": [
   "[1,2,3,4]",
   "[0,1,2,3]",
   "[0,0,0,0]",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "e est une copie locale du contenu. Incrementer e ne modifie pas la liste a. Resultat : [0,1,2,3].",
  "category": "Boucles"
 },
 {
  "q": "Que produit a=[0,1,2,3]; for i in range(len(a)): a[i] += 1 ; print(a) ?",
  "options": [
   "[0,1,2,3]",
   "[1,2,3,4]",
   "[1,1,1,1]",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "On modifie a[i] via l'indice, donc la liste est bien modifiee. Resultat : [1,2,3,4].",
  "category": "Boucles"
 },
 {
  "q": "Comment declarer une liste vide ?",
  "options": [
   "a = list",
   "a = []",
   "a = {}",
   "a = ()"
  ],
  "answer": 1,
  "explanation": "a = [] cree une liste vide. a = list() est equivalent.",
  "category": "Listes"
 },
 {
  "q": "Comment obtenir la taille d'une liste a ?",
  "options": [
   "a.size()",
   "size(a)",
   "len(a)",
   "a.length"
  ],
  "answer": 2,
  "explanation": "len(a) retourne le nombre d'elements de la liste.",
  "category": "Listes"
 },
 {
  "q": "Que fait [x*2 for x in a] ?",
  "options": [
   "Modifie a en place",
   "Genere une nouvelle liste avec chaque element double",
   "Provoque une erreur",
   "Retourne un seul nombre"
  ],
  "answer": 1,
  "explanation": "C'est une comprehension de liste qui cree une nouvelle liste : chaque element x de a est remplace par x*2.",
  "category": "Listes"
 },
 {
  "q": "Que retourne [x*3 for x in a if x > 3] avec a=[1,2,3,4,5] ?",
  "options": [
   "[3,6,9,12,15]",
   "[12,15]",
   "[4,5]",
   "[6,9,12,15]"
  ],
  "answer": 1,
  "explanation": "On garde seulement les x > 3 (donc 4 et 5), puis on les multiplie par 3 : [12, 15].",
  "category": "Listes"
 },
 {
  "q": "Comment supprimer le premier element d'une liste a ?",
  "options": [
   "a.del(0)",
   "del a[0]",
   "remove(a[0])",
   "a.pop[0]"
  ],
  "answer": 1,
  "explanation": "del a[0] supprime l'element a l'indice 0. Alternative : a.pop(0).",
  "category": "Listes"
 },
 {
  "q": "Que fait del a[0:2] ?",
  "options": [
   "Supprime les elements 0, 1 et 2",
   "Supprime les elements 0 et 1",
   "Vide la liste",
   "Provoque une erreur"
  ],
  "answer": 1,
  "explanation": "Le slicing [0:2] inclut les indices 0 et 1 (fin exclue), donc supprime 2 elements.",
  "category": "Listes"
 },
 {
  "q": "Que fait l'instruction 'del a' ?",
  "options": [
   "Vide a sans la supprimer",
   "Supprime la reference a (l'objet est libere si plus aucune ref)",
   "Erreur",
   "Cree une nouvelle liste"
  ],
  "answer": 1,
  "explanation": "del a supprime la reference. L'objet liste est libere si aucune autre reference ne l'utilise.",
  "category": "Listes"
 },
 {
  "q": "Apres b = a, modifier b modifie-t-il a ?",
  "options": [
   "Non, ce sont des copies",
   "Oui, c'est la meme reference",
   "Seulement les premiers elements",
   "Cela depend du type"
  ],
  "answer": 1,
  "explanation": "b = a cree une nouvelle reference vers la meme liste. Modifier b modifie a (et inversement).",
  "category": "Listes"
 },
 {
  "q": "Quelle expression copie une liste a ?",
  "options": [
   "b = a",
   "b = a[:]",
   "b = a.length",
   "b = copy a"
  ],
  "answer": 1,
  "explanation": "a[:] cree une copie superficielle. Alternatives : list(a) ou [x for x in a].",
  "category": "Listes"
 },
 {
  "q": "Quelle methode ajoute un element x a la fin d'une liste ?",
  "options": [
   "a.add(x)",
   "a.append(x)",
   "a.push(x)",
   "a.insert(x)"
  ],
  "answer": 1,
  "explanation": "a.append(x) ajoute l'element x en queue de liste.",
  "category": "Listes"
 },
 {
  "q": "Quelle methode ajoute chaque element d'une liste a la fin d'une autre ?",
  "options": [
   "a.append(b)",
   "a.merge(b)",
   "a.extend(b)",
   "a.concat(b)"
  ],
  "answer": 2,
  "explanation": "a.extend(b) ajoute chaque element de b. Comparer avec a.append(b) qui ajoute b comme UN element (liste imbriquee).",
  "category": "Listes"
 },
 {
  "q": "Que fait a.append([1,2,3]) avec a=[1,2,3] ?",
  "options": [
   "a devient [1,2,3,1,2,3]",
   "a devient [1,2,3,[1,2,3]]",
   "Erreur",
   "a est inchangee"
  ],
  "answer": 1,
  "explanation": "append ajoute son argument tel quel comme UN element. La liste devient [1,2,3,[1,2,3]].",
  "category": "Listes"
 },
 {
  "q": "Que fait a.extend([1,2,3]) avec a=[1,2,3] ?",
  "options": [
   "a devient [1,2,3,1,2,3]",
   "a devient [1,2,3,[1,2,3]]",
   "Erreur",
   "a est inchangee"
  ],
  "answer": 0,
  "explanation": "extend ajoute chaque element individuellement : a devient [1,2,3,1,2,3].",
  "category": "Listes"
 },
 {
  "q": "Que fait a.remove(x) ?",
  "options": [
   "Supprime l'element a l'indice x",
   "Supprime la 1re occurrence egale a x",
   "Supprime toutes les occurrences",
   "Cree une copie sans x"
  ],
  "answer": 1,
  "explanation": "remove supprime la PREMIERE occurrence egale a x. ValueError si x absent.",
  "category": "Listes"
 },
 {
  "q": "Que fait a.pop() ?",
  "options": [
   "Vide la liste",
   "Retire et retourne le dernier element",
   "Retire et retourne le premier",
   "Renvoie la taille"
  ],
  "answer": 1,
  "explanation": "pop() sans argument retire et retourne l'element en queue de liste.",
  "category": "Listes"
 },
 {
  "q": "Que fait a.pop(n) ?",
  "options": [
   "Pop n elements",
   "Retire et retourne le n-ieme element",
   "Pop le dernier element n fois",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "pop(n) retire et retourne l'element a l'indice n. IndexError si n hors limites.",
  "category": "Listes"
 },
 {
  "q": "Que retourne a.index(x) ?",
  "options": [
   "x si present",
   "La position du premier element egal a x",
   "Le nombre d'occurrences",
   "True/False"
  ],
  "answer": 1,
  "explanation": "index(x) retourne l'indice de la PREMIERE occurrence de x. ValueError si absent.",
  "category": "Listes"
 },
 {
  "q": "Que retourne a.count(x) ?",
  "options": [
   "L'indice de x",
   "Le nombre d'occurrences de x",
   "True/False",
   "La taille"
  ],
  "answer": 1,
  "explanation": "count(x) retourne combien de fois x apparait dans la liste.",
  "category": "Listes"
 },
 {
  "q": "Quelle methode trie une liste EN PLACE ?",
  "options": [
   "a.sort()",
   "sorted(a)",
   "a.sorted()",
   "sort(a)"
  ],
  "answer": 0,
  "explanation": "a.sort() modifie la liste sur place et retourne None. sorted(a) renvoie une nouvelle liste triee.",
  "category": "Listes"
 },
 {
  "q": "Que fait sorted(a) ?",
  "options": [
   "Trie a en place",
   "Retourne une copie triee de a",
   "Inverse a",
   "Affiche a triee"
  ],
  "answer": 1,
  "explanation": "sorted(a) ne modifie pas a et retourne une nouvelle liste triee.",
  "category": "Listes"
 },
 {
  "q": "Quelle methode inverse une liste en place ?",
  "options": [
   "a.flip()",
   "a.reverse()",
   "a.invert()",
   "reversed(a)"
  ],
  "answer": 1,
  "explanation": "a.reverse() inverse la liste en place. reversed(a) renvoie un iterateur sans modifier a.",
  "category": "Listes"
 },
 {
  "q": "Comment tester si 1 est dans la liste a ?",
  "options": [
   "a.has(1)",
   "a.contains(1)",
   "1 in a",
   "1 isin a"
  ],
  "answer": 2,
  "explanation": "L'operateur 'in' verifie l'appartenance. '1 in a' retourne True ou False.",
  "category": "Listes"
 },
 {
  "q": "Que retourne sum([[0,1,2],[1,2,3]], []) ?",
  "options": [
   "6",
   "[[0,1,2],[1,2,3]]",
   "[0,1,2,1,2,3]",
   "Erreur"
  ],
  "answer": 2,
  "explanation": "sum avec une valeur initiale [] aplatit une liste de listes (concatene les sous-listes).",
  "category": "Listes"
 },
 {
  "q": "Que renvoie min([3,1,4,1,5]) ?",
  "options": [
   "1",
   "0",
   "5",
   "3"
  ],
  "answer": 0,
  "explanation": "min retourne le plus petit element. Ici 1.",
  "category": "Listes"
 },
 {
  "q": "Que renvoie max([3,1,4,1,5]) ?",
  "options": [
   "1",
   "5",
   "4",
   "3"
  ],
  "answer": 1,
  "explanation": "max retourne le plus grand element. Ici 5.",
  "category": "Listes"
 },
 {
  "q": "Que retourne a[:10] ?",
  "options": [
   "a[10]",
   "Les elements d'indice 0 a 9 inclus",
   "Les 10 derniers elements",
   "Une copie de a"
  ],
  "answer": 1,
  "explanation": "Le slicing [:10] prend les indices 0 a 9 (10 exclu).",
  "category": "Listes"
 },
 {
  "q": "Que retourne a[10:] ?",
  "options": [
   "a[10]",
   "Les elements de 0 a 10",
   "Les elements d'indice 10 jusqu'a la fin",
   "Erreur"
  ],
  "answer": 2,
  "explanation": "[10:] retourne tous les elements a partir de l'indice 10 jusqu'a la fin.",
  "category": "Listes"
 },
 {
  "q": "Que retourne a[::10] ?",
  "options": [
   "Les 10 premiers elements",
   "Les elements d'indice 0, 10, 20, ...",
   "Les 10 derniers elements",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "Le slicing [debut:fin:pas] avec pas=10 prend un element sur 10.",
  "category": "Listes"
 },
 {
  "q": "Que retourne a[1::10] ?",
  "options": [
   "Les 10 premiers",
   "Les elements d'indices 1, 11, 21, ...",
   "L'element 1 dix fois",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "Debut=1, pas=10 : on prend les indices 1, 11, 21, etc.",
  "category": "Listes"
 },
 {
  "q": "Que retourne a[-10] ?",
  "options": [
   "L'element a l'indice 10",
   "Le 10e element en partant de la fin",
   "Erreur",
   "Les 10 derniers elements"
  ],
  "answer": 1,
  "explanation": "Indice negatif : -1 est le dernier, -10 est le 10e en partant de la fin.",
  "category": "Listes"
 },
 {
  "q": "a[-0] est equivalent a :",
  "options": [
   "a[-1]",
   "a[0]",
   "Erreur",
   "Aucun element"
  ],
  "answer": 1,
  "explanation": "-0 et 0 sont identiques pour l'entier, donc a[-0] == a[0].",
  "category": "Listes"
 },
 {
  "q": "Que retourne a[10:20] ?",
  "options": [
   "20 elements",
   "Les indices 10 a 19 inclus",
   "Les indices 10 a 20 inclus",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "[10:20] inclut l'indice 10 et exclut 20, donc indices 10 a 19.",
  "category": "Listes"
 },
 {
  "q": "Que retourne [x for x in [3,4,5,6,7] if x&1] ?",
  "options": [
   "[3,4,5,6,7]",
   "[4,6]",
   "[3,5,7]",
   "[]"
  ],
  "answer": 2,
  "explanation": "x&1 vaut 1 (truthy) pour les impairs. La comprehension garde [3, 5, 7].",
  "category": "Listes"
 },
 {
  "q": "Que produit a[::-1] ?",
  "options": [
   "Une erreur",
   "La liste inversee",
   "Une copie",
   "La premiere moitie"
  ],
  "answer": 1,
  "explanation": "Pas -1 parcourt la liste en sens inverse. C'est une facon courante de retourner une copie inversee.",
  "category": "Listes"
 },
 {
  "q": "{x: x**2 for x in range(5,-2,-1)} produit :",
  "options": [
   "{5:25, 4:16, 3:9, 2:4, 1:1, 0:0, -1:1}",
   "{0:0, 1:1, ..., 5:25}",
   "Erreur",
   "[25, 16, 9, 4, 1, 0, 1]"
  ],
  "answer": 0,
  "explanation": "C'est une dict comprehension qui mappe chaque x a x**2 pour x = 5, 4, 3, 2, 1, 0, -1.",
  "category": "Listes"
 },
 {
  "q": "Que vaut [2] * 3 ?",
  "options": [
   "[6]",
   "[2, 2, 2]",
   "[2, 3]",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "Multiplication d'une liste par un entier : repete son contenu. [2]*3 = [2, 2, 2].",
  "category": "Listes"
 },
 {
  "q": "Avec a = [0,1,2]; b = (x for x in a), que produit next(b) ?",
  "options": [
   "[0,1,2]",
   "0",
   "1",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "(x for x in a) cree un generateur. next(b) consomme le 1er element : 0. Le suivant retournerait 1.",
  "category": "Listes"
 },
 {
  "q": "range(3) genere :",
  "options": [
   "1, 2, 3",
   "0, 1, 2",
   "0, 1, 2, 3",
   "3"
  ],
  "answer": 1,
  "explanation": "range(n) genere 0, 1, ..., n-1. Donc range(3) = 0, 1, 2.",
  "category": "Listes"
 },
 {
  "q": "range(2, 6) genere :",
  "options": [
   "2, 3, 4, 5",
   "2, 3, 4, 5, 6",
   "0, 1, 2, 3, 4, 5",
   "2, 6"
  ],
  "answer": 0,
  "explanation": "range(start, stop) inclut start et exclut stop.",
  "category": "Listes"
 },
 {
  "q": "range(2, 10, 2) genere :",
  "options": [
   "2, 4, 6, 8, 10",
   "2, 4, 6, 8",
   "0, 2, 4, 6, 8",
   "2, 10"
  ],
  "answer": 1,
  "explanation": "range(start, stop, step) : depart 2, fin 10 exclue, pas 2 -> 2, 4, 6, 8.",
  "category": "Listes"
 },
 {
  "q": "range(5, 0, -1) genere :",
  "options": [
   "5, 4, 3, 2, 1",
   "5, 4, 3, 2, 1, 0",
   "1, 2, 3, 4, 5",
   "Erreur"
  ],
  "answer": 0,
  "explanation": "Avec pas negatif on parcourt en descendant : 5, 4, 3, 2, 1 (0 exclu).",
  "category": "Listes"
 },
 {
  "q": "Les tuples sont :",
  "options": [
   "Modifiables",
   "Non modifiables",
   "Modifiables si vides",
   "Modifiables seulement en boucle"
  ],
  "answer": 1,
  "explanation": "Les tuples sont immutables : on ne peut ni ajouter, ni modifier, ni supprimer leurs elements.",
  "category": "Listes"
 },
 {
  "q": "Que fait ce code ? a=[(1,2),(3,4),(5,6)]; for (x,y) in a: print(x,y)",
  "options": [
   "Erreur de syntaxe",
   "Affiche 1 2 puis 3 4 puis 5 6",
   "Affiche les paires",
   "Affiche les indices"
  ],
  "answer": 1,
  "explanation": "Le 'tuple unpacking' decompose chaque paire. Affiche : 1 2, 3 4, 5 6 sur des lignes successives.",
  "category": "Listes"
 },
 {
  "q": "Comment delimiter une chaine en Python ?",
  "options": [
   "Apostrophes ou guillemets",
   "Crochets uniquement",
   "< >",
   "Backticks"
  ],
  "answer": 0,
  "explanation": "On utilise des apostrophes ' ou des guillemets \". \\ sert d'echappement.",
  "category": "Strings"
 },
 {
  "q": "Que vaut x[2] pour x = 'abcdef' ?",
  "options": [
   "'a'",
   "'b'",
   "'c'",
   "Erreur"
  ],
  "answer": 2,
  "explanation": "L'indexation commence a 0 : x[0]='a', x[1]='b', x[2]='c'.",
  "category": "Strings"
 },
 {
  "q": "Que vaut x[2:] pour x = 'abcdef' ?",
  "options": [
   "'ab'",
   "'cd'",
   "'cdef'",
   "'ef'"
  ],
  "answer": 2,
  "explanation": "[2:] prend les caracteres d'indice 2 a la fin : 'cdef'.",
  "category": "Strings"
 },
 {
  "q": "Que fait x[0] = 'A' sur une chaine ?",
  "options": [
   "Modifie x",
   "Provoque une TypeError",
   "Cree une nouvelle chaine",
   "Aucun effet"
  ],
  "answer": 1,
  "explanation": "Les chaines sont IMMUTABLES en Python. L'affectation par index leve TypeError.",
  "category": "Strings"
 },
 {
  "q": "Comment convertir 'abc' en liste de caracteres ?",
  "options": [
   "str_to_list('abc')",
   "list('abc')",
   "'abc'.toList()",
   "split('abc')"
  ],
  "answer": 1,
  "explanation": "list('abc') retourne ['a','b','c']. La str est iterable caractere par caractere.",
  "category": "Strings"
 },
 {
  "q": "Comment tester si 'c' est dans la chaine x ?",
  "options": [
   "x.has('c')",
   "'c' in x",
   "x.contains('c')",
   "indexOf('c', x)"
  ],
  "answer": 1,
  "explanation": "L'operateur 'in' fonctionne aussi sur les chaines : verifie la presence d'un sous-element.",
  "category": "Strings"
 },
 {
  "q": "Que retourne 'aabab'.count('ab') ?",
  "options": [
   "1",
   "2",
   "3",
   "0"
  ],
  "answer": 1,
  "explanation": "count compte les occurrences NON CHEVAUCHANTES de 'ab' : 2.",
  "category": "Strings"
 },
 {
  "q": "Que fait x.startswith('ab') ?",
  "options": [
   "Cherche 'ab' n'importe ou",
   "Retourne True si x commence par 'ab'",
   "Modifie x",
   "Retourne l'indice"
  ],
  "answer": 1,
  "explanation": "startswith retourne un booleen indiquant si la chaine commence par l'argument.",
  "category": "Strings"
 },
 {
  "q": "Que fait x.endswith('ab') ?",
  "options": [
   "Coupe a 'ab'",
   "Retourne True si x finit par 'ab'",
   "Cherche 'ab'",
   "Provoque une erreur"
  ],
  "answer": 1,
  "explanation": "endswith retourne True si la chaine se termine par l'argument.",
  "category": "Strings"
 },
 {
  "q": "Quelle methode teste si tous les caracteres sont alphanumeriques ?",
  "options": [
   "isalpha",
   "isalnum",
   "isdigit",
   "isspace"
  ],
  "answer": 1,
  "explanation": "isalnum() retourne True si tous les caracteres sont alphanumeriques (lettres ou chiffres) et non vide.",
  "category": "Strings"
 },
 {
  "q": "Quelle methode teste si tous les caracteres sont des lettres ?",
  "options": [
   "isalnum",
   "isdigit",
   "isalpha",
   "isspace"
  ],
  "answer": 2,
  "explanation": "isalpha() teste que tous les caracteres sont alphabetiques.",
  "category": "Strings"
 },
 {
  "q": "Quelle methode teste si tous les caracteres sont des chiffres ?",
  "options": [
   "isnum",
   "isdigit",
   "isnumeric",
   "isint"
  ],
  "answer": 1,
  "explanation": "isdigit() retourne True si tous les caracteres sont des chiffres decimaux.",
  "category": "Strings"
 },
 {
  "q": "Que fait x.find('bc') pour x='abcdef' ?",
  "options": [
   "Erreur",
   "Retourne 1 (indice du premier 'bc')",
   "Retourne 'bc'",
   "Retourne True"
  ],
  "answer": 1,
  "explanation": "find retourne l'indice de la premiere occurrence du motif. Retourne -1 si absent (sans erreur).",
  "category": "Strings"
 },
 {
  "q": "Que fait x.index('AB') si 'AB' n'est pas dans x ?",
  "options": [
   "Retourne -1",
   "Retourne None",
   "Leve ValueError",
   "Retourne False"
  ],
  "answer": 2,
  "explanation": "index leve ValueError si l'argument est absent (contrairement a find qui retourne -1).",
  "category": "Strings"
 },
 {
  "q": "Que fait 'abcDEF'.capitalize() ?",
  "options": [
   "'ABCDEF'",
   "'abcdef'",
   "'Abcdef'",
   "'Abcdef'"
  ],
  "answer": 2,
  "explanation": "capitalize met la premiere lettre en majuscule et le reste en minuscules : 'Abcdef'.",
  "category": "Strings"
 },
 {
  "q": "Que fait 'ABC'.lower() ?",
  "options": [
   "'abc'",
   "'ABC'",
   "'Abc'",
   "Erreur"
  ],
  "answer": 0,
  "explanation": "lower() retourne une nouvelle chaine en minuscules.",
  "category": "Strings"
 },
 {
  "q": "Que fait 'abab'.replace('ab', 'XY') ?",
  "options": [
   "'abab'",
   "'XYXY'",
   "'XYab'",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "replace remplace TOUTES les occurrences par defaut.",
  "category": "Strings"
 },
 {
  "q": "Que fait 'abab'.replace('ab', 'XY', 1) ?",
  "options": [
   "'XYab'",
   "'XYXY'",
   "'abab'",
   "'abXY'"
  ],
  "answer": 0,
  "explanation": "Le 3e argument limite le nombre de remplacements. Ici, seulement la 1re occurrence est remplacee.",
  "category": "Strings"
 },
 {
  "q": "Que fait 'a b c'.split(' ') ?",
  "options": [
   "'abc'",
   "['a','b','c']",
   "'a','b','c'",
   "['a b c']"
  ],
  "answer": 1,
  "explanation": "split(' ') decoupe la chaine en liste de sous-chaines a chaque espace.",
  "category": "Strings"
 },
 {
  "q": "Comment saisir un entier au clavier ?",
  "options": [
   "read_int()",
   "int(input(...))",
   "scanf('%d')",
   "input.int()"
  ],
  "answer": 1,
  "explanation": "input() retourne une str. On la convertit en int avec int(input('...')).",
  "category": "Strings"
 },
 {
  "q": "Que retourne input(...) par defaut ?",
  "options": [
   "Un int",
   "Une str",
   "Un float",
   "None"
  ],
  "answer": 1,
  "explanation": "input retourne toujours une chaine str. Conversion explicite necessaire pour les nombres.",
  "category": "Strings"
 },
 {
  "q": "Comment definir une fonction Python ?",
  "options": [
   "function name():",
   "def name():",
   "func name():",
   "fn name():"
  ],
  "answer": 1,
  "explanation": "Mot-cle def, nom, parentheses, deux-points et bloc indente.",
  "category": "Fonctions"
 },
 {
  "q": "Comment importer une bibliotheque ?",
  "options": [
   "include math",
   "import math",
   "require math",
   "use math"
  ],
  "answer": 1,
  "explanation": "import math charge le module math. Puis math.sqrt(2) par exemple.",
  "category": "Fonctions"
 },
 {
  "q": "Que vaut math.sqrt(2) approximativement ?",
  "options": [
   "1.0",
   "1.414",
   "2.0",
   "4.0"
  ],
  "answer": 1,
  "explanation": "sqrt(2) vaut environ 1.4142135.",
  "category": "Fonctions"
 },
 {
  "q": "Comment definir une valeur par defaut a un parametre ?",
  "options": [
   "def f(x default=0):",
   "def f(x=0):",
   "def f(x : 0):",
   "def f(x = default 0):"
  ],
  "answer": 1,
  "explanation": "def f(x=0): le parametre x prend la valeur 0 si non fourni a l'appel.",
  "category": "Fonctions"
 },
 {
  "q": "Une fonction Python peut-elle retourner plusieurs valeurs ?",
  "options": [
   "Non",
   "Oui, en retournant un tuple",
   "Seulement via une liste",
   "Seulement via un dict"
  ],
  "answer": 1,
  "explanation": "return a, b retourne en realite un tuple (a, b) qu'on peut decompacter a l'appel.",
  "category": "Fonctions"
 },
 {
  "q": "def fun(l): for elt in l: elt += 1. Quel est l'effet sur la liste passee ?",
  "options": [
   "Tous les elements sont incrementes",
   "La liste est inchangee",
   "Erreur",
   "Le premier element seulement"
  ],
  "answer": 1,
  "explanation": "elt est une copie locale, pas une reference. La liste reste inchangee.",
  "category": "Fonctions"
 },
 {
  "q": "def fun(l): return [e+10 for e in l]. Quel est l'effet sur l ?",
  "options": [
   "l est modifiee",
   "l est inchangee, on retourne une nouvelle liste",
   "Erreur",
   "Tous les elements sont +10"
  ],
  "answer": 1,
  "explanation": "La comprehension cree une nouvelle liste : la liste passee en argument n'est pas modifiee.",
  "category": "Fonctions"
 },
 {
  "q": "Quel operateur calcule le quotient entier ?",
  "options": [
   "/",
   "//",
   "%",
   "**"
  ],
  "answer": 1,
  "explanation": "// est la division entiere. 7//2 = 3.",
  "category": "Operateurs"
 },
 {
  "q": "Quel operateur calcule le reste de la division entiere ?",
  "options": [
   "/",
   "//",
   "%",
   "mod"
  ],
  "answer": 2,
  "explanation": "% retourne le reste : 7%2 = 1.",
  "category": "Operateurs"
 },
 {
  "q": "Quel operateur ou fonction calcule la puissance ?",
  "options": [
   "^",
   "**",
   "pow",
   "** et pow() tous les deux"
  ],
  "answer": 3,
  "explanation": "** est l'operateur puissance, pow(a, b) est la fonction equivalente.",
  "category": "Operateurs"
 },
 {
  "q": "Que fait round(2.6) ?",
  "options": [
   "2",
   "3",
   "2.5",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "round arrondit a l'entier le plus proche. 2.6 -> 3.",
  "category": "Operateurs"
 },
 {
  "q": "Quelle fonction donne l'arrondi inferieur ?",
  "options": [
   "round",
   "floor",
   "ceil",
   "trunc"
  ],
  "answer": 1,
  "explanation": "math.floor() arrondit a l'entier inferieur (vers -infini).",
  "category": "Operateurs"
 },
 {
  "q": "Quelle fonction donne l'arrondi superieur ?",
  "options": [
   "round",
   "floor",
   "ceil",
   "trunc"
  ],
  "answer": 2,
  "explanation": "math.ceil() arrondit a l'entier superieur (vers +infini).",
  "category": "Operateurs"
 },
 {
  "q": "Quel operateur logique pour le XOR ?",
  "options": [
   "and",
   "or",
   "^",
   "**"
  ],
  "answer": 2,
  "explanation": "^ est le ou exclusif (XOR). True ^ False vaut True.",
  "category": "Operateurs"
 },
 {
  "q": "Quel mot-cle Python pour le OU logique ?",
  "options": [
   "||",
   "or",
   "OR",
   "|"
  ],
  "answer": 1,
  "explanation": "Python utilise les mots-cles 'or', 'and', 'not'.",
  "category": "Operateurs"
 },
 {
  "q": "Quel mot-cle Python pour le ET logique ?",
  "options": [
   "&&",
   "and",
   "AND",
   "&"
  ],
  "answer": 1,
  "explanation": "Python utilise 'and' pour le ET logique. & est un ET binaire (bit a bit).",
  "category": "Operateurs"
 },
 {
  "q": "Que vaut 'x if cond else y' ?",
  "options": [
   "Une syntaxe invalide",
   "x si cond est vraie, y sinon",
   "Toujours x",
   "Toujours y"
  ],
  "answer": 1,
  "explanation": "C'est l'expression conditionnelle ternaire de Python.",
  "category": "Operateurs"
 },
 {
  "q": "Quel mot-cle declare une classe ?",
  "options": [
   "function",
   "type",
   "class",
   "struct"
  ],
  "answer": 2,
  "explanation": "class Nom: declare une classe Nom.",
  "category": "Classes"
 },
 {
  "q": "Une classe = ?",
  "options": [
   "Attributs uniquement",
   "Methodes uniquement",
   "Attributs + methodes",
   "Donnees brutes"
  ],
  "answer": 2,
  "explanation": "Une classe est l'assemblage d'attributs (donnees) et de methodes (comportements).",
  "category": "Classes"
 },
 {
  "q": "Un objet est :",
  "options": [
   "Une classe",
   "Une instance d'une classe",
   "Une methode",
   "Un attribut"
  ],
  "answer": 1,
  "explanation": "Un objet est une INSTANCE d'une classe, cree par appel au constructeur.",
  "category": "Classes"
 },
 {
  "q": "Le mot-cle Python referencant l'instance courante est :",
  "options": [
   "this",
   "self",
   "me",
   "instance"
  ],
  "answer": 1,
  "explanation": "Python utilise 'self' comme premier parametre des methodes pour referencer l'instance.",
  "category": "Classes"
 },
 {
  "q": "Comment se nomme le constructeur d'une classe Python ?",
  "options": [
   "__create__",
   "__init__",
   "Init",
   "constructor"
  ],
  "answer": 1,
  "explanation": "__init__(self, ...) est appele automatiquement a l'instanciation.",
  "category": "Classes"
 },
 {
  "q": "Comment instancier une classe A ?",
  "options": [
   "a = new A()",
   "a = A.new()",
   "a = A()",
   "a = create(A)"
  ],
  "answer": 2,
  "explanation": "Python instancie en appelant la classe comme une fonction : a = A().",
  "category": "Classes"
 },
 {
  "q": "Dans 'class A: def fun(self): return self.x', a quoi sert self ?",
  "options": [
   "Variable globale",
   "Reference l'instance pour acceder aux attributs",
   "Une fonction predefinie",
   "Un mot-cle reserve interdit"
  ],
  "answer": 1,
  "explanation": "self est la reference vers l'instance, permettant d'acceder a ses attributs (ex: self.x).",
  "category": "Classes"
 },
 {
  "q": "Comment determiner la memoire utilisee par un objet a ?",
  "options": [
   "len(a)",
   "size(a)",
   "sys.getsizeof(a)",
   "a.size"
  ],
  "answer": 2,
  "explanation": "sys.getsizeof(a) retourne la memoire occupee par l'objet (sans les references qu'il contient).",
  "category": "Classes"
 },
 {
  "q": "Comment forcer la desallocation d'un objet ?",
  "options": [
   "a.free()",
   "del(a)",
   "garbage(a)",
   "release(a)"
  ],
  "answer": 1,
  "explanation": "del(a) supprime la reference. L'objet est libere si plus aucune autre ne le referencie.",
  "category": "Classes"
 },
 {
  "q": "L'encapsulation consiste a :",
  "options": [
   "Coder vite",
   "Creer une capsule pour acceder aux donnees et restreindre les acces",
   "Compresser les classes",
   "Eviter les fonctions"
  ],
  "answer": 1,
  "explanation": "L'encapsulation expose une interface controlee et masque l'implementation interne.",
  "category": "Encapsulation"
 },
 {
  "q": "Quel niveau d'acces signifie 'acces libre pour tous' ?",
  "options": [
   "public",
   "prive",
   "protege",
   "abstrait"
  ],
  "answer": 0,
  "explanation": "public : aucun controle d'acces, tout le monde peut y acceder.",
  "category": "Encapsulation"
 },
 {
  "q": "Quel niveau d'acces est reserve aux methodes de la classe ?",
  "options": [
   "public",
   "prive",
   "protege",
   "abstrait"
  ],
  "answer": 1,
  "explanation": "prive : seules les methodes de la classe peuvent y acceder.",
  "category": "Encapsulation"
 },
 {
  "q": "Quel niveau d'acces est accessible via l'heritage ?",
  "options": [
   "public",
   "prive",
   "protege",
   "abstrait"
  ],
  "answer": 2,
  "explanation": "protege : accessible aux methodes de la classe ET aux sous-classes via l'heritage.",
  "category": "Encapsulation"
 },
 {
  "q": "En Python, comment marque-t-on un membre prive (convention) ?",
  "options": [
   "public _",
   "deux underscores au debut __x",
   "majuscule X",
   "$x"
  ],
  "answer": 1,
  "explanation": "En Python, un nom commencant par __ (double underscore) est considere prive (name mangling).",
  "category": "Encapsulation"
 },
 {
  "q": "En Python, comment marque-t-on un membre protege (convention) ?",
  "options": [
   "_x",
   "__x",
   "Xprot",
   "x_"
  ],
  "answer": 0,
  "explanation": "Le simple underscore _x signale par convention un membre protege ou interne.",
  "category": "Encapsulation"
 },
 {
  "q": "Une methode 'get_x' s'appelle un :",
  "options": [
   "mutateur",
   "constructeur",
   "accesseur (getter)",
   "destructeur"
  ],
  "answer": 2,
  "explanation": "Les getters (get_x) sont des accesseurs en lecture des attributs prives.",
  "category": "Encapsulation"
 },
 {
  "q": "Une methode 'set_x' est un :",
  "options": [
   "accesseur",
   "mutateur (setter)",
   "destructeur",
   "constructeur par defaut"
  ],
  "answer": 1,
  "explanation": "Les setters (set_x) sont des mutateurs en ecriture, controlent la modification.",
  "category": "Encapsulation"
 },
 {
  "q": "Dans class Point: def __init__(self): self.x = 0; self.y = 0, que cree a = Point() ?",
  "options": [
   "Une classe",
   "Un objet Point avec x=0, y=0",
   "Une erreur",
   "Une fonction"
  ],
  "answer": 1,
  "explanation": "L'appel a Point() invoque __init__ et cree une instance avec x=0 et y=0.",
  "category": "Classes"
 },
 {
  "q": "Avec class Point: def translate(self, dx, dy): self.x += dx; self.y += dy, que fait a.translate(1,2) ?",
  "options": [
   "Cree un nouveau point",
   "Incrementer x de 1 et y de 2",
   "Erreur",
   "Retourne (1, 2)"
  ],
  "answer": 1,
  "explanation": "translate modifie en place les attributs x et y de l'instance a.",
  "category": "Classes"
 },
 {
  "q": "Avec __x prive, a.__x = 10 depuis l'exterieur :",
  "options": [
   "Modifie x",
   "Cree un attribut __x distinct (name mangling)",
   "Erreur immediate",
   "Aucun effet"
  ],
  "answer": 1,
  "explanation": "Le name mangling transforme __x en _Point__x. a.__x = 10 cree un attribut diffrent.",
  "category": "Encapsulation"
 },
 {
  "q": "Pourquoi utiliser des accesseurs (get/set) ?",
  "options": [
   "C'est plus lent",
   "Pour controler les acces aux attributs prives",
   "C'est obligatoire en Python",
   "Pour cacher la classe"
  ],
  "answer": 1,
  "explanation": "Les accesseurs encapsulent l'acces : validation des donnees, log, format de sortie etc.",
  "category": "Encapsulation"
 },
 {
  "q": "Une variable declaree dans une fonction est :",
  "options": [
   "globale",
   "locale a la fonction",
   "attribut",
   "constante"
  ],
  "answer": 1,
  "explanation": "Variable locale a la fonction : accessible uniquement a l'interieur de celle-ci.",
  "category": "Portee"
 },
 {
  "q": "Une variable declaree dans une classe (au niveau de la classe) est :",
  "options": [
   "locale",
   "globale",
   "un attribut de classe",
   "interdite"
  ],
  "answer": 2,
  "explanation": "Une variable de classe (def en dehors des methodes) est un attribut de classe partage par toutes les instances.",
  "category": "Portee"
 },
 {
  "q": "Une variable declaree dans un bloc if est :",
  "options": [
   "locale a ce bloc seulement",
   "accessible dans toute la fonction englobante",
   "globale",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "En Python, la portee est au niveau de la fonction (pas du bloc). Une variable creee dans un if est accessible dans la fonction.",
  "category": "Portee"
 },
 {
  "q": "Une variable declaree hors de tout est :",
  "options": [
   "locale",
   "globale",
   "attribut",
   "constante"
  ],
  "answer": 1,
  "explanation": "Variable globale : accessible partout dans le module.",
  "category": "Portee"
 },
 {
  "q": "Une classe derivee herite :",
  "options": [
   "Aucun element",
   "Uniquement les attributs",
   "Attributs et methodes de la classe mere",
   "Uniquement les methodes"
  ],
  "answer": 2,
  "explanation": "L'heritage transmet attributs ET methodes de la classe mere a la classe fille.",
  "category": "Heritage"
 },
 {
  "q": "Une classe derivee peut-elle ajouter des methodes a la classe mere ?",
  "options": [
   "Non",
   "Oui, en plus de celles heritees",
   "Seulement par recopie",
   "Uniquement si declarees privees"
  ],
  "answer": 1,
  "explanation": "La classe fille peut definir de nouvelles methodes/attributs en plus de l'heritage.",
  "category": "Heritage"
 },
 {
  "q": "Une classe fille peut-elle redefinir une methode mere ?",
  "options": [
   "Non, c'est interdit",
   "Oui (overriding)",
   "Seulement si la mere est abstraite",
   "Non, on peut juste appeler"
  ],
  "answer": 1,
  "explanation": "La redefinition (overriding) permet de specialiser le comportement.",
  "category": "Heritage"
 },
 {
  "q": "Python supporte-t-il l'heritage multiple ?",
  "options": [
   "Non",
   "Oui",
   "Oui, mais uniquement 2 classes",
   "Non, on doit utiliser des interfaces"
  ],
  "answer": 1,
  "explanation": "Python autorise l'heritage multiple : class C(A, B).",
  "category": "Heritage"
 },
 {
  "q": "Une classe d'ou l'on herite est :",
  "options": [
   "classe fille",
   "classe derivee",
   "classe mere ou super-classe",
   "interface"
  ],
  "answer": 2,
  "explanation": "Vocabulaire : la classe dont on herite est la classe mere (ou super-classe / parent).",
  "category": "Heritage"
 },
 {
  "q": "Une classe qui herite est :",
  "options": [
   "classe mere",
   "classe derivee (ou fille)",
   "interface",
   "module"
  ],
  "answer": 1,
  "explanation": "La classe qui herite s'appelle classe derivee, sous-classe ou classe fille.",
  "category": "Heritage"
 },
 {
  "q": "Syntaxe pour heriter d'une classe A en Python ?",
  "options": [
   "class B extends A:",
   "class B(A):",
   "class B inherits A:",
   "class B : A"
  ],
  "answer": 1,
  "explanation": "Python : class B(A): - la classe parente est entre parentheses apres le nom.",
  "category": "Heritage"
 },
 {
  "q": "Pourquoi appeler A.__init__(self) dans le constructeur d'une classe B(A) ?",
  "options": [
   "Decoration syntaxique",
   "Pour initialiser les attributs de la classe mere",
   "C'est interdit",
   "Cela detruit l'instance"
  ],
  "answer": 1,
  "explanation": "Sans appel explicite, les attributs de la classe mere ne sont pas initialises.",
  "category": "Heritage"
 },
 {
  "q": "Alternative moderne a A.__init__(self) en Python ?",
  "options": [
   "super().__init__()",
   "this.parent()",
   "A.create()",
   "Aucune"
  ],
  "answer": 0,
  "explanation": "super().__init__() invoque le constructeur parent sans nommer la classe (plus robuste pour l'heritage multiple).",
  "category": "Heritage"
 },
 {
  "q": "Une interface, en POO, c'est :",
  "options": [
   "Une classe utilisable directement",
   "Une definition sans implementation",
   "Un attribut prive",
   "Une fonction"
  ],
  "answer": 1,
  "explanation": "Une interface specifie un contrat (methodes a implementer) sans fournir d'implementation.",
  "category": "Interfaces"
 },
 {
  "q": "Une classe qui contient au moins une methode non implementee est :",
  "options": [
   "incomplete",
   "abstraite",
   "privee",
   "interdite"
  ],
  "answer": 1,
  "explanation": "Une classe abstraite ne peut etre instanciee directement ; elle force ses filles a implementer ses methodes.",
  "category": "Interfaces"
 },
 {
  "q": "Comment forcer une classe fille a implementer une methode en Python (technique simple) ?",
  "options": [
   "Mettre 'TODO'",
   "raise NotImplementedError()",
   "return None",
   "del self"
  ],
  "answer": 1,
  "explanation": "Lever NotImplementedError dans la methode de base est un pattern courant.",
  "category": "Interfaces"
 },
 {
  "q": "Question d'application sur la classe Point : que retourne a.distance1(b) ou a et b sont deux Points (a=(0,0), b=(0,0)) ?",
  "options": [
   "0",
   "1",
   "0",
   "0"
  ],
  "answer": 0,
  "explanation": "distance1 calcule sqrt((dx)^2 + (dy)^2). Ici dx=0, dy=0, donc resultat = 0.0.",
  "category": "Classes"
 },
 {
  "q": "Question d'application sur la classe Point : que retourne a.distance1(b) ou a et b sont deux Points (a=(1,0), b=(0,0)) ?",
  "options": [
   "1",
   "2",
   "0",
   "0"
  ],
  "answer": 0,
  "explanation": "distance1 calcule sqrt((dx)^2 + (dy)^2). Ici dx=1, dy=0, donc resultat = 1.0.",
  "category": "Classes"
 },
 {
  "q": "Question d'application sur la classe Point : que retourne a.distance1(b) ou a et b sont deux Points (a=(2,0), b=(0,0)) ?",
  "options": [
   "2",
   "3",
   "1",
   "0"
  ],
  "answer": 0,
  "explanation": "distance1 calcule sqrt((dx)^2 + (dy)^2). Ici dx=2, dy=0, donc resultat = 2.0.",
  "category": "Classes"
 },
 {
  "q": "Question d'application sur la classe Point : que retourne a.distance1(b) ou a et b sont deux Points (a=(3,0), b=(0,0)) ?",
  "options": [
   "3",
   "4",
   "2",
   "0"
  ],
  "answer": 0,
  "explanation": "distance1 calcule sqrt((dx)^2 + (dy)^2). Ici dx=3, dy=0, donc resultat = 3.0.",
  "category": "Classes"
 },
 {
  "q": "Question d'application sur la classe Point : que retourne a.distance1(b) ou a et b sont deux Points (a=(4,0), b=(0,0)) ?",
  "options": [
   "4",
   "5",
   "3",
   "0"
  ],
  "answer": 0,
  "explanation": "distance1 calcule sqrt((dx)^2 + (dy)^2). Ici dx=4, dy=0, donc resultat = 4.0.",
  "category": "Classes"
 },
 {
  "q": "Question d'application sur la classe Point : que retourne a.distance1(b) ou a et b sont deux Points (a=(5,0), b=(0,0)) ?",
  "options": [
   "5",
   "6",
   "4",
   "0"
  ],
  "answer": 0,
  "explanation": "distance1 calcule sqrt((dx)^2 + (dy)^2). Ici dx=5, dy=0, donc resultat = 5.0.",
  "category": "Classes"
 },
 {
  "q": "Question d'application sur la classe Point : que retourne a.distance1(b) ou a et b sont deux Points (a=(6,0), b=(0,0)) ?",
  "options": [
   "6",
   "7",
   "5",
   "0"
  ],
  "answer": 0,
  "explanation": "distance1 calcule sqrt((dx)^2 + (dy)^2). Ici dx=6, dy=0, donc resultat = 6.0.",
  "category": "Classes"
 },
 {
  "q": "Question d'application sur la classe Point : que retourne a.distance1(b) ou a et b sont deux Points (a=(7,0), b=(0,0)) ?",
  "options": [
   "7",
   "8",
   "6",
   "0"
  ],
  "answer": 0,
  "explanation": "distance1 calcule sqrt((dx)^2 + (dy)^2). Ici dx=7, dy=0, donc resultat = 7.0.",
  "category": "Classes"
 },
 {
  "q": "Question d'application sur la classe Point : que retourne a.distance1(b) ou a et b sont deux Points (a=(8,0), b=(0,0)) ?",
  "options": [
   "8",
   "9",
   "7",
   "0"
  ],
  "answer": 0,
  "explanation": "distance1 calcule sqrt((dx)^2 + (dy)^2). Ici dx=8, dy=0, donc resultat = 8.0.",
  "category": "Classes"
 },
 {
  "q": "Question d'application sur la classe Point : que retourne a.distance1(b) ou a et b sont deux Points (a=(9,0), b=(0,0)) ?",
  "options": [
   "9",
   "10",
   "8",
   "0"
  ],
  "answer": 0,
  "explanation": "distance1 calcule sqrt((dx)^2 + (dy)^2). Ici dx=9, dy=0, donc resultat = 9.0.",
  "category": "Classes"
 },
 {
  "q": "Question d'application sur la classe Point : que retourne a.distance1(b) ou a et b sont deux Points (a=(10,0), b=(0,0)) ?",
  "options": [
   "10",
   "11",
   "9",
   "0"
  ],
  "answer": 0,
  "explanation": "distance1 calcule sqrt((dx)^2 + (dy)^2). Ici dx=10, dy=0, donc resultat = 10.0.",
  "category": "Classes"
 },
 {
  "q": "Question d'application sur la classe Point : que retourne a.distance1(b) ou a et b sont deux Points (a=(11,0), b=(0,0)) ?",
  "options": [
   "11",
   "12",
   "10",
   "0"
  ],
  "answer": 0,
  "explanation": "distance1 calcule sqrt((dx)^2 + (dy)^2). Ici dx=11, dy=0, donc resultat = 11.0.",
  "category": "Classes"
 },
 {
  "q": "Question d'application sur la classe Point : que retourne a.distance1(b) ou a et b sont deux Points (a=(12,0), b=(0,0)) ?",
  "options": [
   "12",
   "13",
   "11",
   "0"
  ],
  "answer": 0,
  "explanation": "distance1 calcule sqrt((dx)^2 + (dy)^2). Ici dx=12, dy=0, donc resultat = 12.0.",
  "category": "Classes"
 },
 {
  "q": "Question d'application sur la classe Point : que retourne a.distance1(b) ou a et b sont deux Points (a=(13,0), b=(0,0)) ?",
  "options": [
   "13",
   "14",
   "12",
   "0"
  ],
  "answer": 0,
  "explanation": "distance1 calcule sqrt((dx)^2 + (dy)^2). Ici dx=13, dy=0, donc resultat = 13.0.",
  "category": "Classes"
 },
 {
  "q": "Question d'application sur la classe Point : que retourne a.distance1(b) ou a et b sont deux Points (a=(14,0), b=(0,0)) ?",
  "options": [
   "14",
   "15",
   "13",
   "0"
  ],
  "answer": 0,
  "explanation": "distance1 calcule sqrt((dx)^2 + (dy)^2). Ici dx=14, dy=0, donc resultat = 14.0.",
  "category": "Classes"
 },
 {
  "q": "Question d'application sur la classe Point : que retourne a.distance1(b) ou a et b sont deux Points (a=(15,0), b=(0,0)) ?",
  "options": [
   "15",
   "16",
   "14",
   "0"
  ],
  "answer": 0,
  "explanation": "distance1 calcule sqrt((dx)^2 + (dy)^2). Ici dx=15, dy=0, donc resultat = 15.0.",
  "category": "Classes"
 },
 {
  "q": "Question d'application sur la classe Point : que retourne a.distance1(b) ou a et b sont deux Points (a=(16,0), b=(0,0)) ?",
  "options": [
   "16",
   "17",
   "15",
   "0"
  ],
  "answer": 0,
  "explanation": "distance1 calcule sqrt((dx)^2 + (dy)^2). Ici dx=16, dy=0, donc resultat = 16.0.",
  "category": "Classes"
 },
 {
  "q": "Question d'application sur la classe Point : que retourne a.distance1(b) ou a et b sont deux Points (a=(17,0), b=(0,0)) ?",
  "options": [
   "17",
   "18",
   "16",
   "0"
  ],
  "answer": 0,
  "explanation": "distance1 calcule sqrt((dx)^2 + (dy)^2). Ici dx=17, dy=0, donc resultat = 17.0.",
  "category": "Classes"
 },
 {
  "q": "Question d'application sur la classe Point : que retourne a.distance1(b) ou a et b sont deux Points (a=(18,0), b=(0,0)) ?",
  "options": [
   "18",
   "19",
   "17",
   "0"
  ],
  "answer": 0,
  "explanation": "distance1 calcule sqrt((dx)^2 + (dy)^2). Ici dx=18, dy=0, donc resultat = 18.0.",
  "category": "Classes"
 },
 {
  "q": "Question d'application sur la classe Point : que retourne a.distance1(b) ou a et b sont deux Points (a=(19,0), b=(0,0)) ?",
  "options": [
   "19",
   "20",
   "18",
   "0"
  ],
  "answer": 0,
  "explanation": "distance1 calcule sqrt((dx)^2 + (dy)^2). Ici dx=19, dy=0, donc resultat = 19.0.",
  "category": "Classes"
 },
 {
  "q": "Un module en Python est :",
  "options": [
   "Une classe abstraite",
   "Un fichier contenant des classes et/ou fonctions",
   "Une bibliotheque externe",
   "Une variable globale"
  ],
  "answer": 1,
  "explanation": "Un module est un fichier .py contenant du code reutilisable (classes, fonctions, variables).",
  "category": "Modules"
 },
 {
  "q": "Le nom d'un module est :",
  "options": [
   "Defini par #!",
   "Le nom du fichier sans .py",
   "Le nom de la 1re classe",
   "Choisi a l'import"
  ],
  "answer": 1,
  "explanation": "Le nom du module est le nom du fichier sans son suffixe .py.",
  "category": "Modules"
 },
 {
  "q": "Quelle variable speciale contient le nom du module courant ?",
  "options": [
   "__file__",
   "__name__",
   "__module__",
   "__package__"
  ],
  "answer": 1,
  "explanation": "__name__ contient le nom du module. Vaut '__main__' si execute directement.",
  "category": "Modules"
 },
 {
  "q": "Comment importer le module fibonacci ?",
  "options": [
   "include fibonacci",
   "import fibonacci",
   "from fibonacci",
   "require fibonacci"
  ],
  "answer": 1,
  "explanation": "import fibonacci charge le module et permet de l'utiliser par fibonacci.fonction(...).",
  "category": "Modules"
 },
 {
  "q": "Comment renommer un module a l'import en 'f' ?",
  "options": [
   "import fibonacci named f",
   "import fibonacci as f",
   "from fibonacci import f",
   "rename fibonacci to f"
  ],
  "answer": 1,
  "explanation": "import fibonacci as f permet d'utiliser f.fonction() au lieu de fibonacci.fonction().",
  "category": "Modules"
 },
 {
  "q": "Comment importer juste les fonctions print_module_name et fibo de fibonacci ?",
  "options": [
   "from fibonacci import print_module_name, fibo",
   "import fibonacci.print_module_name, fibo",
   "import print_module_name, fibo from fibonacci",
   "include fibonacci.fibo"
  ],
  "answer": 0,
  "explanation": "from module import f1, f2 importe directement les noms specifiques (utilisables sans prefixe).",
  "category": "Modules"
 },
 {
  "q": "Comment importer toutes les fonctions sans prefixe d'un module ?",
  "options": [
   "from fibonacci import all",
   "from fibonacci import *",
   "import fibonacci.*",
   "from fibonacci import everything"
  ],
  "answer": 1,
  "explanation": "from module import * importe tout. A utiliser avec parcimonie (collisions de noms possibles).",
  "category": "Modules"
 },
 {
  "q": "Quelle suite est calculee par fibo(x) avec F0=0, F1=1, Fn=Fn-1+Fn-2 ?",
  "options": [
   "Arithmetique",
   "Geometrique",
   "Fibonacci",
   "Premiers"
  ],
  "answer": 2,
  "explanation": "C'est la suite de Fibonacci classique.",
  "category": "Modules"
 },
 {
  "q": "Combien vaut fibo(10) ?",
  "options": [
   "10",
   "55",
   "89",
   "21"
  ],
  "answer": 1,
  "explanation": "F10 = 55 (0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55).",
  "category": "Modules"
 },
 {
  "q": "Une bibliotheque (library) en Python est :",
  "options": [
   "Un ensemble de modules",
   "Une seule fonction",
   "Une variable globale",
   "Une classe"
  ],
  "answer": 0,
  "explanation": "Une bibliotheque est composee d'un ou plusieurs modules.",
  "category": "Modules"
 },
 {
  "q": "Le gestionnaire de paquets standard de Python est :",
  "options": [
   "npm",
   "pip",
   "apt",
   "yarn"
  ],
  "answer": 1,
  "explanation": "pip permet d'installer les paquets : pip install nom_du_paquet.",
  "category": "Modules"
 },
 {
  "q": "Quel est le site de la base de donnees des paquets Python ?",
  "options": [
   "github.com",
   "pypi.org",
   "python-packages.com",
   "pip.org"
  ],
  "answer": 1,
  "explanation": "PyPI (Python Package Index) sur https://pypi.org est le depot officiel.",
  "category": "Modules"
 },
 {
  "q": "Comment rendre un script Python executable sur Linux ?",
  "options": [
   "chmod 777",
   "chmod +x et ajouter un shebang #!/usr/bin/python3",
   "Le compiler",
   "Rien a faire"
  ],
  "answer": 1,
  "explanation": "Il faut marquer le fichier executable (chmod +x) et ajouter en 1re ligne #!/usr/bin/python3.",
  "category": "Modules"
 },
 {
  "q": "Quel module pour des nombres aleatoires ?",
  "options": [
   "math",
   "random",
   "numpy.random",
   "rand"
  ],
  "answer": 1,
  "explanation": "Le module standard random contient les fonctions de tirage pseudo-aleatoire.",
  "category": "Modules"
 },
 {
  "q": "Quel module pour des interfaces graphiques (standard) ?",
  "options": [
   "PyQt",
   "tkinter",
   "pygame",
   "matplotlib"
  ],
  "answer": 1,
  "explanation": "tkinter est livre avec Python et fournit une API d'interface graphique.",
  "category": "Modules"
 },
 {
  "q": "rnd.seed(x) sert a :",
  "options": [
   "Generer un x",
   "Fixer la graine de la serie pseudo-aleatoire",
   "Effacer les tirages",
   "Recommencer une boucle"
  ],
  "answer": 1,
  "explanation": "seed(x) initialise le generateur a une valeur donnee, garantissant la reproductibilite.",
  "category": "Random"
 },
 {
  "q": "rnd.randint(a, b) retourne :",
  "options": [
   "un float dans [a,b]",
   "un entier dans [a,b] (b inclus)",
   "un entier dans [a,b[ (b exclu)",
   "a ou b"
  ],
  "answer": 1,
  "explanation": "randint inclut les deux bornes. Pour exclure la borne sup, utiliser randrange.",
  "category": "Random"
 },
 {
  "q": "rnd.random() retourne :",
  "options": [
   "Un entier",
   "Un float dans [0, 1.0]",
   "Un booleen",
   "None"
  ],
  "answer": 1,
  "explanation": "random() retourne un flottant pseudo-aleatoire dans l'intervalle [0, 1.0].",
  "category": "Random"
 },
 {
  "q": "rnd.uniform(a, b) retourne :",
  "options": [
   "Un entier de [a,b]",
   "Un float de [a, b]",
   "False",
   "Toujours a"
  ],
  "answer": 1,
  "explanation": "uniform retourne un flottant uniformement distribue entre a et b.",
  "category": "Random"
 },
 {
  "q": "rnd.randrange(x) retourne :",
  "options": [
   "Un entier dans [0, x-1]",
   "Un entier dans [0, x]",
   "Un float",
   "0"
  ],
  "answer": 0,
  "explanation": "randrange(x) genere un entier dans [0, x[. Donc max possible = x-1.",
  "category": "Random"
 },
 {
  "q": "rnd.randrange(0, x, 2) retourne :",
  "options": [
   "Un float pair",
   "Un entier impair",
   "Un entier pair dans [0, x-1]",
   "Une liste"
  ],
  "answer": 2,
  "explanation": "Le pas 2 saute de 2 en 2 : on obtient un entier pair entre 0 et x-1.",
  "category": "Random"
 },
 {
  "q": "rnd.choice(s) retourne :",
  "options": [
   "Le 1er element",
   "Un element aleatoire de s",
   "La taille de s",
   "True/False"
  ],
  "answer": 1,
  "explanation": "choice(s) selectionne un element au hasard dans s.",
  "category": "Random"
 },
 {
  "q": "rnd.shuffle(s) :",
  "options": [
   "Trie s",
   "Melange s en place",
   "Retourne une copie melangee",
   "Vide s"
  ],
  "answer": 1,
  "explanation": "shuffle melange la liste IN PLACE et retourne None.",
  "category": "Random"
 },
 {
  "q": "rnd.sample(s, n) :",
  "options": [
   "Tire n elements avec remise",
   "Tire n elements sans remise",
   "Retourne le n-ieme element",
   "Trie les n premiers"
  ],
  "answer": 1,
  "explanation": "sample retourne n elements distincts sans remise (echantillonnage).",
  "category": "Random"
 },
 {
  "q": "Le generateur pseudo-aleatoire de glibc utilise quelle formule ?",
  "options": [
   "next = next * 1103515245 + 12345",
   "rand()",
   "Mersenne Twister",
   "RDRAND"
  ],
  "answer": 0,
  "explanation": "L'exemple du cours montre la recurrence lineaire : next = next * 1103515245 + 12345.",
  "category": "Random"
 },
 {
  "q": "Que fait copy.copy(l) sur une liste 1D ?",
  "options": [
   "Copie de reference seulement",
   "Copie superficielle",
   "Copie profonde",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "copy() est une copie superficielle. Sur une liste 1D de primitifs, c'est suffisant.",
  "category": "Copy"
 },
 {
  "q": "Pourquoi utiliser copy.deepcopy() ?",
  "options": [
   "C'est plus rapide",
   "Pour copier les listes a plus d'1 dimension",
   "Pour copier seulement le 1er niveau",
   "Pour copier des entiers"
  ],
  "answer": 1,
  "explanation": "deepcopy copie recursivement tous les niveaux. Necessaire pour les listes imbriquees ou objets composites.",
  "category": "Copy"
 },
 {
  "q": "Si a=[[1,1,1],[2,2,2]] et b=cp.copy(a), modifier a[0][1] modifie-t-il b ?",
  "options": [
   "Non",
   "Oui (copie superficielle)",
   "Cela depend",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "copy() copie le niveau exterieur. Les sous-listes restent partagees. b[0][1] est aussi modifie.",
  "category": "Copy"
 },
 {
  "q": "Si a=[[1,1,1],[2,2,2]] et b=cp.deepcopy(a), modifier a[0][1] modifie-t-il b ?",
  "options": [
   "Non",
   "Oui",
   "Seulement le 1er element",
   "Erreur"
  ],
  "answer": 0,
  "explanation": "deepcopy duplique chaque niveau. b est totalement independant.",
  "category": "Copy"
 },
 {
  "q": "Un constructeur par copie :",
  "options": [
   "Cree une copie d'un objet",
   "Detruit un objet",
   "Affiche un objet",
   "Compare deux objets"
  ],
  "answer": 0,
  "explanation": "Constructeur par copie : construit un nouvel objet en utilisant un objet existant comme modele.",
  "category": "Copy"
 },
 {
  "q": "Quel argument optionnel typique a un constructeur par copie en Python ?",
  "options": [
   "obj_to_destroy=None",
   "obj_to_copy=None",
   "src=None",
   "Aucun"
  ],
  "answer": 1,
  "explanation": "Pattern courant : def __init__(self, obj_to_copy=None) avec test pour copier les attributs.",
  "category": "Copy"
 },
 {
  "q": "Une exception en Python est :",
  "options": [
   "Une syntaxe etrange",
   "Un objet contenant des infos sur une erreur",
   "Un warning",
   "Une variable"
  ],
  "answer": 1,
  "explanation": "Une exception est un objet decrivant l'erreur. Si non traitee, le programme s'arrete.",
  "category": "Exceptions"
 },
 {
  "q": "Quelle est la classe de base de toutes les exceptions natives ?",
  "options": [
   "Exception",
   "BaseException",
   "Error",
   "Throwable"
  ],
  "answer": 1,
  "explanation": "BaseException est la racine. Exception est la base des exceptions utilisateurs (et descend de BaseException).",
  "category": "Exceptions"
 },
 {
  "q": "Quelle classe de base pour les exceptions utilisateurs ?",
  "options": [
   "Exception",
   "BaseException",
   "RuntimeError",
   "UserException"
  ],
  "answer": 0,
  "explanation": "On herite generalement de Exception (et non BaseException) pour les exceptions utilisateurs.",
  "category": "Exceptions"
 },
 {
  "q": "Quelle classe pour les erreurs arithmetiques ?",
  "options": [
   "MathError",
   "ArithmeticException",
   "NumberError",
   "CalcError"
  ],
  "answer": 1,
  "explanation": "ArithmeticException est la base des erreurs arithmetiques (OverflowError, ZeroDivisionError, ...).",
  "category": "Exceptions"
 },
 {
  "q": "Quelle exception leve 1/0 ?",
  "options": [
   "ArithmeticError",
   "OverflowError",
   "ZeroDivisionError",
   "ValueError"
  ],
  "answer": 2,
  "explanation": "ZeroDivisionError : division par zero. Aussi pour le modulo par zero.",
  "category": "Exceptions"
 },
 {
  "q": "Quelle exception leve math.exp(800) ?",
  "options": [
   "MathError",
   "OverflowError",
   "ZeroDivisionError",
   "ValueError"
  ],
  "answer": 1,
  "explanation": "math.exp(800) deborde la capacite des floats : OverflowError 'math range error'.",
  "category": "Exceptions"
 },
 {
  "q": "Sur quel type Python l'OverflowError n'est jamais leve ?",
  "options": [
   "int",
   "float",
   "complex",
   "Aucun"
  ],
  "answer": 0,
  "explanation": "Les int Python ont une precision arbitraire (pas d'overflow). En revanche les operations math.exp() peuvent en lever.",
  "category": "Exceptions"
 },
 {
  "q": "Quelle exception pour un index hors limites ?",
  "options": [
   "IndexError",
   "KeyError",
   "ValueError",
   "LookupError"
  ],
  "answer": 0,
  "explanation": "IndexError quand on accede a un index inexistant d'une sequence.",
  "category": "Exceptions"
 },
 {
  "q": "Quelle exception pour une cle absente d'un dict ?",
  "options": [
   "IndexError",
   "KeyError",
   "ValueError",
   "LookupError"
  ],
  "answer": 1,
  "explanation": "KeyError est leve quand on accede a d['cle'] inexistante.",
  "category": "Exceptions"
 },
 {
  "q": "Quelle classe parente de IndexError et KeyError ?",
  "options": [
   "LookupError",
   "ValueError",
   "BaseException",
   "RuntimeError"
  ],
  "answer": 0,
  "explanation": "LookupError est la base des erreurs d'indexation/recherche.",
  "category": "Exceptions"
 },
 {
  "q": "ImportError ou ModuleNotFoundError est leve quand :",
  "options": [
   "Import echoue",
   "Argument invalide",
   "Boucle infinie",
   "Fin de fichier"
  ],
  "answer": 0,
  "explanation": "Lorsqu'un module ne peut etre importe (introuvable ou syntaxe interne erronee).",
  "category": "Exceptions"
 },
 {
  "q": "KeyboardInterrupt est leve quand :",
  "options": [
   "L'utilisateur appuie sur Ctrl+C",
   "Une touche est pressee",
   "Erreur clavier",
   "Boucle interrompue"
  ],
  "answer": 0,
  "explanation": "KeyboardInterrupt signale une interruption par l'utilisateur (Ctrl+C).",
  "category": "Exceptions"
 },
 {
  "q": "Comment intercepter une exception ?",
  "options": [
   "catch-try",
   "try-except",
   "try-catch",
   "rescue-end"
  ],
  "answer": 1,
  "explanation": "En Python, on utilise try: ... except: ... (et non try-catch comme en Java).",
  "category": "Exceptions"
 },
 {
  "q": "Quel bloc s'execute toujours, qu'il y ait erreur ou non ?",
  "options": [
   "else",
   "except",
   "finally",
   "raise"
  ],
  "answer": 2,
  "explanation": "finally s'execute toujours apres le try (avec ou sans exception).",
  "category": "Exceptions"
 },
 {
  "q": "Que fait le bloc 'else' apres un try-except ?",
  "options": [
   "S'execute toujours",
   "S'execute si AUCUNE exception levee",
   "S'execute si une exception est levee",
   "Affiche un warning"
  ],
  "answer": 1,
  "explanation": "else dans try-except s'execute uniquement si aucune exception n'a ete levee.",
  "category": "Exceptions"
 },
 {
  "q": "Comment intercepter plusieurs types d'exceptions dans un seul bloc except ?",
  "options": [
   "except A, B:",
   "except (A, B):",
   "except A | B:",
   "except A and B:"
  ],
  "answer": 1,
  "explanation": "On utilise un tuple : except (A, B) as e:",
  "category": "Exceptions"
 },
 {
  "q": "Comment intercepter TOUTE exception ?",
  "options": [
   "except all:",
   "except (*)",
   "except :",
   "except Exception"
  ],
  "answer": 3,
  "explanation": "except Exception attrape toutes les exceptions usuelles. except: tout court attrape aussi BaseException (KeyboardInterrupt, ...).",
  "category": "Exceptions"
 },
 {
  "q": "Que fait 'pass' dans un bloc except ?",
  "options": [
   "Re-leve l'exception",
   "Ne fait rien (silencieux)",
   "Retourne True",
   "Arrete le programme"
  ],
  "answer": 1,
  "explanation": "pass est une instruction nulle : ne fait rien, le bloc ne reagit pas.",
  "category": "Exceptions"
 },
 {
  "q": "Comment declencher manuellement une exception ?",
  "options": [
   "throw",
   "raise",
   "emit",
   "trigger"
  ],
  "answer": 1,
  "explanation": "raise <Exception>(...) declenche manuellement une exception.",
  "category": "Exceptions"
 },
 {
  "q": "Comment definir sa propre exception ?",
  "options": [
   "class MyE(Error):",
   "class MyE(Exception): pass",
   "exception MyE",
   "raise NewE()"
  ],
  "answer": 1,
  "explanation": "On herite de Exception. La classe peut etre vide avec pass si on n'ajoute rien.",
  "category": "Exceptions"
 },
 {
  "q": "La trace d'appels affichee a la sortie est appelee :",
  "options": [
   "log",
   "stacktrace",
   "errortrace",
   "callgraph"
  ],
  "answer": 1,
  "explanation": "Stacktrace : la pile des appels au moment de l'exception.",
  "category": "Exceptions"
 },
 {
  "q": "AssertionError est leve par :",
  "options": [
   "assert qui echoue",
   "raise",
   "try",
   "exit"
  ],
  "answer": 0,
  "explanation": "L'instruction assert leve AssertionError si la condition est fausse.",
  "category": "Exceptions"
 },
 {
  "q": "ValueError est typiquement leve quand :",
  "options": [
   "Le type est faux",
   "La valeur est invalide (mais le type est OK)",
   "On divise par zero",
   "On accede a un index"
  ],
  "answer": 1,
  "explanation": "Exemple : int('abc') leve ValueError - la chaine n'est pas convertible.",
  "category": "Exceptions"
 },
 {
  "q": "TypeError est leve quand :",
  "options": [
   "Type incorrect d'argument",
   "Valeur incorrecte",
   "Cle absente",
   "Fin de fichier"
  ],
  "answer": 0,
  "explanation": "Exemple : len(5) leve TypeError - int n'a pas de longueur.",
  "category": "Exceptions"
 },
 {
  "q": "FileNotFoundError herite de :",
  "options": [
   "IOError / OSError",
   "ValueError",
   "KeyError",
   "Exception directement"
  ],
  "answer": 0,
  "explanation": "FileNotFoundError est une sous-classe de OSError (qui est equivalent a IOError en Python 3).",
  "category": "Exceptions"
 },
 {
  "q": "Quelle exception pour une recursion infinie ?",
  "options": [
   "RecursionError",
   "OverflowError",
   "MemoryError",
   "StackError"
  ],
  "answer": 0,
  "explanation": "RecursionError est leve quand la profondeur maximale de recursion est atteinte.",
  "category": "Exceptions"
 },
 {
  "q": "Quelle exception pour une variable locale non assignee referencee ?",
  "options": [
   "NameError",
   "UnboundLocalError",
   "AttributeError",
   "TypeError"
  ],
  "answer": 1,
  "explanation": "UnboundLocalError est leve quand une variable locale est referencee avant assignation.",
  "category": "Exceptions"
 },
 {
  "q": "Quelle est la difference entre NameError et UnboundLocalError ?",
  "options": [
   "Aucune",
   "NameError pour un nom global inexistant, UnboundLocalError pour une variable locale non assignee",
   "Identique mais selon la version",
   "L'un est un warning"
  ],
  "answer": 1,
  "explanation": "NameError : aucun nom n'existe. UnboundLocalError : la variable existe localement mais pas encore assignee.",
  "category": "Exceptions"
 },
 {
  "q": "Un Warning est :",
  "options": [
   "Une exception",
   "Un avertissement (n'arrete pas le programme)",
   "Un commentaire",
   "Une erreur fatale"
  ],
  "answer": 1,
  "explanation": "Un warning signale un probleme potentiel sans interrompre l'execution.",
  "category": "Exceptions"
 },
 {
  "q": "Matplotlib est :",
  "options": [
   "Un IDE",
   "Une librairie Python open source pour visualisation",
   "Une base de donnees",
   "Un compilateur"
  ],
  "answer": 1,
  "explanation": "Matplotlib est une librairie de visualisation libre. Site : https://matplotlib.org.",
  "category": "Matplotlib"
 },
 {
  "q": "Comment importer matplotlib ?",
  "options": [
   "import plot",
   "import matplotlib",
   "include matplotlib",
   "from matplot import lib"
  ],
  "answer": 1,
  "explanation": "import matplotlib charge la librairie. En pratique on importe plus souvent matplotlib.pyplot as plt.",
  "category": "Matplotlib"
 },
 {
  "q": "Comment connaitre la version de matplotlib ?",
  "options": [
   "matplotlib.version()",
   "matplotlib.__version__",
   "version(matplotlib)",
   "matplotlib.v"
  ],
  "answer": 1,
  "explanation": "matplotlib.__version__ est l'attribut standard donnant la version installee.",
  "category": "Matplotlib"
 },
 {
  "q": "Quel sous-module est generalement renomme 'plt' ?",
  "options": [
   "matplotlib.pyplot",
   "matplotlib.plot",
   "matplotlib.figure",
   "matplotlib.lib"
  ],
  "answer": 0,
  "explanation": "Convention universelle : import matplotlib.pyplot as plt.",
  "category": "Matplotlib"
 },
 {
  "q": "Que fait plt.plot(x, y) ?",
  "options": [
   "Affiche un nuage de points",
   "Dessine une courbe reliant les points (x[i], y[i])",
   "Cree un fichier",
   "Importe les donnees"
  ],
  "answer": 1,
  "explanation": "plot relie les points (x[i], y[i]) par des segments par defaut.",
  "category": "Matplotlib"
 },
 {
  "q": "Si on appelle plt.plot(y) avec un seul argument, les abscisses sont :",
  "options": [
   "[1, 2, ..., N]",
   "[0, 1, ..., N-1]",
   "y lui-meme",
   "Aleatoires"
  ],
  "answer": 1,
  "explanation": "Implicitement les indices 0 a N-1 sont pris comme abscisses.",
  "category": "Matplotlib"
 },
 {
  "q": "Quelle fonction ouvre la fenetre du graphique ?",
  "options": [
   "plt.draw()",
   "plt.show()",
   "plt.open()",
   "plt.display()"
  ],
  "answer": 1,
  "explanation": "plt.show() bloque jusqu'a fermeture de la fenetre, dans un script Python standard.",
  "category": "Matplotlib"
 },
 {
  "q": "Le format 'o' dans plot signifie :",
  "options": [
   "Origine",
   "Points representes par des ronds",
   "Optimise",
   "Outline"
  ],
  "answer": 1,
  "explanation": "'o' est le marqueur cercle. plt.plot(y, 'o') trace des ronds sans relier.",
  "category": "Matplotlib"
 },
 {
  "q": "La syntaxe marker='o' permet de :",
  "options": [
   "Cacher les points",
   "Tracer points ET segments",
   "Cacher les segments",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "marker='o' garde la ligne par defaut tout en ajoutant le marqueur o sur chaque point.",
  "category": "Matplotlib"
 },
 {
  "q": "Dans le format 'o-r', le '-' signifie :",
  "options": [
   "Pas de ligne",
   "Ligne pleine",
   "Pointilles",
   "Tirets"
  ],
  "answer": 1,
  "explanation": "'-' = ligne pleine. ':' = pointilles, '--' = tirets, '-.' = tirets pointilles.",
  "category": "Matplotlib"
 },
 {
  "q": "Dans le format 'o-r', le 'r' signifie :",
  "options": [
   "Rond",
   "Rouge",
   "Reel",
   "Right"
  ],
  "answer": 1,
  "explanation": "'r' = rouge. Autres : 'g' vert, 'b' bleu, 'k' noir, 'y' jaune, 'm' magenta, 'c' cyan, 'w' blanc.",
  "category": "Matplotlib"
 },
 {
  "q": "Format pour 'x petits traits bleu' ?",
  "options": [
   "x-b",
   "x--b",
   "x:b",
   "x.-b"
  ],
  "answer": 1,
  "explanation": "'x--b' = marqueur x, ligne en petits traits (--), couleur bleue.",
  "category": "Matplotlib"
 },
 {
  "q": "Format pour '*' pointilles vert ?",
  "options": [
   "*-g",
   "*:g",
   "*--g",
   "*.g"
  ],
  "answer": 1,
  "explanation": "'*:g' = etoiles, ligne pointillee (:), couleur verte.",
  "category": "Matplotlib"
 },
 {
  "q": "Quel marqueur represente un carre ?",
  "options": [
   "'c'",
   "'s'",
   "'q'",
   "'r'"
  ],
  "answer": 1,
  "explanation": "'s' (square) = carre.",
  "category": "Matplotlib"
 },
 {
  "q": "Quel marqueur represente une etoile ?",
  "options": [
   "'*'",
   "'+'",
   "'x'",
   "'o'"
  ],
  "answer": 0,
  "explanation": "'*' = etoile.",
  "category": "Matplotlib"
 },
 {
  "q": "Quel marqueur represente un point (pixel) ?",
  "options": [
   "'.'",
   "','",
   "'o'",
   "'x'"
  ],
  "answer": 0,
  "explanation": "'.' = point, ',' = pixel (plus petit).",
  "category": "Matplotlib"
 },
 {
  "q": "Quel marqueur represente un diamant ?",
  "options": [
   "'d'",
   "'D'",
   "'p'",
   "'h'"
  ],
  "answer": 1,
  "explanation": "'D' = diamant (D fin = 'd'). 'p' = pentagone, 'h' = hexagone.",
  "category": "Matplotlib"
 },
 {
  "q": "Quel marqueur represente un triangle vers le bas ?",
  "options": [
   "'^'",
   "'v'",
   "'<'",
   "'>'"
  ],
  "answer": 1,
  "explanation": "'v' (ou '1') = triangle vers le bas. '^' (ou '2') = vers le haut.",
  "category": "Matplotlib"
 },
 {
  "q": "Quel symbole de ligne donne des tirets ?",
  "options": [
   "'-'",
   "'--'",
   "':'",
   "'-.'"
  ],
  "answer": 1,
  "explanation": "'--' = petits traits (tirets).",
  "category": "Matplotlib"
 },
 {
  "q": "Que fait plt.title('foo') ?",
  "options": [
   "Titre du programme",
   "Titre du graphique courant",
   "Titre global de la figure",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "title('foo') affiche un titre pour le subplot courant. suptitle pour le titre global.",
  "category": "Matplotlib"
 },
 {
  "q": "Que fait plt.suptitle('foo') ?",
  "options": [
   "Titre du subplot",
   "Titre global de la figure",
   "Sous-titre",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "suptitle definit le titre global de TOUTE la figure (au dessus de tous les subplots).",
  "category": "Matplotlib"
 },
 {
  "q": "Quelle fonction etiquette l'axe des abscisses ?",
  "options": [
   "plt.xtitle",
   "plt.xlabel",
   "plt.xname",
   "plt.axisX"
  ],
  "answer": 1,
  "explanation": "plt.xlabel('texte') ajoute un libelle sous l'axe X.",
  "category": "Matplotlib"
 },
 {
  "q": "Quelle fonction etiquette l'axe des ordonnees ?",
  "options": [
   "plt.ytitle",
   "plt.ylabel",
   "plt.yname",
   "plt.axisY"
  ],
  "answer": 1,
  "explanation": "plt.ylabel('texte') ajoute un libelle a gauche de l'axe Y.",
  "category": "Matplotlib"
 },
 {
  "q": "Que fait plt.subplot(2, 3, 4) ?",
  "options": [
   "Cree 2x3 grille et selectionne le 4e",
   "Cree 3 lignes et 2 colonnes",
   "Erreur",
   "Affiche 234"
  ],
  "answer": 0,
  "explanation": "subplot(nrows, ncols, index) cree une grille et selectionne la case d'index donne.",
  "category": "Matplotlib"
 },
 {
  "q": "plt.subplot(1, 5, 1) signifie :",
  "options": [
   "1 ligne, 5 colonnes, case 1",
   "1 colonne, 5 lignes, case 1",
   "1+5+1=7 cases",
   "Erreur"
  ],
  "answer": 0,
  "explanation": "1 ligne x 5 colonnes, on selectionne la 1re case (la plus a gauche).",
  "category": "Matplotlib"
 },
 {
  "q": "Quelle fonction sauve la figure dans un fichier image ?",
  "options": [
   "plt.write",
   "plt.savefig",
   "plt.export",
   "plt.save"
  ],
  "answer": 1,
  "explanation": "savefig(name) sauve la figure courante (ex : 'fig.png', 'fig.pdf').",
  "category": "Matplotlib"
 },
 {
  "q": "Pour ouvrir un fichier txt en ecriture, on utilise :",
  "options": [
   "open(name, 'r')",
   "open(name, 'w')",
   "open(name, 'a')",
   "open(name)"
  ],
  "answer": 1,
  "explanation": "'w' = write (efface le contenu). 'r' = read, 'a' = append.",
  "category": "Matplotlib"
 },
 {
  "q": "Quelle methode ecrit dans un descripteur de fichier ?",
  "options": [
   "fd.print()",
   "fd.write(str)",
   "fd.put()",
   "fd.send()"
  ],
  "answer": 1,
  "explanation": "fd.write(str) ecrit la chaine donnee. Pas de retour ligne automatique.",
  "category": "Matplotlib"
 },
 {
  "q": "Comment fermer un descripteur de fichier ?",
  "options": [
   "fd.exit()",
   "fd.close()",
   "fd.end()",
   "close(fd)"
  ],
  "answer": 1,
  "explanation": "fd.close() libere les ressources et flush le buffer d'ecriture.",
  "category": "Matplotlib"
 },
 {
  "q": "Quel mot-cle ferme automatiquement le fichier en sortie de bloc ?",
  "options": [
   "try",
   "with",
   "finally",
   "auto"
  ],
  "answer": 1,
  "explanation": "with open(...) as fd: ... -> le fichier est ferme automatiquement a la sortie du bloc.",
  "category": "Matplotlib"
 },
 {
  "q": "Que dessine plt.bar(x, y) ?",
  "options": [
   "Une courbe",
   "Un nuage de points",
   "Un diagramme en barres",
   "Un camembert"
  ],
  "answer": 2,
  "explanation": "bar dessine un diagramme en barres verticales. barh pour horizontal.",
  "category": "Matplotlib"
 },
 {
  "q": "Que dessine plt.pie(values, labels=...) ?",
  "options": [
   "Un diagramme en barres",
   "Un histogramme",
   "Un diagramme en camembert (pie chart)",
   "Une boite a moustaches"
  ],
  "answer": 2,
  "explanation": "pie dessine un diagramme circulaire (camembert).",
  "category": "Matplotlib"
 },
 {
  "q": "Comment definir une couleur en hexa pour une barre ?",
  "options": [
   "color='red'",
   "color='#FF0000'",
   "Les deux fonctionnent",
   "color=255"
  ],
  "answer": 2,
  "explanation": "Les deux notations sont valides : nom anglais ou code hexa #RRGGBB.",
  "category": "Matplotlib"
 },
 {
  "q": "Quel format hexadecimal pour '%02x' avec 15 ?",
  "options": [
   "'F'",
   "'0F'",
   "'15'",
   "'15h'"
  ],
  "answer": 1,
  "explanation": "'%02x' formate en hexa minuscule sur 2 caracteres : 15 -> '0f'. Pour 'F', utiliser '%02X'.",
  "category": "Matplotlib"
 },
 {
  "q": "Que fait fig, ax = plt.subplots() ?",
  "options": [
   "Erreur",
   "Cree une figure ET ses axes en une instruction",
   "Cree 2 figures",
   "Importe un module"
  ],
  "answer": 1,
  "explanation": "subplots (avec s) retourne un tuple (figure, axes). Utile pour la programmation orientee objet en matplotlib.",
  "category": "Matplotlib"
 },
 {
  "q": "Quelle methode trace une legende avec position et style ?",
  "options": [
   "ax.legend()",
   "ax.label()",
   "ax.caption()",
   "ax.title()"
  ],
  "answer": 0,
  "explanation": "ax.legend(loc='upper right', shadow=True, fancybox=True) configure la legende.",
  "category": "Matplotlib"
 },
 {
  "q": "loc='upper right' positionne la legende :",
  "options": [
   "En haut a gauche",
   "En haut a droite",
   "En bas a droite",
   "Au milieu"
  ],
  "answer": 1,
  "explanation": "'upper right' = coin superieur droit. D'autres : 'best', 'lower left' etc.",
  "category": "Matplotlib"
 },
 {
  "q": "Que produit plt.hist(a, 20) ?",
  "options": [
   "Un graphe en ligne",
   "Un histogramme avec 20 colonnes",
   "Une grille",
   "Une legende"
  ],
  "answer": 1,
  "explanation": "hist(data, bins) cree un histogramme. 20 = nombre de classes/bins.",
  "category": "Matplotlib"
 },
 {
  "q": "Comment definir la largeur d'une barre dans bar ?",
  "options": [
   "plt.bar(x, y, width=0.4)",
   "plt.bar(x, y, 0.4)",
   "plt.bar(x, y).width(0.4)",
   "plt.barwidth(0.4)"
  ],
  "answer": 0,
  "explanation": "Le 3e argument positionnel ou width= controle la largeur des barres.",
  "category": "Matplotlib"
 },
 {
  "q": "Pour faire des barres groupees (cote a cote), on doit :",
  "options": [
   "Decaler les abscisses des deux series (par exemple +/- width/2)",
   "Modifier la couleur",
   "Utiliser hist",
   "C'est impossible"
  ],
  "answer": 0,
  "explanation": "Decaler manuellement les positions : x1 = [x - width/2] et x2 = [x + width/2], puis tracer 2 plt.bar.",
  "category": "Matplotlib"
 },
 {
  "q": "NumPy signifie :",
  "options": [
   "New Python",
   "Numerical Python",
   "Number Python",
   "Native Python"
  ],
  "answer": 1,
  "explanation": "NumPy = Numerical Python. C'est la librairie de reference pour le calcul numerique.",
  "category": "NumPy"
 },
 {
  "q": "Site officiel de NumPy ?",
  "options": [
   "numpy.com",
   "numpy.org",
   "pynum.org",
   "scipy.org"
  ],
  "answer": 1,
  "explanation": "https://numpy.org est le site officiel.",
  "category": "NumPy"
 },
 {
  "q": "Comment installer NumPy ?",
  "options": [
   "pip3 install numpy",
   "apt install numpy",
   "import numpy",
   "make numpy"
  ],
  "answer": 0,
  "explanation": "pip3 install numpy (ou pip install numpy).",
  "category": "NumPy"
 },
 {
  "q": "Comment importer NumPy en l'aliasant np ?",
  "options": [
   "import numpy",
   "import numpy as np",
   "from numpy import *",
   "use numpy as np"
  ],
  "answer": 1,
  "explanation": "Convention universelle : import numpy as np.",
  "category": "NumPy"
 },
 {
  "q": "La structure centrale de NumPy s'appelle :",
  "options": [
   "ndarray",
   "matrix",
   "vector",
   "list"
  ],
  "answer": 0,
  "explanation": "ndarray = N-dimensional array. C'est l'objet tableau de NumPy.",
  "category": "NumPy"
 },
 {
  "q": "Selon la doc NumPy, il est combien de fois plus rapide que les listes Python ?",
  "options": [
   "10x",
   "50x",
   "100x",
   "1000x"
  ],
  "answer": 1,
  "explanation": "La doc indique environ 50x plus rapide grace a l'implementation en C optimisee.",
  "category": "NumPy"
 },
 {
  "q": "Si on dispose d'un GPU, quelle alternative est recommandee a NumPy ?",
  "options": [
   "TensorPy",
   "CuPy",
   "GPUNum",
   "Numba"
  ],
  "answer": 1,
  "explanation": "CuPy : 10 a 100x plus rapide que NumPy sur GPU compatibles.",
  "category": "NumPy"
 },
 {
  "q": "Comment connaitre la version de NumPy ?",
  "options": [
   "numpy.version",
   "numpy.__version__",
   "numpy.v",
   "version(numpy)"
  ],
  "answer": 1,
  "explanation": "numpy.__version__ retourne la chaine de version.",
  "category": "NumPy"
 },
 {
  "q": "Comment creer un ndarray 1D de [1, 2, 3] ?",
  "options": [
   "np.array([1,2,3])",
   "np.ndarray([1,2,3])",
   "np.list([1,2,3])",
   "np.create([1,2,3])"
  ],
  "answer": 0,
  "explanation": "np.array(...) cree un ndarray a partir d'une liste, tuple, ou autre iterable.",
  "category": "NumPy"
 },
 {
  "q": "Comment creer un ndarray 0D (scalaire) ?",
  "options": [
   "np.array(5)",
   "np.array([5])",
   "np.scalar(5)",
   "Impossible"
  ],
  "answer": 0,
  "explanation": "np.array(5) cree un ndarray de dimension 0 contenant la valeur 5.",
  "category": "NumPy"
 },
 {
  "q": "np.array([[1,2,3],[4,5,6]]) cree :",
  "options": [
   "Un 1D ndarray",
   "Un 2D ndarray (2 lignes, 3 cols)",
   "Une liste de listes",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "Liste de listes -> ndarray 2D, dont les sous-listes deviennent les lignes.",
  "category": "NumPy"
 },
 {
  "q": "Quel argument force une dimension minimale 4 ?",
  "options": [
   "dim=4",
   "ndmin=4",
   "shape=4",
   "size=4"
  ],
  "answer": 1,
  "explanation": "ndmin=4 : np.array([1,2,3], ndmin=4) cree un tableau 4D : shape (1,1,1,3).",
  "category": "NumPy"
 },
 {
  "q": "Quel attribut retourne le nombre de dimensions ?",
  "options": [
   ".dim",
   ".ndim",
   ".shape",
   ".size"
  ],
  "answer": 1,
  "explanation": "a.ndim retourne le nombre de dimensions du ndarray.",
  "category": "NumPy"
 },
 {
  "q": "Quel attribut retourne la forme (tuple des tailles) ?",
  "options": [
   ".size",
   ".shape",
   ".dims",
   ".form"
  ],
  "answer": 1,
  "explanation": "a.shape retourne par exemple (2, 3) pour une matrice 2x3.",
  "category": "NumPy"
 },
 {
  "q": "Quel argument controle le type de donnees ?",
  "options": [
   "type",
   "dtype",
   "datatype",
   "kind"
  ],
  "answer": 1,
  "explanation": "dtype=np.int8 (par exemple) specifie le type. Format compact : dtype='i1'.",
  "category": "NumPy"
 },
 {
  "q": "Quel argument controle l'ordre (lignes ou colonnes) ?",
  "options": [
   "order",
   "layout",
   "axis",
   "memory"
  ],
  "answer": 0,
  "explanation": "order='C' pour lignes (style C), 'F' pour colonnes (style Fortran).",
  "category": "NumPy"
 },
 {
  "q": "Quel type pour un entier sur 8 bits ?",
  "options": [
   "np.int8",
   "np.byte8",
   "np.short",
   "np.b8"
  ],
  "answer": 0,
  "explanation": "np.int8 ou format 'i1' (1 octet = 8 bits).",
  "category": "NumPy"
 },
 {
  "q": "Quel type pour un entier sur 32 bits ?",
  "options": [
   "np.int",
   "np.int32",
   "np.long",
   "np.bigint"
  ],
  "answer": 1,
  "explanation": "np.int32 ou format 'i4' (4 octets).",
  "category": "NumPy"
 },
 {
  "q": "Quel type pour un float sur 64 bits ?",
  "options": [
   "np.float",
   "np.float64",
   "np.double",
   "np.f64"
  ],
  "answer": 1,
  "explanation": "np.float64 ou 'f8'. C'est le defaut pour les floats.",
  "category": "NumPy"
 },
 {
  "q": "Que signifie 'u' dans 'u4' ?",
  "options": [
   "update",
   "unsigned",
   "unicode",
   "universal"
  ],
  "answer": 1,
  "explanation": "u = unsigned (entier non signe). Donc u4 = uint32.",
  "category": "NumPy"
 },
 {
  "q": "Que signifie 'S' dans le format dtype ?",
  "options": [
   "Signed",
   "String",
   "Short",
   "Single"
  ],
  "answer": 1,
  "explanation": "S = string. Exemple : 'S10' = chaine fixe de 10 caracteres.",
  "category": "NumPy"
 },
 {
  "q": "Le format 'i1' equivaut a :",
  "options": [
   "np.int1",
   "np.int8",
   "np.byte",
   "np.uint8"
  ],
  "answer": 1,
  "explanation": "i1 = integer sur 1 octet = 8 bits = np.int8.",
  "category": "NumPy"
 },
 {
  "q": "Comment convertir un ndarray a vers un type entier ?",
  "options": [
   "a.toint()",
   "a.astype('i')",
   "int(a)",
   "a.cast('int')"
  ],
  "answer": 1,
  "explanation": "astype(type) retourne une copie convertie. Ne modifie pas a.",
  "category": "NumPy"
 },
 {
  "q": "Que retourne b.astype(bool) si b = [1, 2, 0, 1] ?",
  "options": [
   "[1,1,0,1]",
   "[True, True, False, True]",
   "[True, True, True, True]",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "0 devient False, toute autre valeur devient True.",
  "category": "NumPy"
 },
 {
  "q": "Pour d=[[1,2,3,4,5],[6,7,8,9,10]], que retourne d[0] ?",
  "options": [
   "1",
   "[1,2,3,4,5]",
   "[1,6]",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "d[0] retourne la 1re ligne en tant que ndarray 1D : [1,2,3,4,5].",
  "category": "NumPy"
 },
 {
  "q": "Pour d 2D, que retourne d[0,1] ?",
  "options": [
   "1re ligne, 2e element",
   "1re ligne, 1er element",
   "2e ligne, 1er element",
   "Erreur"
  ],
  "answer": 0,
  "explanation": "d[0,1] = ligne 0, colonne 1, soit l'element en (0,1).",
  "category": "NumPy"
 },
 {
  "q": "Pour d=[[1,2,3,4,5],[6,7,8,9,10]], que retourne d[0,-2] ?",
  "options": [
   "3",
   "4",
   "5",
   "9"
  ],
  "answer": 1,
  "explanation": "L'index -2 = avant-dernier element de la ligne 0 : 4.",
  "category": "NumPy"
 },
 {
  "q": "Que retourne d[-1, 0] pour d 2D ?",
  "options": [
   "1er element 1re ligne",
   "1er element derniere ligne",
   "Dernier element 1re ligne",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "-1 designe la derniere ligne. Donc d[-1,0] = premier element de la derniere ligne.",
  "category": "NumPy"
 },
 {
  "q": "Que retourne d[1, 1:4] (d 2D) ?",
  "options": [
   "Ligne 1, colonnes 1 a 3 (1D)",
   "Ligne 1, colonnes 1 a 4",
   "Une matrice",
   "Erreur"
  ],
  "answer": 0,
  "explanation": "Slicing colonnes : retourne un 1D ndarray avec les elements de la colonne 1 a 3.",
  "category": "NumPy"
 },
 {
  "q": "Que retourne d[0:2, 3] ?",
  "options": [
   "Element 3 des 2 premieres lignes (1D)",
   "Tout",
   "Erreur",
   "[3]"
  ],
  "answer": 0,
  "explanation": "On prend l'element en colonne 3 pour les lignes 0 et 1 : 1D ndarray a 2 elements.",
  "category": "NumPy"
 },
 {
  "q": "Que retourne d[0:2, 0:2] (d 2D) ?",
  "options": [
   "Une matrice 2x2 (sous-bloc)",
   "Un 1D ndarray",
   "Un scalaire",
   "Erreur"
  ],
  "answer": 0,
  "explanation": "Double slicing : sous-matrice 2x2 en haut a gauche.",
  "category": "NumPy"
 },
 {
  "q": "Pour e=np.array([[[1,2],[3,4]],[[5,6],[7,8]]]), que retourne e[0,1,-1] ?",
  "options": [
   "1",
   "2",
   "4",
   "8"
  ],
  "answer": 2,
  "explanation": "e[0] = [[1,2],[3,4]], [1] = [3,4], [-1] = 4.",
  "category": "NumPy"
 },
 {
  "q": "Quelle methode cree une COPIE d'un ndarray ?",
  "options": [
   "a.view()",
   "a.copy()",
   "a.clone()",
   "np.dup(a)"
  ],
  "answer": 1,
  "explanation": "a.copy() cree une copie independante (les modifications de la copie ne touchent pas a).",
  "category": "NumPy"
 },
 {
  "q": "Quelle methode cree une VUE d'un ndarray (memoire partagee) ?",
  "options": [
   "a.view()",
   "a.copy()",
   "a.peek()",
   "a.share()"
  ],
  "answer": 0,
  "explanation": "view() partage les donnees. Modifier la vue modifie l'original.",
  "category": "NumPy"
 },
 {
  "q": "Si b = a.copy() et b[0]=10, a est :",
  "options": [
   "modifie",
   "inchange",
   "supprime",
   "leve une erreur"
  ],
  "answer": 1,
  "explanation": "copy() est independante, modifier b n'affecte pas a.",
  "category": "NumPy"
 },
 {
  "q": "Si d = c.view() et d[0]=11, c est :",
  "options": [
   "modifie",
   "inchange",
   "supprime",
   "leve une erreur"
  ],
  "answer": 0,
  "explanation": "view() partage la memoire : modifier d modifie c.",
  "category": "NumPy"
 },
 {
  "q": "Que fait a.reshape(2, 2) sur a=[1,2,3,4] ?",
  "options": [
   "Erreur",
   "Retourne [[1,2],[3,4]]",
   "Retourne [[1,3],[2,4]]",
   "Modifie a en place"
  ],
  "answer": 1,
  "explanation": "reshape redimensionne (sans modifier a). On obtient une matrice 2x2.",
  "category": "NumPy"
 },
 {
  "q": "Que fait reshape(-1) ?",
  "options": [
   "Erreur",
   "Aplatit le ndarray en 1D",
   "Inverse",
   "Supprime"
  ],
  "answer": 1,
  "explanation": "-1 demande a NumPy de calculer automatiquement la taille pour aplatir.",
  "category": "NumPy"
 },
 {
  "q": "Pour b=[1..8], que fait b.reshape(2,2,2) ?",
  "options": [
   "Une matrice 2x2",
   "Un cube 2x2x2",
   "Erreur",
   "Une liste plate"
  ],
  "answer": 1,
  "explanation": "b.reshape(2,2,2) cree un ndarray 3D de forme (2,2,2).",
  "category": "NumPy"
 },
 {
  "q": "reshape modifie-t-il l'original ?",
  "options": [
   "Oui",
   "Non, retourne un nouveau ndarray",
   "Cela depend du dtype",
   "Toujours en place"
  ],
  "answer": 1,
  "explanation": "reshape retourne une vue ou copie ; ne modifie pas l'original directement.",
  "category": "NumPy"
 },
 {
  "q": "Quelle fonction concatene des ndarrays ?",
  "options": [
   "np.merge",
   "np.concatenate",
   "np.cat",
   "np.join"
  ],
  "answer": 1,
  "explanation": "np.concatenate((a, b), axis=...) met bout a bout sur l'axe choisi.",
  "category": "NumPy"
 },
 {
  "q": "Par defaut, np.concatenate utilise quel axe ?",
  "options": [
   "axis=-1",
   "axis=0",
   "axis=1",
   "axis=None"
  ],
  "answer": 1,
  "explanation": "L'axe 0 (lignes) est par defaut, soit empilement vertical.",
  "category": "NumPy"
 },
 {
  "q": "Si a=[1,2] et b=[3,4], que retourne np.concatenate((a,b)) ?",
  "options": [
   "[[1,2],[3,4]]",
   "[1,2,3,4]",
   "[4,6]",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "Pour deux 1D : concatene en sequence -> [1,2,3,4].",
  "category": "NumPy"
 },
 {
  "q": "Pour des matrices 2x2, axis=1 concatene :",
  "options": [
   "en lignes (empile)",
   "en colonnes (cote a cote)",
   "Erreur",
   "Aleatoirement"
  ],
  "answer": 1,
  "explanation": "axis=1 concatene cote a cote (les colonnes s'ajoutent).",
  "category": "NumPy"
 },
 {
  "q": "Quelle fonction decoupe un ndarray en parties egales (ou erreur) ?",
  "options": [
   "np.cut",
   "np.split",
   "np.divide",
   "np.partition"
  ],
  "answer": 1,
  "explanation": "np.split echoue si la decoupe n'est pas exacte. Utiliser array_split sinon.",
  "category": "NumPy"
 },
 {
  "q": "Quelle fonction decoupe en parts pouvant etre inegales ?",
  "options": [
   "np.split",
   "np.array_split",
   "np.cut",
   "np.divide"
  ],
  "answer": 1,
  "explanation": "np.array_split repartit les elements meme si la division n'est pas exacte.",
  "category": "NumPy"
 },
 {
  "q": "np.split([1,2,3,4], 3) :",
  "options": [
   "Retourne [[1],[2,3],[4]]",
   "Leve une exception",
   "Retourne [1,2,3,4]",
   "Retourne []"
  ],
  "answer": 1,
  "explanation": "np.split exige une division exacte. Pour une division en 3 d'une liste de 4 elements -> erreur.",
  "category": "NumPy"
 },
 {
  "q": "np.array_split([1,2,3,4], 3) retourne :",
  "options": [
   "[[1],[2,3],[4]]",
   "[[1,2],[3],[4]]",
   "Erreur",
   "[[1,2,3,4]]"
  ],
  "answer": 1,
  "explanation": "array_split distribue : les premiers groupes recoivent un element supplementaire si necessaire.",
  "category": "NumPy"
 },
 {
  "q": "np.arange(10) retourne :",
  "options": [
   "[1,...,10]",
   "[0,1,...,9]",
   "[0,1,...,10]",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "Similaire a range : 0 a 9 inclus.",
  "category": "NumPy"
 },
 {
  "q": "np.arange(1, 6) retourne :",
  "options": [
   "[1,2,3,4,5]",
   "[1,2,3,4,5,6]",
   "[0,1,2,3,4,5]",
   "[1,6]"
  ],
  "answer": 0,
  "explanation": "arange(start, stop) inclut start et exclut stop.",
  "category": "NumPy"
 },
 {
  "q": "np.linspace(1, 5, 6) retourne :",
  "options": [
   "6 valeurs de 1 a 5 reparties lineairement",
   "5 valeurs entre 1 et 6",
   "Erreur",
   "[1,5,6]"
  ],
  "answer": 0,
  "explanation": "linspace(start, stop, num) genere num valeurs uniformement espacees, INCLUANT stop.",
  "category": "NumPy"
 },
 {
  "q": "np.logspace(1, 5, 6, dtype=int) retourne :",
  "options": [
   "[10, 63, 398, 2511, 15848, 100000]",
   "[1, 2, 3, 4, 5, 6]",
   "[10, 20, ..., 60]",
   "Erreur"
  ],
  "answer": 0,
  "explanation": "logspace genere des valeurs sur une echelle LOG. De 10^1=10 a 10^5=100000.",
  "category": "NumPy"
 },
 {
  "q": "Que fait np.random.shuffle(d) ?",
  "options": [
   "Trie d",
   "Melange d en place",
   "Inverse d",
   "Retourne une copie"
  ],
  "answer": 1,
  "explanation": "shuffle melange in place (ne retourne rien).",
  "category": "NumPy"
 },
 {
  "q": "Que fait d.sort() ?",
  "options": [
   "Trie en place dans l'ordre croissant",
   "Trie decroissant",
   "Cree une copie",
   "Aleatoire"
  ],
  "answer": 0,
  "explanation": "sort() est in-place, ordre croissant par defaut.",
  "category": "NumPy"
 },
 {
  "q": "np.matrix('6 5; 9 4') cree :",
  "options": [
   "Un vecteur",
   "Une matrice 2x2",
   "Une erreur",
   "Un dictionnaire"
  ],
  "answer": 1,
  "explanation": "Le ; separe les lignes dans la syntaxe string de matrix. Resultat : [[6,5],[9,4]].",
  "category": "NumPy"
 },
 {
  "q": "np.argmax([6,5,9,4]) retourne :",
  "options": [
   "9",
   "2",
   "4",
   "3"
  ],
  "answer": 1,
  "explanation": "argmax retourne l'INDICE du max, pas la valeur. 9 est en position 2.",
  "category": "NumPy"
 },
 {
  "q": "np.argmin([6,5,9,4]) retourne :",
  "options": [
   "4",
   "3",
   "1",
   "0"
  ],
  "answer": 1,
  "explanation": "Le min est 4, en position 3.",
  "category": "NumPy"
 },
 {
  "q": "np.argmax(b, axis=0) sur une matrice 2D retourne :",
  "options": [
   "Les indices ligne par ligne",
   "Les indices des max par COLONNES",
   "Un scalaire",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "axis=0 reduit les lignes : retourne les indices des max le long de chaque colonne.",
  "category": "NumPy"
 },
 {
  "q": "np.argmax(b, axis=1) retourne :",
  "options": [
   "Les indices des max par LIGNES",
   "Le max global",
   "Un scalaire",
   "Erreur"
  ],
  "answer": 0,
  "explanation": "axis=1 reduit les colonnes : retourne les indices des max sur chaque ligne.",
  "category": "NumPy"
 },
 {
  "q": "Que fait b.T sur une matrice ?",
  "options": [
   "Le determinant",
   "La transposee",
   "L'inverse",
   "La trace"
  ],
  "answer": 1,
  "explanation": ".T est la transposee : les lignes deviennent les colonnes et vice-versa.",
  "category": "NumPy"
 },
 {
  "q": "D'ou vient la fonction matlib.empty() ?",
  "options": [
   "numpy.matlib",
   "numpy.linalg",
   "numpy",
   "math"
  ],
  "answer": 0,
  "explanation": "numpy.matlib doit etre importe nommement : import numpy.matlib as npm.",
  "category": "NumPy"
 },
 {
  "q": "Que fait npm.zeros((2,2)) ?",
  "options": [
   "Cree une matrice 2x2 de 1",
   "Cree une matrice 2x2 de 0",
   "Cree un vecteur",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "zeros remplit une matrice de zeros de la forme demandee.",
  "category": "NumPy"
 },
 {
  "q": "Que fait npm.ones((3,3)) ?",
  "options": [
   "Matrice 3x3 de 1",
   "Matrice identite",
   "Matrice nulle",
   "Erreur"
  ],
  "answer": 0,
  "explanation": "ones cree une matrice remplie de 1.",
  "category": "NumPy"
 },
 {
  "q": "Que fait npm.empty((2,2)) ?",
  "options": [
   "Cree une matrice vide (allouee, contenu non initialise)",
   "Erreur",
   "Matrice de 0",
   "Matrice nulle"
  ],
  "answer": 0,
  "explanation": "empty alloue la memoire sans initialiser. Le contenu est ce qui se trouvait deja en memoire.",
  "category": "NumPy"
 },
 {
  "q": "Que fait npm.rand((2,3)) ?",
  "options": [
   "Matrice 2x3 de valeurs aleatoires uniformes [0,1]",
   "Erreur",
   "Matrice identite",
   "Matrice de 1"
  ],
  "answer": 0,
  "explanation": "rand genere des valeurs aleatoires uniformes dans [0,1].",
  "category": "NumPy"
 },
 {
  "q": "Que fait npm.eye(3) ?",
  "options": [
   "Matrice 3x3 identite",
   "Matrice 3x3 de 1",
   "Vecteur",
   "Erreur"
  ],
  "answer": 0,
  "explanation": "eye(N) cree une matrice diagonale N x N avec des 1 sur la diagonale principale.",
  "category": "NumPy"
 },
 {
  "q": "Que fait npm.eye(3, k=1) ?",
  "options": [
   "Matrice identite",
   "Diagonale decalee de 1 vers le haut",
   "Diagonale decalee de 1 vers le bas",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "Le parametre k=1 decale la diagonale d'un cran vers le haut. k=-1 vers le bas.",
  "category": "NumPy"
 },
 {
  "q": "Que fait npm.identity(3) ?",
  "options": [
   "Matrice 3x3 identite",
   "Matrice 3x3 de 1",
   "Vecteur (1,2,3)",
   "Erreur"
  ],
  "answer": 0,
  "explanation": "identity(N) cree la matrice identite N x N.",
  "category": "NumPy"
 },
 {
  "q": "np.dot(3, 4) retourne :",
  "options": [
   "7",
   "12",
   "[3,4]",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "Pour des scalaires, np.dot est la multiplication classique : 3*4 = 12.",
  "category": "NumPy"
 },
 {
  "q": "np.dot([1,2], [3,4]) retourne :",
  "options": [
   "[4,6]",
   "11",
   "[3,8]",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "Pour deux vecteurs : produit scalaire 1*3 + 2*4 = 11.",
  "category": "NumPy"
 },
 {
  "q": "np.dot([[1,1],[0,1]], [[4,1],[2,2]]) retourne :",
  "options": [
   "[[6,3],[2,2]]",
   "[[4,1],[2,2]]",
   "[[5,4],[1,3]]",
   "Erreur"
  ],
  "answer": 0,
  "explanation": "Produit matriciel. Ligne 0 x col 0 = 1*4 + 1*2 = 6, etc. Resultat : [[6,3],[2,2]].",
  "category": "NumPy"
 },
 {
  "q": "np.inner([1,2],[3,4]) retourne :",
  "options": [
   "[3,8]",
   "11",
   "[4,6]",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "Pour des vecteurs 1D, inner = dot = produit scalaire = 11.",
  "category": "NumPy"
 },
 {
  "q": "Que fait np.matmul ?",
  "options": [
   "Produit element par element",
   "Produit matriciel",
   "Addition",
   "Soustraction"
  ],
  "answer": 1,
  "explanation": "matmul est dedie au produit matriciel. Equivalent a @ ou dot pour 2D.",
  "category": "NumPy"
 },
 {
  "q": "np.linalg.det(a) calcule :",
  "options": [
   "Le rang",
   "Le determinant",
   "L'inverse",
   "La trace"
  ],
  "answer": 1,
  "explanation": "det(a) calcule le determinant de la matrice carree a.",
  "category": "NumPy"
 },
 {
  "q": "Le determinant de [[1,2],[3,4]] est :",
  "options": [
   "10",
   "-2",
   "2",
   "0"
  ],
  "answer": 1,
  "explanation": "det = 1*4 - 2*3 = -2.",
  "category": "NumPy"
 },
 {
  "q": "np.linalg.solve(A, b) resout :",
  "options": [
   "A x b",
   "Ax = b",
   "A + b",
   "det(A)"
  ],
  "answer": 1,
  "explanation": "Resout le systeme lineaire Ax = b et retourne x.",
  "category": "NumPy"
 },
 {
  "q": "np.linalg.slogdet retourne :",
  "options": [
   "Le determinant",
   "Le log du determinant et son signe",
   "L'inverse",
   "La transposee"
  ],
  "answer": 1,
  "explanation": "Retourne (signe, log|det|). Utile pour eviter l'underflow sur de grands determinants.",
  "category": "NumPy"
 },
 {
  "q": "np.mean(a) calcule :",
  "options": [
   "Le min",
   "La moyenne",
   "Le max",
   "La somme"
  ],
  "answer": 1,
  "explanation": "mean retourne la moyenne arithmetique des valeurs.",
  "category": "NumPy"
 },
 {
  "q": "np.std(a) calcule :",
  "options": [
   "L'ecart-type",
   "La variance",
   "La moyenne",
   "La mediane"
  ],
  "answer": 0,
  "explanation": "std = ecart-type (deviation standard, notee sigma).",
  "category": "NumPy"
 },
 {
  "q": "np.var(a) calcule :",
  "options": [
   "L'ecart-type",
   "La variance",
   "La moyenne",
   "La mediane"
  ],
  "answer": 1,
  "explanation": "var = variance V = moyenne des carres des ecarts a la moyenne.",
  "category": "NumPy"
 },
 {
  "q": "La variance est :",
  "options": [
   "Carre de l'ecart-type",
   "Racine carree de l'ecart-type",
   "Moyenne",
   "Mediane"
  ],
  "answer": 0,
  "explanation": "Relation : variance = (ecart-type)^2.",
  "category": "NumPy"
 },
 {
  "q": "np.median(a) calcule :",
  "options": [
   "La moyenne",
   "Le milieu (50% sup, 50% inf)",
   "Le max",
   "Une valeur aleatoire"
  ],
  "answer": 1,
  "explanation": "Mediane : point milieu avec autant de valeurs inferieures que superieures.",
  "category": "NumPy"
 },
 {
  "q": "np.zeros((10), dtype=np.int32) cree :",
  "options": [
   "[0]*10 en int32",
   "Une matrice 10x10",
   "Une erreur",
   "Liste vide"
  ],
  "answer": 0,
  "explanation": "Vecteur 1D de 10 zeros au format int32.",
  "category": "NumPy"
 },
 {
  "q": "np.ones((2,2), dtype=np.float32) cree :",
  "options": [
   "[[1.0, 1.0], [1.0, 1.0]] en float32",
   "Erreur",
   "[[0,0],[0,0]]",
   "Identite"
  ],
  "answer": 0,
  "explanation": "Matrice 2x2 remplie de 1.0 en precision float32.",
  "category": "NumPy"
 },
 {
  "q": "np.average(c) sans poids equivaut a :",
  "options": [
   "np.mean(c)",
   "np.sum(c)",
   "np.std(c)",
   "np.max(c)"
  ],
  "answer": 0,
  "explanation": "Sans pondetration, average == mean (moyenne arithmetique).",
  "category": "NumPy"
 },
 {
  "q": "np.average(c, weights=e) calcule :",
  "options": [
   "La moyenne ponderee",
   "Le produit scalaire",
   "Un decalage",
   "La variance"
  ],
  "answer": 0,
  "explanation": "Moyenne ponderee : sum(c[i]*e[i]) / sum(e[i]).",
  "category": "NumPy"
 },
 {
  "q": "np.percentile(b, 50) est equivalent a :",
  "options": [
   "La moyenne",
   "La mediane",
   "Le min",
   "Le max"
  ],
  "answer": 1,
  "explanation": "Le 50e centile = la mediane.",
  "category": "NumPy"
 },
 {
  "q": "np.random.uniform(0, 10, 100000) genere :",
  "options": [
   "100000 entiers",
   "100000 floats uniformement distribues entre 0 et 10",
   "10 valeurs",
   "Une erreur"
  ],
  "answer": 1,
  "explanation": "uniform(a, b, n) tire n valeurs continues uniformement dans [a, b[.",
  "category": "NumPy"
 },
 {
  "q": "npr.normal(5.0, 2.0, 100000) genere :",
  "options": [
   "100000 valeurs selon loi normale moyenne=5, ecart-type=2",
   "100000 valeurs uniformes",
   "5 ou 2 valeurs",
   "Erreur"
  ],
  "answer": 0,
  "explanation": "normal(mu, sigma, n) tire n valeurs selon une distribution normale (gaussienne).",
  "category": "NumPy"
 },
 {
  "q": "npr.binomial(n, p, size) genere :",
  "options": [
   "Distribution gaussienne",
   "Distribution binomiale",
   "Distribution uniforme",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "binomial simule des tirages d'une loi binomiale.",
  "category": "NumPy"
 },
 {
  "q": "npr.poisson(lam, size) genere :",
  "options": [
   "Distribution de Poisson",
   "Distribution exponentielle",
   "Distribution uniforme",
   "Distribution normale"
  ],
  "answer": 0,
  "explanation": "poisson : distribution de Poisson de parametre lambda.",
  "category": "NumPy"
 },
 {
  "q": "plt.bar vs plt.hist pour visualiser une distribution :",
  "options": [
   "bar necessite des effectifs precalcules, hist calcule automatiquement",
   "Identiques",
   "hist est plus rapide",
   "bar est obsolete"
  ],
  "answer": 0,
  "explanation": "bar trace des barres a partir de valeurs deja calculees. hist calcule les effectifs/bins automatiquement.",
  "category": "NumPy"
 },
 {
  "q": "Quel resultat affiche print(2 ** 10) ?",
  "options": [
   "20",
   "100",
   "1024",
   "210"
  ],
  "answer": 2,
  "explanation": "2^10 = 1024. ** est l'operateur puissance.",
  "category": "Operateurs"
 },
 {
  "q": "Quel resultat affiche print(17 % 5) ?",
  "options": [
   "2",
   "3",
   "5",
   "17"
  ],
  "answer": 0,
  "explanation": "17 = 5*3 + 2. Le reste est 2.",
  "category": "Operateurs"
 },
 {
  "q": "Quel resultat affiche print(17 // 5) ?",
  "options": [
   "2",
   "3",
   "3.4",
   "5"
  ],
  "answer": 1,
  "explanation": "Division entiere : quotient = 3 (5*3 = 15 <= 17).",
  "category": "Operateurs"
 },
 {
  "q": "Quel resultat affiche print(True + True) ?",
  "options": [
   "Erreur",
   "2",
   "True",
   "1"
  ],
  "answer": 1,
  "explanation": "True == 1 en Python (bool herite de int). True + True = 2.",
  "category": "Types"
 },
 {
  "q": "Quel resultat affiche print(bool(0)) ?",
  "options": [
   "True",
   "False",
   "0",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "0, '', [], None et autres valeurs falsy sont evalues a False.",
  "category": "Types"
 },
 {
  "q": "Quel resultat affiche print(bool('False')) ?",
  "options": [
   "True",
   "False",
   "Erreur",
   "None"
  ],
  "answer": 0,
  "explanation": "Une chaine non vide est toujours True, meme si son contenu est le mot 'False'.",
  "category": "Types"
 },
 {
  "q": "Quel resultat affiche print(len('hello')) ?",
  "options": [
   "4",
   "5",
   "6",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "5 lettres : h, e, l, l, o.",
  "category": "Strings"
 },
 {
  "q": "Quel resultat affiche print(len([1, [2, 3], 4])) ?",
  "options": [
   "3",
   "4",
   "5",
   "Erreur"
  ],
  "answer": 0,
  "explanation": "La liste contient 3 elements (1, une sous-liste, 4). len ne compte que le 1er niveau.",
  "category": "Listes"
 },
 {
  "q": "Quelle est la sortie de print([1,2,3] + [4,5,6]) ?",
  "options": [
   "[5,7,9]",
   "[1,2,3,4,5,6]",
   "[[1,2,3],[4,5,6]]",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "+ concatene des listes.",
  "category": "Listes"
 },
 {
  "q": "Quelle est la sortie de print([1,2,3] * 2) ?",
  "options": [
   "[2,4,6]",
   "[1,2,3,1,2,3]",
   "Erreur",
   "[1,2,3,2]"
  ],
  "answer": 1,
  "explanation": "* repete la liste.",
  "category": "Listes"
 },
 {
  "q": "Quel resultat affiche print('-'.join(['a','b','c'])) ?",
  "options": [
   "abc",
   "a-b-c",
   "['a','b','c']",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "join concatene les elements de la liste en utilisant le separateur '-'.",
  "category": "Strings"
 },
 {
  "q": "Quelle est la sortie de print(sorted([3,1,2], reverse=True)) ?",
  "options": [
   "[1,2,3]",
   "[3,2,1]",
   "Erreur",
   "[3,1,2]"
  ],
  "answer": 1,
  "explanation": "reverse=True trie en ordre decroissant.",
  "category": "Listes"
 },
 {
  "q": "Quelle est la sortie de print(list(range(5))) ?",
  "options": [
   "[0,1,2,3,4,5]",
   "[1,2,3,4,5]",
   "[0,1,2,3,4]",
   "[5]"
  ],
  "answer": 2,
  "explanation": "range(5) = 0, 1, 2, 3, 4. list() le convertit en liste.",
  "category": "Listes"
 },
 {
  "q": "Quelle est la sortie de print(list(range(2, 8, 2))) ?",
  "options": [
   "[2,4,6]",
   "[2,4,6,8]",
   "[2,3,4,5,6,7]",
   "[0,2,4,6]"
  ],
  "answer": 0,
  "explanation": "Depart 2, fin 8 exclue, pas 2 -> [2, 4, 6].",
  "category": "Listes"
 },
 {
  "q": "Quel resultat affiche print({1,2,3,2,1}) ?",
  "options": [
   "{1,2,3,2,1}",
   "{1,2,3}",
   "[1,2,3]",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "Un set elimine les doublons : {1, 2, 3}.",
  "category": "Types"
 },
 {
  "q": "Quelle methode ajoute un element a un set ?",
  "options": [
   "set.add(x)",
   "set.append(x)",
   "set.push(x)",
   "set.insert(x)"
  ],
  "answer": 0,
  "explanation": "set.add(x) ajoute x si absent. set n'utilise pas append.",
  "category": "Types"
 },
 {
  "q": "Quel resultat affiche print({1,2,3} & {2,3,4}) ?",
  "options": [
   "{1,2,3,4}",
   "{2,3}",
   "{1,4}",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "& = intersection des ensembles : elements communs.",
  "category": "Types"
 },
 {
  "q": "Quel resultat affiche print({1,2,3} | {2,3,4}) ?",
  "options": [
   "{1,2,3,4}",
   "{2,3}",
   "{1,4}",
   "Erreur"
  ],
  "answer": 0,
  "explanation": "| = union des ensembles.",
  "category": "Types"
 },
 {
  "q": "Quel resultat affiche print({1,2,3} - {2,3,4}) ?",
  "options": [
   "{1,2,3,4}",
   "{2,3}",
   "{1}",
   "Erreur"
  ],
  "answer": 2,
  "explanation": "- = difference : elements du premier qui ne sont pas dans le second.",
  "category": "Types"
 },
 {
  "q": "Quelle est la sortie de d = {'a':1}; d['b'] = 2; print(d) ?",
  "options": [
   "{'a':1}",
   "{'b':2}",
   "{'a':1, 'b':2}",
   "Erreur"
  ],
  "answer": 2,
  "explanation": "Acceder/affecter d['b'] cree la cle 'b' avec la valeur 2.",
  "category": "Types"
 },
 {
  "q": "Comment supprimer la cle 'a' d'un dict d ?",
  "options": [
   "d.remove('a')",
   "del d['a']",
   "d.delete('a')",
   "d['a'] = None"
  ],
  "answer": 1,
  "explanation": "del d['a'] supprime la cle (et sa valeur). KeyError si absente.",
  "category": "Types"
 },
 {
  "q": "Quelle methode dict retourne une vue des cles ?",
  "options": [
   "d.values()",
   "d.keys()",
   "d.items()",
   "d.list()"
  ],
  "answer": 1,
  "explanation": "d.keys() retourne une vue iterable des cles.",
  "category": "Types"
 },
 {
  "q": "Quelle methode dict retourne une vue des paires (cle, valeur) ?",
  "options": [
   "d.values()",
   "d.keys()",
   "d.items()",
   "d.zip()"
  ],
  "answer": 2,
  "explanation": "d.items() retourne les paires (cle, valeur). Pratique pour 'for k, v in d.items()'.",
  "category": "Types"
 },
 {
  "q": "Comment iterer sur un dict d et obtenir cle et valeur ?",
  "options": [
   "for k, v in d:",
   "for k, v in d.items():",
   "for d in (k,v):",
   "for k in d.values()"
  ],
  "answer": 1,
  "explanation": "for k, v in d.items(): est le pattern standard.",
  "category": "Types"
 },
 {
  "q": "Quel resultat affiche print(d.get('x', 0)) si 'x' absente ?",
  "options": [
   "KeyError",
   "0",
   "None",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "get('x', default) retourne la valeur si presente, sinon default (ici 0).",
  "category": "Types"
 },
 {
  "q": "Quel resultat affiche print(d.get('x')) si 'x' absente ?",
  "options": [
   "0",
   "None",
   "KeyError",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "get sans defaut retourne None si la cle est absente.",
  "category": "Types"
 },
 {
  "q": "Quel module Python pour le temps ?",
  "options": [
   "chrono",
   "time",
   "datetime",
   "timing"
  ],
  "answer": 1,
  "explanation": "Le module 'time' fournit time(), sleep(), etc. 'datetime' pour les dates/heures.",
  "category": "Modules"
 },
 {
  "q": "Quel module pour les expressions regulieres ?",
  "options": [
   "regex",
   "re",
   "regexp",
   "string"
  ],
  "answer": 1,
  "explanation": "Le module standard 're' (regular expressions).",
  "category": "Modules"
 },
 {
  "q": "Quel module pour les operations sur les chemins ?",
  "options": [
   "sys",
   "os",
   "path",
   "files"
  ],
  "answer": 1,
  "explanation": "os.path ou pathlib.Path manipule les chemins. os a aussi os.listdir, os.makedirs etc.",
  "category": "Modules"
 },
 {
  "q": "Quel module pour serialiser/deserialiser en JSON ?",
  "options": [
   "pickle",
   "json",
   "csv",
   "xml"
  ],
  "answer": 1,
  "explanation": "json.dumps / json.loads convertissent vers/depuis le JSON.",
  "category": "Modules"
 },
 {
  "q": "Quelle est la difference entre pickle et json ?",
  "options": [
   "pickle est binaire et Python-specifique, json est textuel et universel",
   "Identique",
   "json est plus rapide",
   "pickle est obsolete"
  ],
  "answer": 0,
  "explanation": "pickle serialise n'importe quel objet Python en binaire. JSON est portable mais limite a un sous-ensemble.",
  "category": "Modules"
 },
 {
  "q": "Quelle methode permet d'ouvrir un fichier en lecture ?",
  "options": [
   "open(f, 'r')",
   "read(f)",
   "load(f)",
   "in(f)"
  ],
  "answer": 0,
  "explanation": "'r' est le mode par defaut (lecture texte).",
  "category": "Modules"
 },
 {
  "q": "Comment lire toutes les lignes d'un fichier ?",
  "options": [
   "f.read()",
   "f.readlines()",
   "f.readall()",
   "Tous fonctionnent"
  ],
  "answer": 1,
  "explanation": "readlines() retourne une liste de lignes. read() retourne tout le contenu en une str.",
  "category": "Modules"
 },
 {
  "q": "Que fait f.readline() ?",
  "options": [
   "Lit tout",
   "Lit une seule ligne",
   "Lit 1 caractere",
   "Lit un mot"
  ],
  "answer": 1,
  "explanation": "readline() retourne la prochaine ligne (avec '\\n' final).",
  "category": "Modules"
 },
 {
  "q": "La methode strip() sur une chaine :",
  "options": [
   "Affiche",
   "Retire les espaces (et \\n) au debut et a la fin",
   "Decoupe",
   "Compresse"
  ],
  "answer": 1,
  "explanation": "strip() enleve les whitespaces (par defaut) au debut et a la fin. lstrip et rstrip pour un cote.",
  "category": "Strings"
 },
 {
  "q": "Que retourne 'abc'.upper() ?",
  "options": [
   "'abc'",
   "'ABC'",
   "'Abc'",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "upper() retourne la chaine en majuscules.",
  "category": "Strings"
 },
 {
  "q": "Que retourne ''.join(['a','b','c']) ?",
  "options": [
   "'a b c'",
   "'abc'",
   "['a','b','c']",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "Avec un separateur vide '', join concatene sans rien entre les elements : 'abc'.",
  "category": "Strings"
 },
 {
  "q": "Comment formater une f-string en Python ?",
  "options": [
   "f'{var}'",
   "$'{var}'",
   "%'{var}'",
   "@'{var}'"
  ],
  "answer": 0,
  "explanation": "f-string : prefixer la chaine par 'f' et interpoler avec {}.",
  "category": "Strings"
 },
 {
  "q": "Quel est le resultat de f'a = {2+3}' ?",
  "options": [
   "'a = {2+3}'",
   "'a = 5'",
   "Erreur",
   "'a = 23'"
  ],
  "answer": 1,
  "explanation": "Une f-string evalue l'expression entre {} : 2+3 = 5.",
  "category": "Strings"
 },
 {
  "q": "Comment ecrire un retour ligne dans une chaine ?",
  "options": [
   "\\r",
   "\\n",
   "\\t",
   "\\b"
  ],
  "answer": 1,
  "explanation": "\\n est le caractere de saut de ligne (LF).",
  "category": "Strings"
 },
 {
  "q": "Comment ecrire un tab dans une chaine ?",
  "options": [
   "\\r",
   "\\n",
   "\\t",
   "\\b"
  ],
  "answer": 2,
  "explanation": "\\t est la tabulation horizontale.",
  "category": "Strings"
 },
 {
  "q": "Si on souhaite la meme sequence aleatoire dans deux executions :",
  "options": [
   "Toujours la meme par defaut",
   "Fixer la seed",
   "Utiliser uniform",
   "Impossible"
  ],
  "answer": 1,
  "explanation": "random.seed(x) ou np.random.seed(x) garantit la reproductibilite.",
  "category": "Random"
 },
 {
  "q": "Pour tirer une carte au hasard parmi ['As', 'Roi', 'Dame'] :",
  "options": [
   "random.choice(...)",
   "random.sample(..., 1)",
   "Les deux fonctionnent",
   "Aucun"
  ],
  "answer": 2,
  "explanation": "Les deux fonctionnent : choice retourne l'element, sample(..., 1) retourne une liste de 1 element.",
  "category": "Random"
 },
 {
  "q": "Pour tirer 3 cartes distinctes parmi une liste :",
  "options": [
   "random.choice(liste, 3)",
   "random.sample(liste, 3)",
   "random.randrange(3)",
   "shuffle(liste)[0:3]"
  ],
  "answer": 1,
  "explanation": "sample(population, k) tire k elements distincts sans remise.",
  "category": "Random"
 },
 {
  "q": "Pour creer un vecteur de 0 a 1 par pas de 0.1 :",
  "options": [
   "np.arange(0, 1, 0.1)",
   "np.linspace(0, 1, 11)",
   "Les deux",
   "range(0, 1, 0.1)"
  ],
  "answer": 2,
  "explanation": "arange accepte un pas. linspace garantit le nombre de points.",
  "category": "NumPy"
 },
 {
  "q": "Difference entre arange et linspace ?",
  "options": [
   "Aucun",
   "arange utilise un pas, linspace un nombre de points",
   "linspace pour int seulement",
   "arange pour float seulement"
  ],
  "answer": 1,
  "explanation": "arange(start, stop, step) vs linspace(start, stop, num).",
  "category": "NumPy"
 },
 {
  "q": "La transposee de [[1,2,3]] est :",
  "options": [
   "[[1,2,3]]",
   "[[1],[2],[3]]",
   "[3,2,1]",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "Transposer une ligne (1x3) donne une colonne (3x1).",
  "category": "NumPy"
 },
 {
  "q": "L'attribut .size sur un ndarray retourne :",
  "options": [
   "Le nombre total d'elements",
   "La forme",
   "La dimension",
   "Le type"
  ],
  "answer": 0,
  "explanation": ".size = nombre total d'elements (produit des dimensions).",
  "category": "NumPy"
 },
 {
  "q": "Pour une matrice (2,3,4), .size vaut :",
  "options": [
   "9",
   "24",
   "12",
   "6"
  ],
  "answer": 1,
  "explanation": "2*3*4 = 24 elements.",
  "category": "NumPy"
 },
 {
  "q": "Pour additionner element par element deux ndarrays de meme forme :",
  "options": [
   "np.add(a,b) ou a + b",
   "np.dot(a,b)",
   "np.cat(a,b)",
   "Erreur"
  ],
  "answer": 0,
  "explanation": "L'addition element-wise se fait avec + ou np.add.",
  "category": "NumPy"
 },
 {
  "q": "Le broadcasting NumPy permet :",
  "options": [
   "De parler en plusieurs langues",
   "D'effectuer des operations sur des arrays de formes differentes (sous conditions)",
   "De copier rapidement",
   "De compresser"
  ],
  "answer": 1,
  "explanation": "Le broadcasting etend automatiquement la forme d'un array pour rendre les operations possibles.",
  "category": "NumPy"
 },
 {
  "q": "Quel est le resultat de np.array([1,2,3]) + np.array([10,20,30]) ?",
  "options": [
   "[11,22,33]",
   "[10,20,30]",
   "[1,2,3]",
   "Erreur"
  ],
  "answer": 0,
  "explanation": "Addition element-wise : [1+10, 2+20, 3+30].",
  "category": "NumPy"
 },
 {
  "q": "Quel est le resultat de np.array([1,2,3]) * 2 ?",
  "options": [
   "[2,4,6]",
   "[1,2,3,1,2,3]",
   "Erreur",
   "[2,2,2]"
  ],
  "answer": 0,
  "explanation": "Multiplication scalaire applique * a chaque element : [2,4,6].",
  "category": "NumPy"
 },
 {
  "q": "np.zeros(5) retourne :",
  "options": [
   "[0]",
   "[0,0,0,0,0]",
   "Une matrice 5x5",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "Vecteur 1D de 5 zeros.",
  "category": "NumPy"
 },
 {
  "q": "np.ones(3) retourne :",
  "options": [
   "[1]",
   "[1,1,1]",
   "Une matrice",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "Vecteur 1D de 3 uns (en float64 par defaut).",
  "category": "NumPy"
 },
 {
  "q": "Difference entre np.zeros et np.empty ?",
  "options": [
   "Aucune",
   "zeros initialise a 0, empty alloue sans initialiser",
   "empty est plus lent",
   "zeros n'existe pas"
  ],
  "answer": 1,
  "explanation": "empty est plus rapide mais le contenu est imprevisible. Utiliser zeros si vous comptez lire les valeurs.",
  "category": "NumPy"
 },
 {
  "q": "Comment connaitre la taille en bytes d'un element d'un ndarray ?",
  "options": [
   "a.bytesize",
   "a.itemsize",
   "a.size",
   "a.bytes"
  ],
  "answer": 1,
  "explanation": "a.itemsize : nombre d'octets par element.",
  "category": "NumPy"
 },
 {
  "q": "Pour un dtype np.float64, itemsize vaut :",
  "options": [
   "1",
   "4",
   "8",
   "16"
  ],
  "answer": 2,
  "explanation": "float64 = 64 bits = 8 octets.",
  "category": "NumPy"
 },
 {
  "q": "Comment changer la taille d'une figure matplotlib ?",
  "options": [
   "plt.size(8,4)",
   "plt.figure(figsize=(8,4))",
   "plt.dim(8,4)",
   "plt.scale(8,4)"
  ],
  "answer": 1,
  "explanation": "plt.figure(figsize=(w, h)) en pouces (par defaut DPI=100).",
  "category": "Matplotlib"
 },
 {
  "q": "Pour superposer plusieurs courbes :",
  "options": [
   "Plusieurs appels a plt.plot()",
   "Un seul plot avec liste de listes",
   "C'est impossible",
   "Utiliser des subplots seulement"
  ],
  "answer": 0,
  "explanation": "On peut empiler plusieurs plt.plot avant le show, ils sont superposes.",
  "category": "Matplotlib"
 },
 {
  "q": "Quelle commande active une grille ?",
  "options": [
   "plt.grid()",
   "plt.lines()",
   "plt.mesh()",
   "plt.show_grid()"
  ],
  "answer": 0,
  "explanation": "plt.grid(True) active la grille.",
  "category": "Matplotlib"
 },
 {
  "q": "Quelle commande limite les axes ?",
  "options": [
   "plt.xlim(a,b) et plt.ylim(a,b)",
   "plt.limit(x,y)",
   "plt.range(a,b)",
   "plt.scope(x,y)"
  ],
  "answer": 0,
  "explanation": "xlim et ylim definissent les bornes affichees.",
  "category": "Matplotlib"
 },
 {
  "q": "Comment ajouter une legende a une courbe ?",
  "options": [
   "plt.label('texte')",
   "plt.plot(x, y, label='texte') puis plt.legend()",
   "plt.text('legend')",
   "plt.title()"
  ],
  "answer": 1,
  "explanation": "On passe label= au plot, puis on appelle plt.legend().",
  "category": "Matplotlib"
 },
 {
  "q": "Pour afficher une image avec matplotlib :",
  "options": [
   "plt.show(img)",
   "plt.imshow(img)",
   "plt.image(img)",
   "plt.draw(img)"
  ],
  "answer": 1,
  "explanation": "imshow(img) affiche un ndarray comme image.",
  "category": "Matplotlib"
 },
 {
  "q": "Pour tracer une boite a moustaches :",
  "options": [
   "plt.box",
   "plt.boxplot",
   "plt.whisker",
   "plt.moustache"
  ],
  "answer": 1,
  "explanation": "plt.boxplot(data) trace un diagramme en boite (box plot).",
  "category": "Matplotlib"
 },
 {
  "q": "Quelle methode pour un scatter plot ?",
  "options": [
   "plt.dot",
   "plt.scatter",
   "plt.points",
   "plt.cloud"
  ],
  "answer": 1,
  "explanation": "plt.scatter(x, y) trace un nuage de points (chaque point est independant).",
  "category": "Matplotlib"
 },
 {
  "q": "Comment ajuster les marges automatiquement ?",
  "options": [
   "plt.tight_layout()",
   "plt.adjust()",
   "plt.fit()",
   "plt.margins(auto=True)"
  ],
  "answer": 0,
  "explanation": "tight_layout reorganise les subplots pour eviter les chevauchements.",
  "category": "Matplotlib"
 },
 {
  "q": "Avec class A: y=10 et class B(A): pass, que vaut B().y ?",
  "options": [
   "10",
   "0",
   "None",
   "Erreur"
  ],
  "answer": 0,
  "explanation": "B herite des attributs de classe de A : B().y vaut 10.",
  "category": "Heritage"
 },
 {
  "q": "Une methode redefinie en classe fille remplace celle de la mere :",
  "options": [
   "Toujours pour les appels sur l'instance fille",
   "Jamais",
   "Seulement avec super",
   "Selon la version"
  ],
  "answer": 0,
  "explanation": "Le polymorphisme permet a la version fille d'etre appelee sur les instances de la fille.",
  "category": "Heritage"
 },
 {
  "q": "Quel mot-cle accede a la classe mere de maniere generique ?",
  "options": [
   "parent",
   "super",
   "base",
   "mother"
  ],
  "answer": 1,
  "explanation": "super() retourne un proxy vers la classe mere. Utilise dans __init__ et les redefinitions.",
  "category": "Heritage"
 },
 {
  "q": "Qu'est-ce que le polymorphisme ?",
  "options": [
   "Une seule forme",
   "La capacite d'une meme operation a se comporter differemment selon le type",
   "Une classe ferme",
   "Une variable globale"
  ],
  "answer": 1,
  "explanation": "Polymorphisme : differentes classes peuvent partager la meme interface tout en ayant des comportements distincts.",
  "category": "Heritage"
 },
 {
  "q": "L'agregation est une relation :",
  "options": [
   "A is-a B",
   "A has-a B",
   "A is-not B",
   "A = B"
  ],
  "answer": 1,
  "explanation": "Agregation = 'a un' (A contient B). L'heritage = 'est un'.",
  "category": "Classes"
 },
 {
  "q": "Le composition est une relation :",
  "options": [
   "plus forte que l'agregation (cycle de vie lie)",
   "plus faible",
   "identique a l'heritage",
   "n'existe pas"
  ],
  "answer": 0,
  "explanation": "Composition : le composant est detruit avec le composite. Agregation : duree de vie independante.",
  "category": "Classes"
 },
 {
  "q": "Qu'est-ce qu'une methode de classe @classmethod ?",
  "options": [
   "Methode statique",
   "Methode qui recoit la classe (cls) en 1er argument",
   "Methode privee",
   "Constructeur"
  ],
  "answer": 1,
  "explanation": "@classmethod modifie la methode pour qu'elle recoive la classe (cls) au lieu de l'instance (self).",
  "category": "Classes"
 },
 {
  "q": "Qu'est-ce qu'une methode statique @staticmethod ?",
  "options": [
   "Methode qui ne recoit ni self ni cls",
   "Constructeur",
   "Methode privee",
   "Methode de classe"
  ],
  "answer": 0,
  "explanation": "@staticmethod : methode qui ne depend ni de l'instance, ni de la classe.",
  "category": "Classes"
 },
 {
  "q": "Qu'est-ce qu'une propriete @property ?",
  "options": [
   "Decorateur permettant de transformer une methode en attribut",
   "Une fonction privee",
   "Un constructeur",
   "Une exception"
  ],
  "answer": 0,
  "explanation": "@property transforme un getter en attribut : on appelle a.x au lieu de a.x().",
  "category": "Encapsulation"
 },
 {
  "q": "Pour rendre un attribut en lecture seule via property :",
  "options": [
   "Definir un getter sans setter @property",
   "Utiliser __slots__",
   "Mettre const",
   "Mettre final"
  ],
  "answer": 0,
  "explanation": "Sans setter, l'affectation a.x = ... leve AttributeError.",
  "category": "Encapsulation"
 },
 {
  "q": "__str__ est appele quand on :",
  "options": [
   "Affiche l'objet avec print",
   "Compare deux objets",
   "Cree l'objet",
   "Detruit l'objet"
  ],
  "answer": 0,
  "explanation": "__str__ est l'affichage lisible. print(obj) appelle obj.__str__().",
  "category": "Classes"
 },
 {
  "q": "__repr__ est appele quand on :",
  "options": [
   "Affiche dans l'interpreteur ou via repr(obj)",
   "Cree l'objet",
   "Compare",
   "Detruit"
  ],
  "answer": 0,
  "explanation": "__repr__ est la representation 'officielle' destinee aux developpeurs.",
  "category": "Classes"
 },
 {
  "q": "__eq__ est appele quand on :",
  "options": [
   "==",
   "is",
   "!=",
   "<"
  ],
  "answer": 0,
  "explanation": "__eq__ implemente l'operateur ==.",
  "category": "Classes"
 },
 {
  "q": "__len__ est appele quand on :",
  "options": [
   "len(obj)",
   "obj.length",
   "size(obj)",
   "obj.size"
  ],
  "answer": 0,
  "explanation": "len(obj) appelle obj.__len__().",
  "category": "Classes"
 },
 {
  "q": "__getitem__ est appele quand on :",
  "options": [
   "obj[i]",
   "obj.i",
   "get(obj, i)",
   "obj()"
  ],
  "answer": 0,
  "explanation": "obj[i] declenche obj.__getitem__(i).",
  "category": "Classes"
 },
 {
  "q": "Comment definir un comportement pour obj() (appel) ?",
  "options": [
   "__call__",
   "__do__",
   "__run__",
   "__exec__"
  ],
  "answer": 0,
  "explanation": "__call__(self, ...) permet aux instances d'etre appelees comme des fonctions.",
  "category": "Classes"
 },
 {
  "q": "Quel module Python pour les decorateurs predefinis (utiles) ?",
  "options": [
   "functools",
   "decorators",
   "tools",
   "lib"
  ],
  "answer": 0,
  "explanation": "functools fournit @lru_cache, @wraps, @cached_property, etc.",
  "category": "Modules"
 },
 {
  "q": "Que fait le decorateur @lru_cache ?",
  "options": [
   "Memoize une fonction (cache les resultats)",
   "Logger les appels",
   "Mesure le temps",
   "Profile la memoire"
  ],
  "answer": 0,
  "explanation": "lru_cache evite de recalculer pour des arguments deja vus (memoization).",
  "category": "Modules"
 },
 {
  "q": "Comment recuperer l'objet exception apres except ?",
  "options": [
   "except Exception as e:",
   "except Exception(e):",
   "except Exception => e:",
   "except $e"
  ],
  "answer": 0,
  "explanation": "Syntaxe : except Exception as e: print(e). e est l'instance d'exception.",
  "category": "Exceptions"
 },
 {
  "q": "Que fait raise (sans argument) dans un except ?",
  "options": [
   "Erreur de syntaxe",
   "Re-leve l'exception en cours",
   "Termine le programme",
   "Continue"
  ],
  "answer": 1,
  "explanation": "raise tout court re-leve l'exception active. Utile pour logger puis transmettre.",
  "category": "Exceptions"
 },
 {
  "q": "Comment chainer des exceptions ?",
  "options": [
   "raise NewError from old",
   "raise NewError(old)",
   "raise old, new",
   "raise both"
  ],
  "answer": 0,
  "explanation": "raise X from Y attache Y comme cause (visible dans le traceback).",
  "category": "Exceptions"
 },
 {
  "q": "Une exception levee dans le bloc finally :",
  "options": [
   "Est ignoree",
   "Remplace l'exception du try",
   "Provoque une boucle",
   "Avertissement seulement"
  ],
  "answer": 1,
  "explanation": "Si finally leve une nouvelle exception, elle remplace celle du try.",
  "category": "Exceptions"
 },
 {
  "q": "Quelle exception standard pour 'pas implemente' ?",
  "options": [
   "NotImplementedError",
   "MissingMethodError",
   "AbstractError",
   "TypeError"
  ],
  "answer": 0,
  "explanation": "NotImplementedError : abstrait, sera implemente plus tard, ou methode abstraite.",
  "category": "Exceptions"
 },
 {
  "q": "Quelle exception pour 'non supporte' ?",
  "options": [
   "NotImplementedError",
   "TypeError",
   "OperationError",
   "UnsupportedError"
  ],
  "answer": 1,
  "explanation": "TypeError est leve quand l'operation n'est pas supportee sur le type donne.",
  "category": "Exceptions"
 },
 {
  "q": "for i in range(3): print(i, end='') affiche :",
  "options": [
   "123",
   "012",
   "0 1 2",
   "Erreur"
  ],
  "answer": 1,
  "explanation": "Sans separateur, '012' sans espace. Avec print par defaut, ce serait '0 1 2 ' (avec retours ligne).",
  "category": "Boucles"
 },
 {
  "q": "for i in range(0, 10, 3): print(i) affiche :",
  "options": [
   "0, 3, 6, 9",
   "0, 3, 6",
   "3, 6, 9",
   "0, 3, 6, 9, 10"
  ],
  "answer": 0,
  "explanation": "De 0, par pas de 3, fin 10 exclue : 0, 3, 6, 9.",
  "category": "Boucles"
 },
 {
  "q": "Quelle instruction sort prematurement d'une boucle ?",
  "options": [
   "exit",
   "break",
   "return",
   "stop"
  ],
  "answer": 1,
  "explanation": "break sort de la boucle la plus proche.",
  "category": "Boucles"
 },
 {
  "q": "Quelle instruction saute a l'iteration suivante ?",
  "options": [
   "next",
   "continue",
   "skip",
   "pass"
  ],
  "answer": 1,
  "explanation": "continue passe a l'iteration suivante sans executer le reste du bloc.",
  "category": "Boucles"
 },
 {
  "q": "Quelle instruction est une no-op dans un bloc ?",
  "options": [
   "null",
   "none",
   "pass",
   "skip"
  ],
  "answer": 2,
  "explanation": "pass ne fait rien, mais respecte la syntaxe d'un bloc requis.",
  "category": "Boucles"
 },
 {
  "q": "Une boucle for-else en Python : le 'else' s'execute :",
  "options": [
   "A chaque iteration",
   "Jamais",
   "Si la boucle se termine sans break",
   "Si break est rencontre"
  ],
  "answer": 2,
  "explanation": "else d'une boucle s'execute si elle se termine normalement (pas par break).",
  "category": "Boucles"
 },
 {
  "q": "Quelle est une comprehension de set ?",
  "options": [
   "{x for x in liste}",
   "[x for x in liste]",
   "(x for x in liste)",
   "{x: y for x in liste}"
  ],
  "answer": 0,
  "explanation": "Les accolades sans deux-points indiquent un set en comprehension.",
  "category": "Listes"
 },
 {
  "q": "Quelle est une comprehension de dict ?",
  "options": [
   "{x: y for x in liste}",
   "{x for x in liste}",
   "[x: y]",
   "(x: y)"
  ],
  "answer": 0,
  "explanation": "{cle: valeur for ...} cree un dict en comprehension.",
  "category": "Listes"
 },
 {
  "q": "Quelle expression cree un generateur ?",
  "options": [
   "(x for x in liste)",
   "[x for x in liste]",
   "{x for x in liste}",
   "Aucune"
  ],
  "answer": 0,
  "explanation": "Les parentheses creent un generateur expression. Evalue paresseusement.",
  "category": "Listes"
 },
 {
  "q": "Difference cle entre liste et generateur ?",
  "options": [
   "Aucune",
   "Le generateur est evalue paresseusement (un element a la fois)",
   "Le generateur est plus rapide a creer",
   "Le generateur ne peut etre itere qu'une fois"
  ],
  "answer": 1,
  "explanation": "Le generateur produit a la demande, economisant la memoire. (Et oui : il ne peut etre itere qu'UNE fois - les deux affirmations B et D sont correctes mais B est la principale).",
  "category": "Listes"
 },
 {
  "q": "yield dans une fonction :",
  "options": [
   "Retourne un generateur a chaque appel",
   "Equivalent a return",
   "Provoque une erreur",
   "Definit un decorateur"
  ],
  "answer": 0,
  "explanation": "Une fonction avec yield devient un generateur. A chaque appel a next(), elle reprend la ou yield a ete rencontre.",
  "category": "Fonctions"
 },
 {
  "q": "Quelles fonctions Python sont d'ordre superieur (acceptent une fonction) ?",
  "options": [
   "map, filter, reduce, sorted (key=...)",
   "len, int, float",
   "print, input",
   "Aucune"
  ],
  "answer": 0,
  "explanation": "map, filter, sorted(key=..) prennent une fonction en argument. reduce est dans functools.",
  "category": "Fonctions"
 }
];