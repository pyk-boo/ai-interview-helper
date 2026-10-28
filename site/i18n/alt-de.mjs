// German versions of the comparison pages in articles.mjs. Same structure, same facts.
const REPO = "https://github.com/pyk-boo/ai-interview-helper";
const SITE = "/ai-interview-helper/";
const DL = `${REPO}/releases/latest/download/AI-Interview-Helper-Setup.exe`;
const EN_NOTE = "(auf Englisch)";

const OURS = `
<h2>Was du mit AI Interview Helper bekommst</h2>
<ul>
  <li><strong>Sprache → Antwort.</strong> Whisper transkribiert die interviewende Person in Echtzeit, und die Antwort erscheint, sobald sie aufhört zu sprechen.</li>
  <li><strong>Screenshot → Lösung.</strong> <code>Ctrl+Shift+Space</code> schickt deinen Bildschirm an ein Vision-Modell: für Coding-Aufgaben, SQL, Diagramme und Quizfragen.</li>
  <li><strong>Sprechertrennung.</strong> Der Systemton gilt als interviewende Person, dein Mikrofon als du. So antwortet die App nur auf die Gegenseite.</li>
  <li><strong>7 KI-Anbieter.</strong> Groq, Anthropic Claude, Google Gemini, OpenAI GPT, DeepSeek, Z.ai GLM oder ein lokales Modell mit Ollama. Stößt ein Anbieter an sein Limit, geht die Anfrage an den nächsten.</li>
  <li><strong>Persönliche Antworten.</strong> Füge deinen Lebenslauf und die Zielposition ein, dann kommen die Antworten in der Ich-Form und stützen sich auf deine Erfahrung.</li>
  <li><strong>Jede Sprache.</strong> Die App antwortet in der Sprache der Frage: Deutsch, Englisch, Spanisch, Russisch, Französisch und viele mehr.</li>
  <li><strong>Datenschutz von Grund auf.</strong> Kein Konto, kein Backend. Deine API-Schlüssel bleiben auf deinem Computer.</li>
</ul>`;

const LIMITS = `
<h2>Ehrliche Einschränkungen</h2>
<ul>
  <li>Du brauchst einen eigenen KI-Schlüssel. Die kostenlosen Kontingente von Gemini, Groq und Z.ai reichen den meisten, und Ollama kommt ganz ohne Schlüssel aus.</li>
  <li>Einen fertigen Installer gibt es nur für Windows. Unter macOS startest du die App mit Node.js aus dem Quellcode.</li>
  <li>Es gibt keine mobile App und keine gehostete Cloud-Version.</li>
  <li>Die Windows-App ist noch nicht code-signiert, deshalb zeigt Windows beim ersten Start eine SmartScreen-Warnung.</li>
</ul>`;

const SWITCH = `
<h2>In 3 Schritten umsteigen</h2>
<ol>
  <li>Lade den <a href="${DL}">Windows-Installer</a> herunter (oder starte die App unter macOS <a href="${REPO}#-quick-start">aus dem Quellcode</a>).</li>
  <li>Erstelle einen kostenlosen Gemini-Schlüssel auf <a href="https://aistudio.google.com/apikey">aistudio.google.com</a> und füge ihn in den Einstellungen der App ein. Ein Schlüssel deckt Chat, Sprache und Screenshots ab.</li>
  <li>Drück <code>Ctrl+Shift+L</code> zum Zuhören oder <code>Ctrl+Shift+Space</code>, um die Aufgabe auf dem Bildschirm zu lösen. Die <a href="${SITE}free-ai-interview-assistant/">vollständige Einrichtungsanleitung</a> ${EN_NOTE} erklärt Audio-Setup und Modellwahl.</li>
</ol>`;

