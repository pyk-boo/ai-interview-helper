// French versions of the comparison pages in articles.mjs. Same structure, same facts.
const REPO = "https://github.com/pyk-boo/ai-interview-helper";
const SITE = "/ai-interview-helper/";
const DL = `${REPO}/releases/latest/download/AI-Interview-Helper-Setup.exe`;

const OURS = `
<h2>Ce que vous offre AI Interview Helper</h2>
<ul>
  <li><strong>Voix → réponse.</strong> Whisper transcrit le recruteur en temps réel, et la réponse s'affiche dès qu'il cesse de parler.</li>
  <li><strong>Capture → solution.</strong> <code>Ctrl+Shift+Space</code> envoie votre écran à un modèle de vision pour les exercices de code, le SQL, les schémas et les QCM.</li>
  <li><strong>Séparation des voix.</strong> L'audio système est traité comme le recruteur et votre micro comme vous : l'application ne répond qu'à l'autre côté.</li>
  <li><strong>7 fournisseurs d'IA.</strong> Groq, Anthropic Claude, Google Gemini, OpenAI GPT, DeepSeek, Z.ai GLM, ou un modèle local avec Ollama. Si l'un atteint sa limite, la requête passe automatiquement au suivant.</li>
  <li><strong>Des réponses personnalisées.</strong> Collez votre CV et le poste visé : les réponses arrivent à la première personne, basées sur votre expérience.</li>
  <li><strong>Toutes les langues.</strong> L'application répond dans la langue de la question : français, anglais, espagnol, russe, allemand et bien d'autres.</li>
  <li><strong>Confidentiel par conception.</strong> Pas de compte, pas de serveur. Vos clés d'API restent sur votre ordinateur.</li>
</ul>`;

const LIMITS = `
<h2>Les limites, en toute honnêteté</h2>
<ul>
  <li>Il vous faut votre propre clé d'IA. Les offres gratuites de Gemini, Groq et Z.ai suffisent à la plupart des gens, et Ollama ne demande aucune clé.</li>
  <li>L'installateur prêt à l'emploi n'existe que pour Windows. Sur macOS, l'application se lance depuis le code source avec Node.js.</li>
  <li>Il n'y a ni application mobile, ni version hébergée dans le cloud.</li>
  <li>L'application Windows n'est pas encore signée : Windows affiche donc un avertissement SmartScreen au premier lancement.</li>
</ul>`;

const SWITCH = `
<h2>Changer d'outil en 3 étapes</h2>
<ol>
  <li><a href="${DL}">Téléchargez l'installateur Windows</a> (ou lancez-le <a href="${REPO}#-quick-start">depuis le code source</a> sur macOS).</li>
  <li>Créez une clé Gemini gratuite sur <a href="https://aistudio.google.com/apikey">aistudio.google.com</a> et collez-la dans les réglages de l'application. Une seule clé sert pour le chat, la voix et les captures d'écran.</li>
  <li>Appuyez sur <code>Ctrl+Shift+L</code> pour écouter ou sur <code>Ctrl+Shift+Space</code> pour résoudre ce qui est à l'écran. Le <a href="${SITE}free-ai-interview-assistant/">guide d'installation complet</a> (en anglais) explique la configuration audio et le choix du modèle.</li>
</ol>`;

