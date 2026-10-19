// Landing page text, one entry per language. HTML is allowed in values.
// Keywords per language were chosen from how people search in that language
// (Search Console queries for English), not translated word for word.

export const LANGS = [
  { code: "en", hreflang: "en", name: "English" },
  { code: "es", hreflang: "es", name: "Español" },
  { code: "pt", hreflang: "pt", name: "Português" },
  { code: "de", hreflang: "de", name: "Deutsch" },
  { code: "fr", hreflang: "fr", name: "Français" },
];

const K = (...keys) => keys.map((k) => `<kbd>${k}</kbd>`).join("+");

export const HOME = [
// ───────────────────────────── English ─────────────────────────────
{
  code: "en", hreflang: "en", ogLocale: "en_US",
  meta: {
    title: `AI Interview Helper: Free Open-Source AI Interview Copilot`,
    description: `Free, open-source AI interview copilot for Windows and macOS. Real-time answers for coding and job interviews from your voice and screen. No subscription.`,
    ogTitle: `AI Interview Helper: the free, open-source AI interview copilot`,
    ogDescription: `Real-time answers for coding and job interviews, from your voice and your screen. Free, open source, 7 AI providers.`,
  },
  ui: {
    navLabel: `Main`, navFeatures: `Features`, navCompare: `Free vs paid`, navAlternatives: `Alternatives`, navGuides: `Guides`, langLabel: `Language`,
    disclaimer: `For learning and interview preparation. Using it in real interviews may violate company or platform rules; that responsibility is yours.`,
    trademark: `Cluely, Interview Coder and Final Round AI are trademarks of their respective owners. This project is not affiliated with them.`,
    footProduct: `Product`, footDownload: `Download for Windows`, footReleases: `All releases`, footSource: `Source code on GitHub`, footSupport: `Support the project`,
    footAlternatives: `Alternatives`, footGuides: `Guides`, footLanguages: `Languages`,
  },
  hero: {
    pill: `100% FREE · OPEN SOURCE`,
    h1: `The free, open-source <span class="grad">AI interview copilot</span>`,
    lead: `AI Interview Helper hears the interviewer's question, reads your screen and shows a ready answer in seconds. Coding tasks, system design, behavioral questions. No subscription, no sign-up, code on GitHub.`,
    ctaWin: `Download for Windows`, ctaSrc: `Run from source`,
    sub: `Windows 10/11 · macOS from source · MIT license`, allDownloads: `All downloads`,
  },
  mock: { label: `App preview: the interviewer asks a coding question and AI Interview Helper shows the answer with code`,
    q: `How would you find duplicates in an array in O(n)?`, a: `I'd use a hash set: one pass, and each lookup is O(1) on average.` },
  features: {
    eyebrow: `Features`, h2: `Everything a paid AI interview assistant does. For $0.`,
    lead: `A lightweight desktop overlay for Windows and macOS that stays on top of Zoom, Google Meet, Microsoft Teams or your browser.`,
    items: [
      { ico: `🎙`, h: `Voice → answer`, p: `Real-time speech-to-text with Whisper. The AI answers automatically when the interviewer stops talking.` },
      { ico: `🖼`, h: `Screenshot → solution`, p: `One hotkey sends your screen to a vision model: LeetCode, HackerRank, CodeSignal, SQL, diagrams, quizzes.` },
      { ico: `🗣`, h: `Speaker separation`, p: `Tells the interviewer apart from your microphone and only answers the interviewer's questions.` },
      { ico: `🔀`, h: `7 AI providers`, p: `Groq, Claude, Gemini, GPT, DeepSeek, GLM or a local model with Ollama, with automatic fallback on rate limits.` },
      { ico: `👤`, h: `Answers in your voice`, p: `Paste your resume and target role. Answers come in first person, based on your real experience.` },
      { ico: `🌐`, h: `Any language`, p: `Ask in English, Spanish, Russian, German, French or many more. The answer comes back in the same language.` },
    ],
  },
  how: {
    eyebrow: `How it works`, h2: `Up and running in 2 minutes`,
    steps: [
      { h: `Download &amp; open`, p: `Grab the Windows installer or the portable .exe. Nothing else to install.` },
      { h: `Paste a free key`, p: `Get a free Gemini key at <a href="https://aistudio.google.com/apikey">aistudio.google.com</a> and paste it into settings. One key covers chat, voice and screenshots.` },
      { h: `Press a hotkey`, p: `${K("Ctrl", "Shift", "L")} to listen, ${K("Ctrl", "Shift", "Space")} to solve what's on screen.` },
    ],
  },
  compare: {
    eyebrow: `Free vs paid`, h2: `A free alternative to Cluely, Interview Coder &amp; Final Round AI`,
    lead: `Same core workflow as paid interview copilots. No monthly bill.`,
    headFeature: `Feature`, headThem: `Typical paid copilots`,
    rows: [
      [`Price`, `$0, forever`, `Monthly subscription`],
      [`Account / sign-up`, `Not needed`, `Required`],
      [`Source code`, `Open (MIT) on GitHub`, `Usually closed`],
      [`Choice of AI model`, `7 providers + any local model`, `Set by the vendor`],
      [`Works offline`, `Yes, with Ollama`, `No`],
      [`Where your data goes`, `Straight to the AI you pick`, `Through the vendor's servers`],
    ],
    note: `<b>How is it free?</b> The app costs nothing. For the AI part, use a free-tier key (Gemini, Groq and Z.ai all have one) or run a model locally with Ollama. No middleman, no markup.`,
    free: `FREE`, offline: `OFFLINE`,
  },
  alternatives: {
    eyebrow: `Alternatives`, h2: `Looking for a free alternative?`, more: `Compare →`,
    lead: `Side-by-side comparisons with the best-known paid AI interview tools.`,
    cards: [
      { h: `Free Cluely alternative`, p: `Cluely vs AI Interview Helper: price, features, AI models and privacy.` },
      { h: `Free Interview Coder alternative`, p: `Interview Coder vs AI Interview Helper for coding interviews and LeetCode.` },
      { h: `Free Final Round AI alternative`, p: `Final Round AI vs AI Interview Helper: what you get without a subscription.` },
    ],
  },
  guides: {
    eyebrow: `Guides`, h2: `Get the most out of it`, more: `Read the guide →`,
    cards: [
      { h: `How to get a free AI interview assistant`, p: `Step by step: download, free Gemini key, audio setup and the best models. About 5 minutes.` },
      { h: `How to practice coding interviews with AI`, p: `A free routine to prepare for LeetCode-style and live coding interviews with an AI copilot.` },
    ],
  },
  faq: {
    h2: `Questions people ask`,
    items: [
      { q: `Is there a free AI interview copilot?`, a: `Yes. AI Interview Helper is a free, open-source AI interview copilot for Windows and macOS. There is no paid plan: you bring a free AI key (Gemini, Groq or Z.ai) or run a local model with Ollama.` },
      { q: `Is AI Interview Helper open source?`, a: `Yes. The full source code is on GitHub under the MIT license: <a href="https://github.com/pyk-boo/ai-interview-helper">github.com/pyk-boo/ai-interview-helper</a>. You can read it, change it or build the app yourself.` },
      { q: `Is it an AI interviewer?`, a: `Not quite. An AI interviewer asks you questions. AI Interview Helper is on the candidate's side: it listens to the question and suggests an answer. For practice, run a mock interview with a friend or a recorded question list and see how a strong answer could sound.` },
      { q: `Is it a free alternative to Cluely or Interview Coder?`, a: `Yes. It covers the same core workflow (listen to the question, read the screen, suggest an answer) without a subscription and with any AI model you want.` },
      { q: `Does it work for coding interviews on LeetCode, HackerRank or CodeSignal?`, a: `Yes. Press Ctrl+Shift+Space and the task on your screen goes to a vision model, which returns working code with a short explanation.` },
      { q: `Which AI model gives the best answers?`, a: `For speed, Groq (GPT-OSS 20B). For the hardest coding and system design questions, Claude Opus or GPT-OSS 120B. For screenshots, a vision model such as Gemini Flash or Claude.` },
      { q: `Where are my API keys stored?`, a: `Only on your computer. Requests go directly from your machine to the AI provider you choose. There is no server in between.` },
      { q: `Windows says "Windows protected your PC". Is it safe?`, a: `The app isn't code-signed yet (certificates cost money, and this project is free). Click "More info" → "Run anyway". The full source code is on GitHub, so you can check it or build it yourself.` },
    ],
  },
  otherLangs: {
    eyebrow: `Other languages`, h2: `Українською та російською`,
    blocks: [
      { lang: `uk`, h: `AI Interview Helper: безкоштовний AI-помічник для співбесід`,
        p: `Безкоштовний AI-асистент для співбесід з відкритим кодом. Слухає питання інтерв'юера, читає екран і за кілька секунд показує готову відповідь: задачі з програмування, технічні співбесіди, питання про досвід. Працює з Groq, Claude, Gemini, GPT, DeepSeek і локальною Ollama. Без підписки та реєстрації. Безкоштовна альтернатива Cluely та Interview Coder. Відповідає українською, якщо питання українською.`,
        cta: `Завантажити для Windows безкоштовно →` },
      { lang: `ru`, h: `AI Interview Helper: бесплатный AI-помощник для собеседований`,
        p: `Бесплатный AI-ассистент для собеседований с открытым кодом. Слушает вопрос интервьюера, читает экран и за несколько секунд показывает готовый ответ: задачи по программированию, технические собеседования, вопросы об опыте. Работает с Groq, Claude, Gemini, GPT, DeepSeek и локальной Ollama. Без подписки и регистрации. Бесплатная альтернатива Cluely и Interview Coder. Отвечает по-русски, если вопрос на русском.`,
        cta: `Скачать для Windows бесплатно →` },
    ],
  },
  final: {
    h2: `Stop paying for interview copilots`, lead: `Download it, paste a free key, and you're ready for your next interview.`,
    star: `Star on GitHub`,
    porsche: `Free forever. But if it helped you land an offer, you can chip in to the author's <a href="{support}">Porsche 911 fund</a> 🏎️`,
  },
},

// ───────────────────────────── Español ─────────────────────────────
{
  code: "es", hreflang: "es", ogLocale: "es_ES",
  meta: {
    title: `AI Interview Helper: asistente de entrevistas con IA gratis`,
    description: `Copiloto de entrevistas con IA gratis y de código abierto. Respuestas en tiempo real para entrevistas técnicas y de trabajo desde tu voz y tu pantalla.`,
    ogTitle: `AI Interview Helper: copiloto de entrevistas con IA, gratis y de código abierto`,
    ogDescription: `Respuestas en tiempo real para entrevistas técnicas y de trabajo, desde tu voz y tu pantalla. Gratis, código abierto, 7 proveedores de IA.`,
  },
  ui: {
    navLabel: `Principal`, navFeatures: `Funciones`, navCompare: `Gratis vs de pago`, navAlternatives: `Alternativas`, navGuides: `Guías`, langLabel: `Idioma`,
    disclaimer: `Para aprender y preparar entrevistas. Usarlo en entrevistas reales puede infringir las normas de la empresa o de la plataforma; la responsabilidad es tuya.`,
    trademark: `Cluely, Interview Coder y Final Round AI son marcas de sus respectivos propietarios. Este proyecto no está afiliado a ellas.`,
    footProduct: `Producto`, footDownload: `Descargar para Windows`, footReleases: `Todas las versiones`, footSource: `Código fuente en GitHub`, footSupport: `Apoyar el proyecto`,
    footAlternatives: `Alternativas`, footGuides: `Guías`, footLanguages: `Idiomas`,
  },
  hero: {
    pill: `100% GRATIS · CÓDIGO ABIERTO`,
    h1: `El <span class="grad">asistente de entrevistas con IA</span> gratis y de código abierto`,
    lead: `AI Interview Helper escucha la pregunta del entrevistador, lee tu pantalla y muestra una respuesta lista en segundos. Ejercicios de programación, diseño de sistemas, preguntas de comportamiento. Sin suscripción, sin registro.`,
    ctaWin: `Descargar para Windows`, ctaSrc: `Ejecutar desde el código`,
    sub: `Windows 10/11 · macOS desde el código · licencia MIT`, allDownloads: `Todas las descargas`,
  },
  mock: { label: `Vista previa: el entrevistador hace una pregunta de programación y AI Interview Helper muestra la respuesta con código`,
    q: `¿Cómo encontrarías duplicados en un array en O(n)?`, a: `Usaría un hash set: una sola pasada y cada búsqueda es O(1) de media.` },
  features: {
    eyebrow: `Funciones`, h2: `Todo lo que hace un copiloto de entrevistas de pago. Por 0 €.`,
    lead: `Una ventana ligera para Windows y macOS que se queda encima de Zoom, Google Meet, Microsoft Teams o tu navegador.`,
    items: [
      { ico: `🎙`, h: `Voz → respuesta`, p: `Transcripción en tiempo real con Whisper. La IA responde en cuanto el entrevistador deja de hablar.` },
      { ico: `🖼`, h: `Captura → solución`, p: `Un atajo envía tu pantalla a un modelo con visión: LeetCode, HackerRank, SQL, diagramas, tests.` },
      { ico: `🗣`, h: `Separa las voces`, p: `Distingue al entrevistador de tu micrófono y solo responde a sus preguntas.` },
      { ico: `🔀`, h: `7 proveedores de IA`, p: `Groq, Claude, Gemini, GPT, DeepSeek, GLM o un modelo local con Ollama, con cambio automático si uno llega al límite.` },
      { ico: `👤`, h: `Respuestas con tu experiencia`, p: `Pega tu CV y el puesto. Las respuestas salen en primera persona, basadas en tu experiencia real.` },
      { ico: `🌐`, h: `En español`, p: `Pregunta en español, inglés o muchos otros idiomas. La respuesta llega en el mismo idioma.` },
    ],
  },
  how: {
    eyebrow: `Cómo funciona`, h2: `Listo en 2 minutos`,
    steps: [
      { h: `Descarga y abre`, p: `Descarga el instalador para Windows o el .exe portable. No hace falta instalar nada más.` },
      { h: `Pega una clave gratis`, p: `Consigue una clave gratuita de Gemini en <a href="https://aistudio.google.com/apikey">aistudio.google.com</a> y pégala en los ajustes. Una sola clave sirve para el chat, la voz y las capturas.` },
      { h: `Pulsa un atajo`, p: `${K("Ctrl", "Shift", "L")} para escuchar, ${K("Ctrl", "Shift", "Space")} para resolver lo que hay en pantalla.` },
    ],
  },
  compare: {
    eyebrow: `Gratis vs de pago`, h2: `Una alternativa gratuita a Cluely, Interview Coder y Final Round AI`,
    lead: `El mismo flujo de trabajo que los copilotos de pago. Sin cuota mensual.`,
    headFeature: `Función`, headThem: `Copilotos de pago típicos`,
    rows: [
      [`Precio`, `0 €, para siempre`, `Suscripción mensual`],
      [`Cuenta / registro`, `No hace falta`, `Obligatorio`],
      [`Código fuente`, `Abierto (MIT) en GitHub`, `Normalmente cerrado`],
      [`Elección del modelo de IA`, `7 proveedores + cualquier modelo local`, `Lo decide el proveedor`],
      [`Funciona sin internet`, `Sí, con Ollama`, `No`],
      [`A dónde van tus datos`, `Directo a la IA que elijas`, `A través de sus servidores`],
    ],
    note: `<b>¿Por qué es gratis?</b> La app no cuesta nada. Para la IA usas una clave gratuita (Gemini, Groq y Z.ai la ofrecen) o un modelo local con Ollama. Sin intermediarios.`,
    free: `GRATIS`, offline: `OFFLINE`,
  },
  alternatives: {
    eyebrow: `Alternativas`, h2: `¿Buscas una alternativa gratuita?`, more: `Comparar →`,
    lead: `Comparativas con las herramientas de entrevistas con IA de pago más conocidas.`,
    cards: [
      { h: `Alternativa gratuita a Cluely`, p: `Cluely vs AI Interview Helper: precio, funciones, modelos de IA y privacidad.` },
      { h: `Alternativa gratuita a Interview Coder`, p: `Interview Coder vs AI Interview Helper para entrevistas de programación y LeetCode.` },
      { h: `Alternativa gratuita a Final Round AI`, p: `Final Round AI vs AI Interview Helper: lo que obtienes sin suscripción.` },
    ],
  },
  guides: {
    eyebrow: `Guías`, h2: `Sácale el máximo partido`, more: `Leer la guía →`,
    cards: [
      { h: `Cómo conseguir un asistente de entrevistas con IA gratis`, p: `Paso a paso: descarga, clave gratuita de Gemini, audio y los mejores modelos.` },
      { h: `Cómo practicar entrevistas de programación con IA`, p: `Una rutina gratuita para preparar entrevistas tipo LeetCode y live coding.` },
    ],
  },
  faq: {
    h2: `Preguntas frecuentes`,
    items: [
      { q: `¿Existe un asistente de entrevistas con IA gratis?`, a: `Sí. AI Interview Helper es un copiloto de entrevistas con IA gratuito y de código abierto para Windows y macOS. No hay plan de pago: usas una clave gratuita (Gemini, Groq o Z.ai) o un modelo local con Ollama.` },
      { q: `¿Es de código abierto?`, a: `Sí. Todo el código está en GitHub con licencia MIT: <a href="https://github.com/pyk-boo/ai-interview-helper">github.com/pyk-boo/ai-interview-helper</a>.` },
      { q: `¿Es un entrevistador con IA?`, a: `No exactamente. Un entrevistador con IA te hace preguntas. AI Interview Helper está de tu lado: escucha la pregunta y te sugiere una respuesta. Para practicar, haz una entrevista simulada con un amigo o una lista de preguntas grabada.` },
      { q: `¿Es una alternativa gratuita a Cluely o Interview Coder?`, a: `Sí. Cubre el mismo flujo principal (escuchar la pregunta, leer la pantalla, sugerir una respuesta) sin suscripción y con el modelo de IA que prefieras.` },
      { q: `¿Sirve para entrevistas técnicas en LeetCode o HackerRank?`, a: `Sí. Pulsa Ctrl+Shift+Space y el ejercicio de tu pantalla va a un modelo con visión, que devuelve código funcional con una breve explicación.` },
      { q: `¿Responde en español?`, a: `Sí. Whisper reconoce el español y el asistente responde en el idioma de la pregunta.` },
      { q: `¿Dónde se guardan mis claves de API?`, a: `Solo en tu ordenador. Las peticiones van directamente de tu equipo al proveedor de IA. No hay ningún servidor intermedio.` },
    ],
  },
  final: {
    h2: `Deja de pagar por copilotos de entrevistas`, lead: `Descárgalo, pega una clave gratuita y prepárate para tu próxima entrevista.`,
    star: `Dale una estrella en GitHub`,
    porsche: `Gratis para siempre. Pero si te ayudó a conseguir una oferta, puedes aportar al <a href="{support}">fondo para el Porsche 911</a> del autor 🏎️`,
  },
},

// ───────────────────────────── Português ─────────────────────────────
{
  code: "pt", hreflang: "pt", ogLocale: "pt_BR",
  meta: {
    title: `AI Interview Helper: assistente de entrevista com IA grátis`,
    description: `Copiloto de entrevista com IA grátis e de código aberto. Respostas em tempo real para entrevistas técnicas e de emprego pela sua voz e sua tela.`,
    ogTitle: `AI Interview Helper: copiloto de entrevista com IA, grátis e de código aberto`,
    ogDescription: `Respostas em tempo real para entrevistas técnicas e de emprego, a partir da sua voz e da sua tela. Grátis, código aberto, 7 provedores de IA.`,
  },
  ui: {
    navLabel: `Principal`, navFeatures: `Recursos`, navCompare: `Grátis vs pago`, navAlternatives: `Alternativas`, navGuides: `Guias`, langLabel: `Idioma`,
    disclaimer: `Para estudo e preparação para entrevistas. Usar em entrevistas reais pode violar as regras da empresa ou da plataforma; a responsabilidade é sua.`,
    trademark: `Cluely, Interview Coder e Final Round AI são marcas de seus respectivos donos. Este projeto não tem vínculo com elas.`,
    footProduct: `Produto`, footDownload: `Baixar para Windows`, footReleases: `Todas as versões`, footSource: `Código-fonte no GitHub`, footSupport: `Apoiar o projeto`,
    footAlternatives: `Alternativas`, footGuides: `Guias`, footLanguages: `Idiomas`,
  },
  hero: {
    pill: `100% GRÁTIS · CÓDIGO ABERTO`,
    h1: `O <span class="grad">assistente de entrevista com IA</span> grátis e de código aberto`,
    lead: `O AI Interview Helper ouve a pergunta do entrevistador, lê a sua tela e mostra uma resposta pronta em segundos. Desafios de código, system design, perguntas comportamentais. Sem assinatura, sem cadastro.`,
    ctaWin: `Baixar para Windows`, ctaSrc: `Rodar pelo código`,
    sub: `Windows 10/11 · macOS pelo código · licença MIT`, allDownloads: `Todos os downloads`,
  },
  mock: { label: `Prévia: o entrevistador faz uma pergunta de programação e o AI Interview Helper mostra a resposta com código`,
    q: `Como você encontraria duplicados em um array em O(n)?`, a: `Eu usaria um hash set: uma única passada, e cada busca é O(1) em média.` },
  features: {
    eyebrow: `Recursos`, h2: `Tudo o que um copiloto de entrevista pago faz. Por R$ 0.`,
    lead: `Uma janela leve para Windows e macOS que fica por cima do Zoom, Google Meet, Microsoft Teams ou do navegador.`,
    items: [
      { ico: `🎙`, h: `Voz → resposta`, p: `Transcrição em tempo real com Whisper. A IA responde assim que o entrevistador para de falar.` },
      { ico: `🖼`, h: `Print → solução`, p: `Um atalho envia sua tela para um modelo com visão: LeetCode, HackerRank, SQL, diagramas, testes.` },
      { ico: `🗣`, h: `Separa as vozes`, p: `Diferencia o entrevistador do seu microfone e só responde às perguntas dele.` },
      { ico: `🔀`, h: `7 provedores de IA`, p: `Groq, Claude, Gemini, GPT, DeepSeek, GLM ou um modelo local com Ollama, com troca automática se um atingir o limite.` },
      { ico: `👤`, h: `Respostas com a sua experiência`, p: `Cole seu currículo e a vaga. As respostas vêm em primeira pessoa, com base na sua experiência real.` },
      { ico: `🌐`, h: `Em português`, p: `Pergunte em português, inglês ou muitos outros idiomas. A resposta vem no mesmo idioma.` },
    ],
  },
  how: {
    eyebrow: `Como funciona`, h2: `Pronto em 2 minutos`,
    steps: [
      { h: `Baixe e abra`, p: `Baixe o instalador para Windows ou o .exe portátil. Não precisa instalar mais nada.` },
      { h: `Cole uma chave grátis`, p: `Pegue uma chave gratuita do Gemini em <a href="https://aistudio.google.com/apikey">aistudio.google.com</a> e cole nas configurações. Uma só chave serve para chat, voz e prints.` },
      { h: `Use um atalho`, p: `${K("Ctrl", "Shift", "L")} para ouvir, ${K("Ctrl", "Shift", "Space")} para resolver o que está na tela.` },
    ],
  },
  compare: {
    eyebrow: `Grátis vs pago`, h2: `Uma alternativa gratuita ao Cluely, Interview Coder e Final Round AI`,
    lead: `O mesmo fluxo dos copilotos pagos. Sem mensalidade.`,
    headFeature: `Recurso`, headThem: `Copilotos pagos típicos`,
    rows: [
      [`Preço`, `R$ 0, para sempre`, `Assinatura mensal`],
      [`Conta / cadastro`, `Não precisa`, `Obrigatório`],
      [`Código-fonte`, `Aberto (MIT) no GitHub`, `Geralmente fechado`],
      [`Escolha do modelo de IA`, `7 provedores + qualquer modelo local`, `Definido pelo fornecedor`],
      [`Funciona offline`, `Sim, com Ollama`, `Não`],
      [`Para onde vão seus dados`, `Direto para a IA que você escolher`, `Pelos servidores do fornecedor`],
    ],
    note: `<b>Por que é grátis?</b> O app não custa nada. Para a IA você usa uma chave gratuita (Gemini, Groq e Z.ai oferecem) ou roda um modelo local com Ollama. Sem intermediários.`,
    free: `GRÁTIS`, offline: `OFFLINE`,
  },
  alternatives: {
    eyebrow: `Alternativas`, h2: `Procurando uma alternativa gratuita?`, more: `Comparar →`,
    lead: `Comparações com as ferramentas pagas de entrevista com IA mais conhecidas.`,
    cards: [
      { h: `Alternativa gratuita ao Cluely`, p: `Cluely vs AI Interview Helper: preço, recursos, modelos de IA e privacidade.` },
      { h: `Alternativa gratuita ao Interview Coder`, p: `Interview Coder vs AI Interview Helper para entrevistas de código e LeetCode.` },
      { h: `Alternativa gratuita ao Final Round AI`, p: `Final Round AI vs AI Interview Helper: o que você tem sem assinatura.` },
    ],
  },
  guides: {
    eyebrow: `Guias`, h2: `Aproveite ao máximo`, more: `Ler o guia →`,
    cards: [
      { h: `Como ter um assistente de entrevista com IA grátis`, p: `Passo a passo: download, chave grátis do Gemini, áudio e os melhores modelos.` },
      { h: `Como treinar entrevistas de programação com IA`, p: `Uma rotina gratuita para se preparar para entrevistas estilo LeetCode e live coding.` },
    ],
  },
  faq: {
    h2: `Perguntas frequentes`,
    items: [
      { q: `Existe um assistente de entrevista com IA grátis?`, a: `Sim. O AI Interview Helper é um copiloto de entrevista com IA gratuito e de código aberto para Windows e macOS. Não há plano pago: você usa uma chave gratuita (Gemini, Groq ou Z.ai) ou um modelo local com Ollama.` },
      { q: `É de código aberto?`, a: `Sim. Todo o código está no GitHub sob licença MIT: <a href="https://github.com/pyk-boo/ai-interview-helper">github.com/pyk-boo/ai-interview-helper</a>.` },
      { q: `É um entrevistador de IA?`, a: `Não exatamente. Um entrevistador de IA faz perguntas para você. O AI Interview Helper fica do seu lado: ouve a pergunta e sugere uma resposta. Para treinar, faça uma entrevista simulada com um amigo ou com uma lista de perguntas gravada.` },
      { q: `É uma alternativa gratuita ao Cluely ou ao Interview Coder?`, a: `Sim. Ele cobre o mesmo fluxo principal (ouvir a pergunta, ler a tela, sugerir uma resposta) sem assinatura e com o modelo de IA que você quiser.` },
      { q: `Funciona para entrevistas técnicas no LeetCode ou HackerRank?`, a: `Sim. Aperte Ctrl+Shift+Space e o desafio na sua tela vai para um modelo com visão, que devolve código funcionando com uma explicação curta.` },
      { q: `Responde em português?`, a: `Sim. O Whisper reconhece português e o assistente responde no idioma da pergunta.` },
      { q: `Onde ficam minhas chaves de API?`, a: `Só no seu computador. As requisições vão direto da sua máquina para o provedor de IA. Não existe servidor no meio.` },
    ],
  },
  final: {
    h2: `Pare de pagar por copilotos de entrevista`, lead: `Baixe, cole uma chave gratuita e esteja pronto para a próxima entrevista.`,
    star: `Dê uma estrela no GitHub`,
    porsche: `Grátis para sempre. Mas se ele te ajudou a conseguir uma oferta, você pode contribuir para o <a href="{support}">fundo do Porsche 911</a> do autor 🏎️`,
  },
},

// ───────────────────────────── Deutsch ─────────────────────────────
{
  code: "de", hreflang: "de", ogLocale: "de_DE",
  meta: {
    title: `AI Interview Helper: kostenloser KI-Interview-Assistent`,
    description: `Kostenloser Open-Source-KI-Copilot für Vorstellungsgespräche und Coding-Interviews. Antworten in Echtzeit aus Sprache und Bildschirm. Kein Abo.`,
    ogTitle: `AI Interview Helper: kostenloser Open-Source-KI-Copilot für Vorstellungsgespräche`,
    ogDescription: `Antworten in Echtzeit für Coding-Interviews und Vorstellungsgespräche, aus Sprache und Bildschirm. Kostenlos, Open Source, 7 KI-Anbieter.`,
  },
  ui: {
    navLabel: `Hauptmenü`, navFeatures: `Funktionen`, navCompare: `Kostenlos vs. bezahlt`, navAlternatives: `Alternativen`, navGuides: `Anleitungen`, langLabel: `Sprache`,
    disclaimer: `Zum Lernen und zur Vorbereitung auf Interviews. Der Einsatz in echten Interviews kann gegen Regeln des Unternehmens oder der Plattform verstoßen; die Verantwortung liegt bei dir.`,
    trademark: `Cluely, Interview Coder und Final Round AI sind Marken ihrer jeweiligen Inhaber. Dieses Projekt ist mit ihnen nicht verbunden.`,
    footProduct: `Produkt`, footDownload: `Für Windows herunterladen`, footReleases: `Alle Versionen`, footSource: `Quellcode auf GitHub`, footSupport: `Projekt unterstützen`,
    footAlternatives: `Alternativen`, footGuides: `Anleitungen`, footLanguages: `Sprachen`,
  },
  hero: {
    pill: `100 % KOSTENLOS · OPEN SOURCE`,
    h1: `Der kostenlose <span class="grad">KI-Interview-Assistent</span> mit offenem Quellcode`,
    lead: `AI Interview Helper hört die Frage im Interview, liest deinen Bildschirm und zeigt in Sekunden eine fertige Antwort. Coding-Aufgaben, System Design, Verhaltensfragen. Kein Abo, keine Anmeldung.`,
    ctaWin: `Für Windows herunterladen`, ctaSrc: `Aus dem Quellcode starten`,
    sub: `Windows 10/11 · macOS aus dem Quellcode · MIT-Lizenz`, allDownloads: `Alle Downloads`,
  },
  mock: { label: `Vorschau: Im Interview kommt eine Programmierfrage, AI Interview Helper zeigt die Antwort mit Code`,
    q: `Wie findest du Duplikate in einem Array in O(n)?`, a: `Ich nehme ein Hash-Set: ein Durchlauf, jede Abfrage im Schnitt O(1).` },
  features: {
    eyebrow: `Funktionen`, h2: `Alles, was ein bezahlter Interview-Copilot kann. Für 0 €.`,
    lead: `Ein schlankes Fenster für Windows und macOS, das über Zoom, Google Meet, Microsoft Teams oder dem Browser bleibt.`,
    items: [
      { ico: `🎙`, h: `Sprache → Antwort`, p: `Spracherkennung in Echtzeit mit Whisper. Die KI antwortet, sobald die Person im Interview aufhört zu sprechen.` },
      { ico: `🖼`, h: `Screenshot → Lösung`, p: `Ein Tastenkürzel schickt den Bildschirm an ein Vision-Modell: LeetCode, HackerRank, SQL, Diagramme, Tests.` },
      { ico: `🗣`, h: `Sprechertrennung`, p: `Unterscheidet die interviewende Person von deinem Mikrofon und beantwortet nur ihre Fragen.` },
      { ico: `🔀`, h: `7 KI-Anbieter`, p: `Groq, Claude, Gemini, GPT, DeepSeek, GLM oder ein lokales Modell mit Ollama, mit automatischem Wechsel bei Limits.` },
      { ico: `👤`, h: `Antworten mit deiner Erfahrung`, p: `Lebenslauf und Zielposition einfügen. Die Antworten kommen in der Ich-Form und stützen sich auf deine echte Erfahrung.` },
      { ico: `🌐`, h: `Auf Deutsch`, p: `Frag auf Deutsch, Englisch oder in vielen anderen Sprachen. Die Antwort kommt in derselben Sprache.` },
    ],
  },
  how: {
    eyebrow: `So funktioniert's`, h2: `In 2 Minuten startklar`,
    steps: [
      { h: `Herunterladen &amp; öffnen`, p: `Installer für Windows oder die portable .exe laden. Sonst muss nichts installiert werden.` },
      { h: `Kostenlosen Schlüssel einfügen`, p: `Hol dir einen kostenlosen Gemini-Schlüssel auf <a href="https://aistudio.google.com/apikey">aistudio.google.com</a> und füge ihn in den Einstellungen ein. Ein Schlüssel deckt Chat, Sprache und Screenshots ab.` },
      { h: `Tastenkürzel drücken`, p: `${K("Strg", "Shift", "L")} zum Zuhören, ${K("Strg", "Shift", "Leertaste")} für die Aufgabe auf dem Bildschirm.` },
    ],
  },
  compare: {
    eyebrow: `Kostenlos vs. bezahlt`, h2: `Eine kostenlose Alternative zu Cluely, Interview Coder und Final Round AI`,
    lead: `Derselbe Ablauf wie bei bezahlten Interview-Copilots. Ohne Monatsgebühr.`,
    headFeature: `Funktion`, headThem: `Typische bezahlte Copilots`,
    rows: [
      [`Preis`, `0 €, für immer`, `Monatliches Abo`],
      [`Konto / Anmeldung`, `Nicht nötig`, `Erforderlich`],
      [`Quellcode`, `Offen (MIT) auf GitHub`, `Meist geschlossen`],
      [`Wahl des KI-Modells`, `7 Anbieter + jedes lokale Modell`, `Vom Anbieter festgelegt`],
      [`Funktioniert offline`, `Ja, mit Ollama`, `Nein`],
      [`Wohin deine Daten gehen`, `Direkt zur KI deiner Wahl`, `Über die Server des Anbieters`],
    ],
    note: `<b>Warum kostenlos?</b> Die App kostet nichts. Für die KI nutzt du einen kostenlosen Schlüssel (Gemini, Groq und Z.ai bieten einen an) oder ein lokales Modell mit Ollama. Kein Zwischenhändler.`,
    free: `GRATIS`, offline: `OFFLINE`,
  },
  alternatives: {
    eyebrow: `Alternativen`, h2: `Auf der Suche nach einer kostenlosen Alternative?`, more: `Vergleichen →`,
    lead: `Direkte Vergleiche mit den bekanntesten bezahlten KI-Interview-Tools.`,
    cards: [
      { h: `Kostenlose Cluely-Alternative`, p: `Cluely vs. AI Interview Helper: Preis, Funktionen, KI-Modelle und Datenschutz.` },
      { h: `Kostenlose Interview-Coder-Alternative`, p: `Interview Coder vs. AI Interview Helper für Coding-Interviews und LeetCode.` },
      { h: `Kostenlose Final-Round-AI-Alternative`, p: `Final Round AI vs. AI Interview Helper: was du ohne Abo bekommst.` },
    ],
  },
  guides: {
    eyebrow: `Anleitungen`, h2: `Das Beste herausholen`, more: `Anleitung lesen →`,
    cards: [
      { h: `Kostenlosen KI-Interview-Assistenten einrichten`, p: `Schritt für Schritt: Download, kostenloser Gemini-Schlüssel, Audio und die besten Modelle.` },
      { h: `Coding-Interviews mit KI üben`, p: `Eine kostenlose Routine zur Vorbereitung auf LeetCode-Aufgaben und Live-Coding.` },
    ],
  },
  faq: {
    h2: `Häufige Fragen`,
    items: [
      { q: `Gibt es einen kostenlosen KI-Interview-Assistenten?`, a: `Ja. AI Interview Helper ist ein kostenloser Open-Source-KI-Copilot für Interviews unter Windows und macOS. Es gibt keinen Bezahlplan: Du nutzt einen kostenlosen Schlüssel (Gemini, Groq oder Z.ai) oder ein lokales Modell mit Ollama.` },
      { q: `Ist das Open Source?`, a: `Ja. Der komplette Quellcode liegt unter MIT-Lizenz auf GitHub: <a href="https://github.com/pyk-boo/ai-interview-helper">github.com/pyk-boo/ai-interview-helper</a>.` },
      { q: `Ist das ein KI-Interviewer?`, a: `Nicht ganz. Ein KI-Interviewer stellt dir Fragen. AI Interview Helper steht auf deiner Seite: Er hört die Frage und schlägt eine Antwort vor. Zum Üben eignet sich ein Probeinterview mit Freunden oder einer aufgenommenen Fragenliste.` },
      { q: `Ist es eine kostenlose Alternative zu Cluely oder Interview Coder?`, a: `Ja. Es deckt denselben Kernablauf ab (Frage hören, Bildschirm lesen, Antwort vorschlagen), ohne Abo und mit dem KI-Modell deiner Wahl.` },
      { q: `Funktioniert es für Coding-Interviews auf LeetCode oder HackerRank?`, a: `Ja. Drück Strg+Shift+Leertaste, und die Aufgabe auf dem Bildschirm geht an ein Vision-Modell, das funktionierenden Code mit kurzer Erklärung liefert.` },
      { q: `Antwortet es auf Deutsch?`, a: `Ja. Whisper erkennt Deutsch, und der Assistent antwortet in der Sprache der Frage.` },
      { q: `Wo werden meine API-Schlüssel gespeichert?`, a: `Nur auf deinem Computer. Anfragen gehen direkt von deinem Rechner zum KI-Anbieter. Es gibt keinen Server dazwischen.` },
    ],
  },
  final: {
    h2: `Schluss mit Abos für Interview-Copilots`, lead: `Herunterladen, kostenlosen Schlüssel einfügen, bereit fürs nächste Interview.`,
    star: `Auf GitHub einen Stern geben`,
    porsche: `Für immer kostenlos. Wenn es dir zu einem Angebot verholfen hat, kannst du in den <a href="{support}">Porsche-911-Fonds</a> des Autors einzahlen 🏎️`,
  },
},

// ───────────────────────────── Français ─────────────────────────────
{
  code: "fr", hreflang: "fr", ogLocale: "fr_FR",
  meta: {
    title: `AI Interview Helper : assistant d'entretien IA gratuit`,
    description: `Copilote d'entretien IA gratuit et open source. Réponses en temps réel pour les entretiens techniques et d'embauche, depuis votre voix et votre écran.`,
    ogTitle: `AI Interview Helper : le copilote d'entretien IA gratuit et open source`,
    ogDescription: `Des réponses en temps réel pour les entretiens techniques et d'embauche, à partir de votre voix et de votre écran. Gratuit, open source, 7 fournisseurs d'IA.`,
  },
  ui: {
    navLabel: `Principal`, navFeatures: `Fonctions`, navCompare: `Gratuit vs payant`, navAlternatives: `Alternatives`, navGuides: `Guides`, langLabel: `Langue`,
    disclaimer: `Pour apprendre et préparer ses entretiens. L'utiliser lors de vrais entretiens peut enfreindre les règles de l'entreprise ou de la plateforme ; vous en êtes responsable.`,
    trademark: `Cluely, Interview Coder et Final Round AI sont des marques de leurs propriétaires respectifs. Ce projet n'y est pas affilié.`,
    footProduct: `Produit`, footDownload: `Télécharger pour Windows`, footReleases: `Toutes les versions`, footSource: `Code source sur GitHub`, footSupport: `Soutenir le projet`,
    footAlternatives: `Alternatives`, footGuides: `Guides`, footLanguages: `Langues`,
  },
  hero: {
    pill: `100 % GRATUIT · OPEN SOURCE`,
    h1: `L'<span class="grad">assistant d'entretien IA</span> gratuit et open source`,
    lead: `AI Interview Helper écoute la question du recruteur, lit votre écran et affiche une réponse prête en quelques secondes. Exercices de code, system design, questions comportementales. Sans abonnement, sans inscription.`,
    ctaWin: `Télécharger pour Windows`, ctaSrc: `Lancer depuis le code`,
    sub: `Windows 10/11 · macOS depuis le code · licence MIT`, allDownloads: `Tous les téléchargements`,
  },
  mock: { label: `Aperçu : le recruteur pose une question de programmation et AI Interview Helper affiche la réponse avec du code`,
    q: `Comment trouver les doublons d'un tableau en O(n) ?`, a: `J'utiliserais un hash set : un seul parcours, et chaque recherche est en O(1) en moyenne.` },
  features: {
    eyebrow: `Fonctions`, h2: `Tout ce que fait un copilote d'entretien payant. Pour 0 €.`,
    lead: `Une fenêtre légère pour Windows et macOS qui reste au-dessus de Zoom, Google Meet, Microsoft Teams ou du navigateur.`,
    items: [
      { ico: `🎙`, h: `Voix → réponse`, p: `Transcription en temps réel avec Whisper. L'IA répond dès que le recruteur cesse de parler.` },
      { ico: `🖼`, h: `Capture → solution`, p: `Un raccourci envoie votre écran à un modèle de vision : LeetCode, HackerRank, SQL, schémas, QCM.` },
      { ico: `🗣`, h: `Séparation des voix`, p: `Distingue le recruteur de votre micro et ne répond qu'à ses questions.` },
      { ico: `🔀`, h: `7 fournisseurs d'IA`, p: `Groq, Claude, Gemini, GPT, DeepSeek, GLM ou un modèle local avec Ollama, avec bascule automatique en cas de limite.` },
      { ico: `👤`, h: `Des réponses à partir de votre parcours`, p: `Collez votre CV et le poste visé. Les réponses sont à la première personne, basées sur votre vraie expérience.` },
      { ico: `🌐`, h: `En français`, p: `Posez la question en français, en anglais ou dans bien d'autres langues. La réponse arrive dans la même langue.` },
    ],
  },
  how: {
    eyebrow: `Fonctionnement`, h2: `Prêt en 2 minutes`,
    steps: [
      { h: `Téléchargez et ouvrez`, p: `Récupérez l'installateur Windows ou le .exe portable. Rien d'autre à installer.` },
      { h: `Collez une clé gratuite`, p: `Créez une clé Gemini gratuite sur <a href="https://aistudio.google.com/apikey">aistudio.google.com</a> et collez-la dans les réglages. Une seule clé sert pour le chat, la voix et les captures.` },
      { h: `Utilisez un raccourci`, p: `${K("Ctrl", "Maj", "L")} pour écouter, ${K("Ctrl", "Maj", "Espace")} pour résoudre ce qui est à l'écran.` },
    ],
  },
  compare: {
    eyebrow: `Gratuit vs payant`, h2: `Une alternative gratuite à Cluely, Interview Coder et Final Round AI`,
    lead: `Le même fonctionnement que les copilotes payants. Sans abonnement mensuel.`,
    headFeature: `Fonction`, headThem: `Copilotes payants classiques`,
    rows: [
      [`Prix`, `0 €, pour toujours`, `Abonnement mensuel`],
      [`Compte / inscription`, `Inutile`, `Obligatoire`],
      [`Code source`, `Ouvert (MIT) sur GitHub`, `Généralement fermé`],
      [`Choix du modèle d'IA`, `7 fournisseurs + tout modèle local`, `Imposé par l'éditeur`],
      [`Fonctionne hors ligne`, `Oui, avec Ollama`, `Non`],
      [`Où vont vos données`, `Directement à l'IA de votre choix`, `Par les serveurs de l'éditeur`],
    ],
    note: `<b>Pourquoi c'est gratuit ?</b> L'application ne coûte rien. Pour l'IA, vous utilisez une clé gratuite (Gemini, Groq et Z.ai en proposent) ou un modèle local avec Ollama. Aucun intermédiaire.`,
    free: `GRATUIT`, offline: `HORS LIGNE`,
  },
  alternatives: {
    eyebrow: `Alternatives`, h2: `Vous cherchez une alternative gratuite ?`, more: `Comparer →`,
    lead: `Des comparatifs avec les outils d'entretien IA payants les plus connus.`,
    cards: [
      { h: `Alternative gratuite à Cluely`, p: `Cluely vs AI Interview Helper : prix, fonctions, modèles d'IA et confidentialité.` },
      { h: `Alternative gratuite à Interview Coder`, p: `Interview Coder vs AI Interview Helper pour les entretiens de code et LeetCode.` },
      { h: `Alternative gratuite à Final Round AI`, p: `Final Round AI vs AI Interview Helper : ce que vous obtenez sans abonnement.` },
    ],
  },
  guides: {
    eyebrow: `Guides`, h2: `En tirer le meilleur`, more: `Lire le guide →`,
    cards: [
      { h: `Obtenir un assistant d'entretien IA gratuit`, p: `Pas à pas : téléchargement, clé Gemini gratuite, audio et meilleurs modèles.` },
      { h: `S'entraîner aux entretiens de code avec l'IA`, p: `Une routine gratuite pour préparer les entretiens type LeetCode et le live coding.` },
    ],
  },
  faq: {
    h2: `Questions fréquentes`,
    items: [
      { q: `Existe-t-il un assistant d'entretien IA gratuit ?`, a: `Oui. AI Interview Helper est un copilote d'entretien IA gratuit et open source pour Windows et macOS. Il n'y a pas d'offre payante : vous utilisez une clé gratuite (Gemini, Groq ou Z.ai) ou un modèle local avec Ollama.` },
      { q: `Est-ce open source ?`, a: `Oui. Tout le code est sur GitHub sous licence MIT : <a href="https://github.com/pyk-boo/ai-interview-helper">github.com/pyk-boo/ai-interview-helper</a>.` },
      { q: `Est-ce un recruteur IA ?`, a: `Pas vraiment. Un recruteur IA vous pose des questions. AI Interview Helper est de votre côté : il écoute la question et vous suggère une réponse. Pour s'entraîner, faites un entretien blanc avec un ami ou une liste de questions enregistrée.` },
      { q: `Est-ce une alternative gratuite à Cluely ou Interview Coder ?`, a: `Oui. Il couvre le même fonctionnement de base (écouter la question, lire l'écran, proposer une réponse) sans abonnement et avec le modèle d'IA de votre choix.` },
      { q: `Est-ce que ça marche pour les entretiens techniques sur LeetCode ou HackerRank ?`, a: `Oui. Appuyez sur Ctrl+Maj+Espace : l'exercice à l'écran part vers un modèle de vision, qui renvoie du code fonctionnel avec une courte explication.` },
      { q: `Répond-il en français ?`, a: `Oui. Whisper reconnaît le français et l'assistant répond dans la langue de la question.` },
      { q: `Où sont stockées mes clés d'API ?`, a: `Uniquement sur votre ordinateur. Les requêtes partent directement de votre machine vers le fournisseur d'IA. Aucun serveur intermédiaire.` },
    ],
  },
  final: {
    h2: `Arrêtez de payer pour des copilotes d'entretien`, lead: `Téléchargez-le, collez une clé gratuite, et vous êtes prêt pour votre prochain entretien.`,
    star: `Mettre une étoile sur GitHub`,
    porsche: `Gratuit pour toujours. Mais s'il vous a aidé à décrocher une offre, vous pouvez contribuer au <a href="{support}">fonds Porsche 911</a> de l'auteur 🏎️`,
  },
},
];