export default {
  labels: {
    pill: "KOSTENLOS · OPEN SOURCE · MIT",
    downloadFree: "Kostenlos für Windows herunterladen",
    source: "Quellcode auf GitHub",
    updated: "Aktualisiert",
    feature: "Funktion",
    faqTitle: "Häufige Fragen",
    ctaDownload: "Für Windows herunterladen (kostenlos)",
    ctaGithub: "Auf GitHub ansehen",
    related: "Verwandte Seiten",
    read: "Lesen →",
    home: "Startseite",
    alternatives: "Alternativen",
    englishNote: EN_NOTE,
    trademark: (c) => `${c} ist eine Marke des jeweiligen Inhabers. AI Interview Helper ist ein unabhängiges Open-Source-Projekt und steht in keiner Verbindung zu ${c}; es wird von ${c} weder empfohlen noch gesponsert.`,
  },
  pages: {
    "cluely-alternative": {
      navLabel: "Kostenlose Cluely-Alternative",
      cardText: "Cluely vs. AI Interview Helper: Preis, Funktionen, KI-Modelle und Datenschutz.",
      title: "Kostenlose Cluely-Alternative 2026: Open Source, ohne Konto",
      description: "Cluely Pro kostet laut Berichten ca. 20 $/Monat. AI Interview Helper: 0 $, Open Source, Live-Antworten aus Sprache und Bildschirm, 7 KI-Modelle.",
      h1: `Eine kostenlose <span class="grad">Cluely-Alternative</span> mit offenem Quellcode`,
      lead: "AI Interview Helper übernimmt den Kern dessen, wofür Cluely in Interviews genutzt wird: Die App hört zu, liest deinen Bildschirm und schlägt eine Antwort vor. Sie kostet nichts, der Code liegt auf GitHub, und das KI-Modell wählst du selbst.",
      updatedHuman: "Oktober 2026",
      intro: `
<p><strong>Cluely</strong> ist ein kommerzieller KI-Assistent, der bei deinen Calls mithört und auf deinen Bildschirm schaut, um dir vorzuschlagen, was du sagen kannst. Genutzt wird er für Vertriebsgespräche, Meetings und Vorstellungsgespräche. Es gibt eine eingeschränkte Gratisversion, der volle Funktionsumfang ist kostenpflichtig.</p>
<p>Wenn du vor allem in <strong>Vorstellungsgesprächen</strong> Unterstützung brauchst und kein weiteres Monatsabo willst, ist AI Interview Helper eine kostenlose Open-Source-Lösung, die genau dafür gebaut ist.</p>`,
      tableTitle: "Cluely vs. AI Interview Helper",
      table: [
        ["Preis", "Kostenlos, kein Bezahlplan", "Eingeschränkte Gratisversion; Pro laut Berichten ca. 19,99 $/Monat, höhere Stufen kosten mehr"],
        ["Quellcode", "Open Source (MIT) auf GitHub", "Geschlossen"],
        ["KI-Modell", "Deine Wahl: 7 Anbieter oder jedes lokale Modell", "Vom Anbieter festgelegt"],
        ["Funktioniert offline", "Ja, mit Ollama", "Nein"],
        ["Konto", "Nicht nötig", "Erforderlich"],
        ["Wohin deine Daten gehen", "Direkt von deinem Computer zum KI-Anbieter deiner Wahl", "Über den Dienst von Cluely"],
        ["Schwerpunkt", "Vorstellungsgespräche und Coding-Interviews", "Meetings, Vertriebsgespräche und Interviews"],
        ["Plattformen", "Windows (Installer), macOS (aus dem Quellcode)", "Desktop-Apps; laut Berichten zusätzlich ein separater Mobil-Tarif"],
      ],
      tableNote: `Cluely-Preise laut Testberichten Dritter, Stand Oktober 2026 (zum Beispiel <a href="https://toolradar.com/tools/cluely/pricing">Toolradar</a>). Preise ändern sich häufig, die aktuellen Tarife findest du auf cluely.com.`,
      sections: `
<h2>Warum viele nach einer Cluely-Alternative suchen</h2>
<ul>
  <li><strong>Preis.</strong> Ein Abo läppert sich, wenn du es nur während der Jobsuche brauchst.</li>
  <li><strong>Modellwahl.</strong> Manche wollen ein bestimmtes Modell, etwa Claude für System Design oder ein schnelles Groq-Modell für geringe Latenz.</li>
  <li><strong>Datenschutz.</strong> Mit einer Open-Source-App und deinem eigenen Schlüssel sitzt kein Drittanbieter zwischen dir und der KI.</li>
  <li><strong>Transparenz.</strong> Du kannst genau nachlesen, was die App mit deinem Audio und deinen Screenshots macht.</li>
</ul>
${OURS}
<h2>Wann Cluely die bessere Wahl sein kann</h2>
<p>Cluely ist ein ausgereiftes kommerzielles Produkt mit einem Team dahinter. Wenn du Meeting-Notizen, Unterstützung bei Vertriebsgesprächen, eine mobile App oder einfach null Einrichtung ohne eigene API-Schlüssel willst, kann ein bezahlter Dienst wie Cluely sinnvoller sein.</p>
${LIMITS}
${SWITCH}`,
      faq: [
        { q: "Gibt es eine kostenlose Alternative zu Cluely?", a: "Ja, AI Interview Helper ist ein kostenloser Open-Source-KI-Copilot für Vorstellungsgespräche. Er hört die interviewende Person, liest deinen Bildschirm und schlägt Antworten vor, ganz ohne Abo." },
        { q: "Ist AI Interview Helper wirklich kostenlos?", a: "Ja, es gibt keinen Bezahlplan. Du nutzt einen kostenlosen KI-Schlüssel (Gemini, Groq oder Z.ai) oder ein lokales Modell mit Ollama und zahlst nichts." },
        { q: "Funktioniert es im Vorstellungsgespräch wie Cluely?", a: "Im Kern ja: Frage transkribieren, Bildschirm lesen, Antwort vorschlagen. Der Fokus liegt auf Interviews, die Meeting-Notizen und Vertriebsfunktionen von Cluely gibt es nicht." },
        { q: "Sind meine Daten damit sicherer als bei einem Cloud-Dienst?", a: "Es gibt keinen zusätzlichen Server dazwischen: Deine Schlüssel bleiben auf deinem Computer, und Anfragen gehen direkt an den KI-Anbieter deiner Wahl. Dessen Datenschutzrichtlinie gilt aber weiterhin." },
      ],
      ctaH: "Teste die kostenlose Cluely-Alternative",
      ctaP: "Herunterladen, kostenlosen Gemini-Schlüssel einfügen, und in etwa zwei Minuten bist du startklar.",
    },
    "interview-coder-alternative": {
      navLabel: "Kostenlose Interview-Coder-Alternative",
      cardText: "Interview Coder vs. AI Interview Helper für Coding-Interviews und LeetCode.",
      title: "Kostenlose Interview-Coder-Alternative 2026: Open Source",
      description: "Interview Coder kostet laut Berichten ca. 299 $/Monat. Screenshot-zu-Code für 0 $: LeetCode, HackerRank, Sprachmodus, 7 KI-Modelle. Open Source.",
      h1: `Eine kostenlose <span class="grad">Interview-Coder-Alternative</span> mit offenem Quellcode`,
      lead: "Screenshot von der Coding-Aufgabe machen, funktionierenden Code mit Erklärung bekommen. AI Interview Helper hört außerdem gesprochene Fragen, unterstützt 7 KI-Anbieter und kostet nichts.",
      updatedHuman: "Oktober 2026",
      intro: `
<p><strong>Interview Coder</strong> ist eine kostenpflichtige Desktop-App für Coding-Interviews. Du erfasst die Aufgabe auf dem Bildschirm, und die App generiert eine Lösung. Testberichte Dritter zählen sie zu den teureren Tools in dieser Kategorie.</p>
<p>AI Interview Helper deckt denselben Ablauf vom Screenshot zur Lösung kostenlos ab und bringt zusätzlich einen Sprachmodus für die gesprochenen Teile eines Interviews mit: Verhaltensfragen, System Design und Nachfragen.</p>`,
      tableTitle: "Interview Coder vs. AI Interview Helper",
      table: [
        ["Preis", "Kostenlos, kein Bezahlplan", "Laut Berichten ca. 299 $/Monat oder ca. 799 $ einmalig; eingeschränkter Gratiszugang"],
        ["Quellcode", "Open Source (MIT) auf GitHub", "Kommerzielles Produkt"],
        ["Screenshot → Code", "Ja, Ctrl+Shift+Space", "Ja, die Kernfunktion"],
        ["Gesprochene Fragen", "Ja, Echtzeit-Transkription mit Whisper", "Fokus auf Coding-Aufgaben"],
        ["KI-Modell", "Deine Wahl: 7 Anbieter oder jedes lokale Modell", "Vom Anbieter festgelegt"],
        ["Funktioniert offline", "Ja, mit Ollama", "Nein"],
        ["Rückerstattung", "Nichts zu erstatten, es ist kostenlos", "Bezahlpläne sind laut Berichten nicht erstattungsfähig"],
      ],
      tableNote: `Interview-Coder-Preise laut Testberichten Dritter, Stand Oktober 2026 (zum Beispiel <a href="https://prachub.com/resources/interview-coder-review-2026-pricing-detection-risks-and-ethical-alternatives">PracHub</a>). Preise ändern sich häufig, die aktuellen Tarife findest du auf der offiziellen Website.`,
      sections: `
<h2>Warum viele nach einer Interview-Coder-Alternative suchen</h2>
<ul>
  <li><strong>Preis.</strong> Hunderte Dollar sind viel Geld für ein Tool, das du nur ein paar Wochen während der Jobsuche brauchst.</li>
  <li><strong>Mehr als Coding.</strong> Die meisten Bewerbungsprozesse enthalten auch Runden mit Verhaltensfragen und System Design, und genau dort hilft der Sprachmodus.</li>
  <li><strong>Modellwahl.</strong> Starke Coding-Modelle entwickeln sich schnell weiter. Mit deinem eigenen Schlüssel wechselst du noch am Erscheinungstag zum neuesten.</li>
</ul>
${OURS}
<h2>Tipps für Coding-Aufgaben</h2>
<ul>
  <li>Für schwere Algorithmus-Aufgaben nimm ein starkes Modell wie Claude Opus oder GPT-OSS 120B.</li>
  <li>Für Screenshots muss das Modell Bilder verarbeiten können: Gemini Flash, Claude und GPT-4o können das alle.</li>
  <li>Stell im Chat Nachfragen („erkläre die Komplexität“, „schreib das in Java um“), um die Lösung zu verstehen, statt sie nur zu kopieren.</li>
</ul>
<h2>Wann Interview Coder die bessere Wahl sein kann</h2>
<p>Wenn du ein Produkt willst, das sich ausschließlich um Coding-Aufgaben dreht und bei dem der Anbieter sich um Modelle und Support kümmert, passt ein bezahltes Tool wie Interview Coder womöglich besser zu dir.</p>
${LIMITS}
${SWITCH}`,
      faq: [
        { q: "Gibt es eine kostenlose Alternative zu Interview Coder?", a: "Ja, AI Interview Helper ist kostenlos und Open Source. Drück Ctrl+Shift+Space, und die Coding-Aufgabe auf deinem Bildschirm geht an ein Vision-Modell, das funktionierenden Code mit Erklärung liefert." },
        { q: "Funktioniert das mit Aufgaben auf LeetCode, HackerRank und CodeSignal?", a: "Ja, es funktioniert mit allem, was auf deinem Bildschirm zu sehen ist, darunter LeetCode, HackerRank, CodeSignal und geteilte Editoren." },
        { q: "Welche Programmiersprachen werden unterstützt?", a: "Jede Sprache, die das KI-Modell beherrscht, etwa Python, Java, C++, JavaScript, Go, SQL und mehr. Frag einfach nach der Sprache, die du brauchst." },
        { q: "Hilft es auch bei Verhaltensfragen und System Design?", a: "Ja, der Sprachmodus transkribiert gesprochene Fragen und schlägt Antworten vor. Bei Verhaltensfragen stützt er sich auf deinen Lebenslauf." },
      ],
      ctaH: "Teste die kostenlose Interview-Coder-Alternative",
      ctaP: "Herunterladen, kostenlosen Gemini-Schlüssel einfügen und in etwa zwei Minuten die erste Aufgabe lösen.",
    },
    "final-round-ai-alternative": {
      navLabel: "Kostenlose Final-Round-AI-Alternative",
      cardText: "Final Round AI vs. AI Interview Helper: was du ohne Abo bekommst.",
      title: "Kostenlose Final-Round-AI-Alternative 2026: ohne Abo",
      description: "Final Round AI kostet laut Berichten ca. 150 $/Monat. AI Interview Helper: 0 $, Open Source, Live-Copilot für Antworten aus Sprache und Bildschirm.",
      h1: `Eine kostenlose <span class="grad">Final-Round-AI-Alternative</span> mit offenem Quellcode`,
      lead: "Ein KI-Copilot für Interviews in Echtzeit, ganz ohne Abo. AI Interview Helper hört die Fragen, liest deinen Bildschirm und schlägt Antworten vor, mit jedem KI-Modell deiner Wahl.",
      updatedHuman: "Oktober 2026",
      intro: `
<p><strong>Final Round AI</strong> ist eine kostenpflichtige Karriereplattform. Neben dem Live-Interview-Copiloten bietet sie Probeinterviews, Lebenslauf-Tools und weitere Funktionen für die Jobsuche. Laut Testberichten Dritter sind Live-Sessions mit dem Copiloten nur in einem Bezahlplan enthalten.</p>
<p>Wenn du genau diesen Live-Copiloten brauchst, bekommst du ihn mit AI Interview Helper kostenlos, als Open-Source-Desktop-App.</p>`,
      tableTitle: "Final Round AI vs. AI Interview Helper",
      table: [
        ["Preis", "Kostenlos, kein Bezahlplan", "Laut Berichten ca. 150 $/Monat bei monatlicher Zahlung, günstiger bei längerer Laufzeit"],
        ["Kostenloser Test der Live-Hilfe", "Alles ist kostenlos", "Laut Berichten keine kostenlose Testphase für Live-Copilot-Sessions"],
        ["Quellcode", "Open Source (MIT) auf GitHub", "Geschlossen"],
        ["KI-Modell", "Deine Wahl: 7 Anbieter oder jedes lokale Modell", "Vom Anbieter festgelegt"],
        ["Funktioniert offline", "Ja, mit Ollama", "Nein"],
        ["Zusätzliche Karriere-Tools", "Nein, Fokus auf den Live-Copiloten", "Probeinterviews, Lebenslauf-Tools und mehr"],
      ],
      tableNote: `Final-Round-AI-Preise laut Testberichten Dritter, Stand Oktober 2026 (zum Beispiel <a href="https://ophyai.com/blog/career-advice/final-round-ai-pricing">Ophy AI</a>). Preise ändern sich häufig, die aktuellen Tarife findest du auf finalroundai.com.`,
      sections: `
<h2>Warum viele nach einer Final-Round-AI-Alternative suchen</h2>
<ul>
  <li><strong>Preis.</strong> Ein Monatsabo ist teuer, wenn du nur für ein paar Interviews Hilfe brauchst.</li>
  <li><strong>Erst testen, dann vertrauen.</strong> Eine kostenlose App kannst du in Probeinterviews so oft ausprobieren, wie du willst.</li>
  <li><strong>Kontrolle.</strong> Deine Schlüssel, dein Modell, dein Datenweg. Nichts läuft über einen Drittanbieter.</li>
</ul>
${OURS}
<h2>Wann Final Round AI die bessere Wahl sein kann</h2>
<p>Wenn du eine All-in-one-Plattform mit Probeinterviews, Lebenslauf-Erstellung und Tools für die Jobsuche unter einem Konto willst, bietet Final Round AI mehr als eine einzelne Desktop-App.</p>
${LIMITS}
${SWITCH}`,
      faq: [
        { q: "Gibt es eine kostenlose Alternative zu Final Round AI?", a: "Ja, AI Interview Helper ist ein kostenloser Open-Source-KI-Copilot für Vorstellungsgespräche. Er transkribiert Sprache in Echtzeit, analysiert den Bildschirm und kommt ohne Abo aus." },
        { q: "Kann ich damit Probeinterviews üben?", a: "Ja, mach ein Übungsinterview mit Freunden oder einer Liste aufgenommener Fragen, und die App zeigt dir, wie eine starke Antwort klingen könnte." },
        { q: "Muss ich ein Konto anlegen?", a: "Nein, ein Konto brauchst du nicht. App herunterladen, kostenlosen KI-Schlüssel einfügen, fertig. Es gibt kein Konto und keinen Server." },
        { q: "Funktioniert es auch auf Deutsch und in anderen Sprachen?", a: "Ja, die App antwortet in der Sprache der Frage, darunter Deutsch, Spanisch, Russisch, Französisch und viele weitere." },
      ],
      ctaH: "Teste die kostenlose Final-Round-AI-Alternative",
      ctaP: "Keine Anmeldung, keine Kreditkarte. Herunterladen und kostenlosen Schlüssel einfügen.",
    },
  },
};