export default {
  labels: {
    pill: "GRATUIT · OPEN SOURCE · MIT",
    downloadFree: "Télécharger gratuitement pour Windows",
    source: "Code source sur GitHub",
    updated: "Mis à jour en",
    feature: "Fonction",
    faqTitle: "Questions fréquentes",
    ctaDownload: "Télécharger pour Windows (gratuit)",
    ctaGithub: "Voir sur GitHub",
    related: "Pages associées",
    read: "Lire →",
    home: "Accueil",
    alternatives: "Alternatives",
    englishNote: "(en anglais)",
    trademark: (c) => `${c} est une marque de son propriétaire respectif. AI Interview Helper est un projet open source indépendant : il n'est ni affilié à ${c}, ni approuvé, ni sponsorisé par ${c}.`,
  },
  pages: {
    "cluely-alternative": {
      navLabel: "Alternative gratuite à Cluely",
      cardText: "Cluely vs AI Interview Helper : prix, fonctions, modèles d'IA et confidentialité.",
      title: "Alternative gratuite à Cluely (2026) : open source, 0 $",
      description: "Cluely Pro coûterait environ 20 $/mois. AI Interview Helper gère la partie entretien gratuitement : réponses en direct (voix, écran), 7 IA, open source.",
      h1: `Une <span class="grad">alternative à Cluely</span> gratuite et open source`,
      lead: "AI Interview Helper fait l'essentiel de ce pour quoi on utilise Cluely en entretien : il écoute, lit votre écran et vous suggère une réponse. Il ne coûte rien, le code est sur GitHub, et c'est vous qui choisissez le modèle d'IA.",
      updatedHuman: "octobre 2026",
      intro: `
<p><strong>Cluely</strong> est un assistant IA commercial qui écoute vos appels et regarde votre écran pour vous souffler quoi dire. On l'utilise pour des appels commerciaux, des réunions et des entretiens d'embauche. Son offre gratuite est limitée, et les fonctions complètes sont payantes.</p>
<p>Si vous avez surtout besoin d'aide pendant vos <strong>entretiens</strong> et que vous ne voulez pas d'un abonnement mensuel de plus, AI Interview Helper est une option gratuite et open source conçue précisément pour ça.</p>`,
      tableTitle: "Cluely vs AI Interview Helper",
      table: [
        ["Prix", "Gratuit, aucune offre payante", "Offre gratuite limitée ; Pro annoncé à environ 19,99 $/mois, les offres supérieures coûtent plus cher"],
        ["Code source", "Open source (MIT) sur GitHub", "Code fermé"],
        ["Modèle d'IA", "Au choix : 7 fournisseurs ou tout modèle local", "Imposé par l'éditeur"],
        ["Fonctionne hors ligne", "Oui, avec Ollama", "Non"],
        ["Compte", "Inutile", "Obligatoire"],
        ["Où vont vos données", "Directement de votre ordinateur vers le fournisseur d'IA de votre choix", "Par le service de Cluely"],
        ["Usage principal", "Entretiens d'embauche et entretiens techniques", "Réunions, appels commerciaux et entretiens"],
        ["Plateformes", "Windows (installateur), macOS (depuis le code source)", "Applications de bureau ; une offre mobile distincte est signalée"],
      ],
      tableNote: `Tarifs de Cluely tels que rapportés par des avis tiers en octobre 2026 (par exemple <a href="https://toolradar.com/tools/cluely/pricing">Toolradar</a>). Les prix changent souvent : consultez cluely.com pour les offres actuelles.`,
      sections: `
<h2>Pourquoi chercher une alternative à Cluely</h2>
<ul>
  <li><strong>Le prix.</strong> Un abonnement finit par coûter cher si vous n'en avez besoin que le temps d'une recherche d'emploi.</li>
  <li><strong>Le choix du modèle.</strong> Certains veulent un modèle précis, comme Claude pour le system design ou un modèle Groq rapide pour une latence minimale.</li>
  <li><strong>La confidentialité.</strong> Avec une application open source et votre propre clé, aucun service tiers ne s'intercale entre vous et l'IA.</li>
  <li><strong>La transparence.</strong> Vous pouvez lire exactement ce que l'application fait de votre audio et de vos captures d'écran.</li>
</ul>
${OURS}
<h2>Quand Cluely peut être le meilleur choix</h2>
<p>Cluely est un produit commercial abouti, avec une équipe derrière. Si vous voulez des comptes rendus de réunion, de l'aide pendant vos appels commerciaux, une application mobile, ou tout simplement aucune configuration ni clé d'API à gérer, un service payant comme Cluely peut être plus pertinent.</p>
${LIMITS}
${SWITCH}`,
      faq: [
        { q: "Existe-t-il une alternative gratuite à Cluely ?", a: "Oui : AI Interview Helper est un copilote d'entretien IA gratuit et open source. Il écoute le recruteur, lit votre écran et vous suggère des réponses, sans abonnement." },
        { q: "AI Interview Helper est-il vraiment gratuit ?", a: "Oui, il n'existe aucune offre payante. Vous utilisez une clé d'IA gratuite (Gemini, Groq ou Z.ai) ou un modèle local avec Ollama, sans rien dépenser." },
        { q: "Est-ce que ça fonctionne comme Cluely pendant un entretien ?", a: "Oui, le fonctionnement de base est le même : transcrire la question, regarder l'écran, suggérer une réponse. L'outil se concentre sur les entretiens et n'inclut pas les comptes rendus de réunion ni les fonctions commerciales de Cluely." },
        { q: "Mes données sont-elles plus en sécurité qu'avec un service cloud ?", a: "Vos clés restent sur votre ordinateur, et les requêtes partent directement vers le fournisseur d'IA de votre choix, sans serveur intermédiaire. La politique de confidentialité du fournisseur s'applique toutefois." },
      ],
      ctaH: "Essayez l'alternative gratuite à Cluely",
      ctaP: "Téléchargez-le, collez une clé Gemini gratuite, et vous êtes prêt en deux minutes environ.",
    },
    "interview-coder-alternative": {
      navLabel: "Alternative gratuite à Interview Coder",
      cardText: "Interview Coder vs AI Interview Helper pour les entretiens de code et LeetCode.",
      title: "Alternative gratuite à Interview Coder (2026) : 0 $",
      description: "Interview Coder coûterait environ 299 $/mois. Même principe capture → code, gratuit : LeetCode, HackerRank, mode vocal, 7 modèles d'IA. Open source.",
      h1: `Une <span class="grad">alternative à Interview Coder</span> gratuite et open source`,
      lead: "Faites une capture d'un exercice de code, obtenez du code fonctionnel avec une explication. AI Interview Helper écoute aussi les questions orales, prend en charge 7 fournisseurs d'IA et ne coûte rien.",
      updatedHuman: "octobre 2026",
      intro: `
<p><strong>Interview Coder</strong> est une application de bureau payante dédiée aux entretiens de code. Vous capturez l'énoncé à l'écran et elle génère une solution. Des avis tiers la décrivent comme l'un des outils les plus chers de cette catégorie.</p>
<p>AI Interview Helper reprend gratuitement ce principe capture → solution, et ajoute un mode vocal pour les parties orales de l'entretien : questions comportementales, system design et questions de relance.</p>`,
      tableTitle: "Interview Coder vs AI Interview Helper",
      table: [
        ["Prix", "Gratuit, aucune offre payante", "Annoncé à environ 299 $/mois ou environ 799 $ en paiement unique ; accès gratuit limité"],
        ["Code source", "Open source (MIT) sur GitHub", "Produit commercial"],
        ["Capture → code", "Oui, Ctrl+Shift+Space", "Oui, c'est la fonction principale"],
        ["Questions orales", "Oui, transcription Whisper en temps réel", "Centré sur les exercices de code"],
        ["Modèle d'IA", "Au choix : 7 fournisseurs ou tout modèle local", "Imposé par l'éditeur"],
        ["Fonctionne hors ligne", "Oui, avec Ollama", "Non"],
        ["Remboursement", "Rien à rembourser, c'est gratuit", "Les offres payantes seraient non remboursables"],
      ],
      tableNote: `Tarifs d'Interview Coder tels que rapportés par des avis tiers en octobre 2026 (par exemple <a href="https://prachub.com/resources/interview-coder-review-2026-pricing-detection-risks-and-ethical-alternatives">PracHub</a>). Les prix changent souvent : consultez le site officiel pour les offres actuelles.`,
      sections: `
<h2>Pourquoi chercher une alternative à Interview Coder</h2>
<ul>
  <li><strong>Le prix.</strong> Des centaines de dollars, c'est beaucoup pour un outil dont vous avez besoin quelques semaines de recherche d'emploi.</li>
  <li><strong>Pas seulement du code.</strong> La plupart des processus de recrutement comportent aussi des entretiens comportementaux et de system design, où le mode vocal est utile.</li>
  <li><strong>Le choix du modèle.</strong> Les meilleurs modèles pour coder évoluent vite. Avec votre propre clé, vous passez au plus récent dès sa sortie.</li>
</ul>
${OURS}
<h2>Conseils pour les exercices de code</h2>
<ul>
  <li>Pour les problèmes d'algorithmique difficiles, choisissez un modèle puissant comme Claude Opus ou GPT-OSS 120B.</li>
  <li>Pour les captures d'écran, le modèle doit accepter les images : c'est le cas de Gemini Flash, Claude et GPT-4o.</li>
  <li>Posez des questions de suivi dans le chat (« explique la complexité », « réécris en Java ») pour comprendre la solution, pas seulement la copier.</li>
</ul>
<h2>Quand Interview Coder peut être le meilleur choix</h2>
<p>Si vous voulez un produit entièrement pensé pour les problèmes de code, avec un éditeur qui gère les modèles et le support, un outil payant comme Interview Coder vous conviendra peut-être mieux.</p>
${LIMITS}
${SWITCH}`,
      faq: [
        { q: "Existe-t-il une alternative gratuite à Interview Coder ?", a: "Oui : AI Interview Helper est gratuit et open source. Appuyez sur Ctrl+Shift+Space pour envoyer l'exercice affiché à l'écran à un modèle de vision et obtenir du code fonctionnel avec une explication." },
        { q: "Est-ce que ça marche pour les exercices LeetCode, HackerRank et CodeSignal ?", a: "Oui, l'outil fonctionne avec tout ce qui est visible à l'écran, y compris LeetCode, HackerRank, CodeSignal et les éditeurs partagés." },
        { q: "Quels langages de programmation sont pris en charge ?", a: "Tous ceux que connaît le modèle d'IA : Python, Java, C++, JavaScript, Go, SQL et bien d'autres. Il suffit de demander le langage voulu." },
        { q: "Peut-il aussi aider pour les questions comportementales et de system design ?", a: "Oui : le mode vocal transcrit les questions orales et suggère des réponses, en s'appuyant sur votre CV pour les questions comportementales." },
      ],
      ctaH: "Essayez l'alternative gratuite à Interview Coder",
      ctaP: "Téléchargez-le, collez une clé Gemini gratuite, et résolvez votre premier exercice en deux minutes environ.",
    },
    "final-round-ai-alternative": {
      navLabel: "Alternative gratuite à Final Round AI",
      cardText: "Final Round AI vs AI Interview Helper : ce que vous obtenez sans abonnement.",
      title: "Alternative gratuite à Final Round AI 2026 : sans abonnement",
      description: "Final Round AI coûterait environ 150 $/mois. AI Interview Helper : copilote d'entretien en direct gratuit et open source, voix et écran, sans inscription.",
      h1: `Une <span class="grad">alternative à Final Round AI</span> gratuite et open source`,
      lead: "Un copilote d'entretien IA en temps réel, sans abonnement. AI Interview Helper écoute les questions, lit votre écran et suggère des réponses, avec le modèle d'IA de votre choix.",
      updatedHuman: "octobre 2026",
      intro: `
<p><strong>Final Round AI</strong> est une plateforme carrière payante. En plus de son copilote d'entretien en direct, elle propose des entretiens blancs, des outils de CV et d'autres fonctions pour la recherche d'emploi. D'après des avis tiers, les sessions de copilote en direct nécessitent une offre payante.</p>
<p>Si c'est le copilote en direct qui vous intéresse, AI Interview Helper vous l'offre gratuitement, sous la forme d'une application de bureau open source.</p>`,
      tableTitle: "Final Round AI vs AI Interview Helper",
      table: [
        ["Prix", "Gratuit, aucune offre payante", "Annoncé à environ 150 $/mois sans engagement, moins sur les formules plus longues"],
        ["Essai gratuit de l'aide en direct", "Tout est gratuit", "Signalé : pas d'essai gratuit pour les sessions de copilote en direct"],
        ["Code source", "Open source (MIT) sur GitHub", "Code fermé"],
        ["Modèle d'IA", "Au choix : 7 fournisseurs ou tout modèle local", "Imposé par l'éditeur"],
        ["Fonctionne hors ligne", "Oui, avec Ollama", "Non"],
        ["Outils carrière en plus", "Non, il se concentre sur le copilote en direct", "Entretiens blancs, outils de CV et plus encore"],
      ],
      tableNote: `Tarifs de Final Round AI tels que rapportés par des avis tiers en octobre 2026 (par exemple <a href="https://ophyai.com/blog/career-advice/final-round-ai-pricing">Ophy AI</a>). Les prix changent souvent : consultez finalroundai.com pour les offres actuelles.`,
      sections: `
<h2>Pourquoi chercher une alternative à Final Round AI</h2>
<ul>
  <li><strong>Le prix.</strong> Un abonnement mensuel revient cher si vous n'avez besoin d'aide que pour quelques entretiens.</li>
  <li><strong>Tester avant de faire confiance.</strong> Avec une application gratuite, vous pouvez l'essayer en entretien blanc autant que vous le voulez.</li>
  <li><strong>Le contrôle.</strong> Vos clés, votre modèle, le chemin de vos données. Rien ne transite par un service tiers.</li>
</ul>
${OURS}
<h2>Quand Final Round AI peut être le meilleur choix</h2>
<p>Si vous voulez une plateforme tout-en-un avec entretiens blancs, création de CV et outils de recherche d'emploi réunis sous un même compte, Final Round AI offre plus qu'une simple application de bureau.</p>
${LIMITS}
${SWITCH}`,
      faq: [
        { q: "Existe-t-il une alternative gratuite à Final Round AI ?", a: "Oui : AI Interview Helper est un copilote d'entretien IA gratuit et open source, avec transcription vocale en temps réel et analyse de l'écran, sans abonnement." },
        { q: "Peut-on l'utiliser pour des entretiens blancs ?", a: "Oui. Faites un entretien d'entraînement avec un ami ou une liste de questions enregistrées, et l'application vous montre à quoi pourrait ressembler une bonne réponse." },
        { q: "Faut-il créer un compte ?", a: "Non. Téléchargez l'application, collez une clé d'IA gratuite, et ça fonctionne. Il n'y a ni compte ni serveur." },
        { q: "Fonctionne-t-il dans d'autres langues que l'anglais, comme le français ?", a: "Oui, il répond dans la langue de la question, y compris en français, espagnol, russe, allemand et bien d'autres." },
      ],
      ctaH: "Essayez l'alternative gratuite à Final Round AI",
      ctaP: "Sans inscription, sans carte bancaire. Téléchargez-le et collez une clé gratuite.",
    },
  },
};
