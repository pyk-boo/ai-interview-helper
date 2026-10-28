// Spanish versions of the comparison pages in articles.mjs. Same structure, same facts.
const REPO = "https://github.com/pyk-boo/ai-interview-helper";
const SITE = "/ai-interview-helper/";
const DL = `${REPO}/releases/latest/download/AI-Interview-Helper-Setup.exe`;

const OURS = `
<h2>Qué obtienes con AI Interview Helper</h2>
<ul>
  <li><strong>Voz → respuesta.</strong> Whisper transcribe al entrevistador en tiempo real, y la respuesta aparece en cuanto deja de hablar.</li>
  <li><strong>Captura → solución.</strong> <code>Ctrl+Shift+Space</code> envía tu pantalla a un modelo con visión para ejercicios de programación, SQL, diagramas y tests.</li>
  <li><strong>Separa las voces.</strong> El audio del sistema se trata como el entrevistador y tu micrófono como tú, así que solo responde a la otra parte.</li>
  <li><strong>7 proveedores de IA.</strong> Groq, Anthropic Claude, Google Gemini, OpenAI GPT, DeepSeek, Z.ai GLM o un modelo local con Ollama. Si uno llega al límite de uso, la petición pasa al siguiente.</li>
  <li><strong>Respuestas con tu experiencia.</strong> Pega tu CV y el puesto al que aspiras, y las respuestas salen en primera persona, basadas en tu experiencia.</li>
  <li><strong>Cualquier idioma.</strong> Responde en el idioma de la pregunta: español, inglés, ruso, alemán, francés y muchos más.</li>
  <li><strong>Privado por diseño.</strong> Sin cuenta y sin servidor propio. Tus claves de API se quedan en tu ordenador.</li>
</ul>`;

const LIMITS = `
<h2>Limitaciones, con total honestidad</h2>
<ul>
  <li>Necesitas tu propia clave de IA. Los planes gratuitos de Gemini, Groq y Z.ai bastan para la mayoría, y Ollama no necesita ninguna clave.</li>
  <li>Solo hay instalador para Windows. En macOS se ejecuta desde el código fuente con Node.js.</li>
  <li>No hay app móvil ni versión alojada en la nube.</li>
  <li>La app de Windows todavía no está firmada digitalmente, así que Windows muestra un aviso de SmartScreen la primera vez que la abres.</li>
</ul>`;

const SWITCH = `
<h2>Cómo cambiarte en 3 pasos</h2>
<ol>
  <li><a href="${DL}">Descarga el instalador para Windows</a> (o ejecútalo <a href="${REPO}#-quick-start">desde el código fuente</a> en macOS).</li>
  <li>Crea una clave gratuita de Gemini en <a href="https://aistudio.google.com/apikey">aistudio.google.com</a> y pégala en los ajustes de la app. Una sola clave sirve para el chat, la voz y las capturas.</li>
  <li>Pulsa <code>Ctrl+Shift+L</code> para escuchar o <code>Ctrl+Shift+Space</code> para resolver lo que hay en pantalla. La <a href="${SITE}free-ai-interview-assistant/">guía completa de configuración</a> (en inglés) explica el audio y la elección del modelo.</li>
</ol>`;

export default {
  labels: {
    pill: "GRATIS · CÓDIGO ABIERTO · MIT",
    downloadFree: "Descargar gratis para Windows",
    source: "Código fuente en GitHub",
    updated: "Actualizado",
    feature: "Función",
    faqTitle: "Preguntas frecuentes",
    ctaDownload: "Descargar para Windows (gratis)",
    ctaGithub: "Ver en GitHub",
    related: "Páginas relacionadas",
    read: "Leer →",
    home: "Inicio",
    alternatives: "Alternativas",
    englishNote: "(en inglés)",
    trademark: (c) => `${c} es una marca de su respectivo propietario. AI Interview Helper es un proyecto independiente de código abierto y no está afiliado a ${c}, ni cuenta con su respaldo o patrocinio.`,
  },
  pages: {
    "cluely-alternative": {
      navLabel: "Alternativa gratis a Cluely",
      cardText: "Cluely vs AI Interview Helper: precio, funciones, modelos de IA y privacidad.",
      title: "Alternativa gratis a Cluely 2026: código abierto y $0",
      description: "Según reseñas, Cluely Pro cuesta unos $20/mes. AI Interview Helper es gratis: respuestas en vivo por voz y pantalla, 7 modelos de IA, código abierto.",
      h1: `Una <span class="grad">alternativa a Cluely</span> gratis y de código abierto`,
      lead: "AI Interview Helper hace lo esencial para lo que la gente usa Cluely en entrevistas: escucha, lee tu pantalla y te sugiere una respuesta. No cuesta nada, el código está en GitHub y tú eliges el modelo de IA.",
      updatedHuman: "octubre de 2026",
      intro: `
<p><strong>Cluely</strong> es un asistente de IA comercial que escucha tus llamadas y mira tu pantalla para sugerirte qué decir. Se usa en llamadas de ventas, reuniones y entrevistas de trabajo. Tiene un plan gratuito limitado, y las funciones completas son de pago.</p>
<p>Si lo que necesitas es ayuda sobre todo en <strong>entrevistas</strong> y no quieres otra suscripción mensual, AI Interview Helper es una opción gratuita y de código abierto creada justo para eso.</p>`,
      tableTitle: "Cluely vs AI Interview Helper",
      table: [
        ["Precio", "Gratis, sin plan de pago", "Plan gratuito limitado; según reseñas, Pro cuesta unos $19.99/mes y los planes superiores, más"],
        ["Código fuente", "Abierto (MIT) en GitHub", "Cerrado"],
        ["Modelo de IA", "Lo eliges tú: 7 proveedores o cualquier modelo local", "Lo decide el proveedor"],
        ["Funciona sin internet", "Sí, con Ollama", "No"],
        ["Cuenta", "No hace falta", "Obligatoria"],
        ["A dónde van tus datos", "Directamente de tu ordenador al proveedor de IA que elijas", "A través del servicio de Cluely"],
        ["Enfoque principal", "Entrevistas de trabajo y de programación", "Reuniones, llamadas de ventas y entrevistas"],
        ["Plataformas", "Windows (instalador), macOS (desde el código fuente)", "Apps de escritorio; según reseñas, hay un plan móvil aparte"],
      ],
      tableNote: `Precios de Cluely según reseñas de terceros de octubre de 2026 (por ejemplo, <a href="https://toolradar.com/tools/cluely/pricing">Toolradar</a>). Los precios cambian a menudo, así que consulta los planes actuales en cluely.com.`,
      sections: `
<h2>Por qué la gente busca una alternativa a Cluely</h2>
<ul>
  <li><strong>Precio.</strong> Una suscripción se acumula si solo la necesitas mientras buscas trabajo.</li>
  <li><strong>Elección del modelo.</strong> Hay quien quiere un modelo concreto, como Claude para diseño de sistemas o un modelo rápido de Groq para tener poca latencia.</li>
  <li><strong>Privacidad.</strong> Con una app de código abierto y tu propia clave, no hay ningún servicio de terceros entre tú y la IA.</li>
  <li><strong>Transparencia.</strong> Puedes leer exactamente qué hace la app con tu audio y tus capturas.</li>
</ul>
${OURS}
<h2>Cuándo Cluely puede ser mejor opción</h2>
<p>Cluely es un producto comercial pulido, con un equipo detrás. Si quieres notas de reuniones, ayuda en llamadas de ventas, una app móvil o simplemente no configurar nada ni gestionar claves de API, un servicio de pago como Cluely puede tener más sentido.</p>
${LIMITS}
${SWITCH}`,
      faq: [
        { q: "¿Hay una alternativa gratis a Cluely?", a: "Sí, AI Interview Helper es un copiloto de entrevistas con IA gratuito y de código abierto. Escucha al entrevistador, lee tu pantalla y te sugiere respuestas sin ninguna suscripción." },
        { q: "¿AI Interview Helper es gratis de verdad?", a: "Sí, no existe ningún plan de pago. Usas una clave de IA gratuita (Gemini, Groq o Z.ai) o ejecutas un modelo local con Ollama sin coste alguno." },
        { q: "¿Funciona igual que Cluely en una entrevista?", a: "El flujo principal es el mismo: transcribe la pregunta, mira la pantalla y sugiere una respuesta. Está centrado en entrevistas y no incluye las funciones de notas de reuniones ni de ventas de Cluely." },
        { q: "¿Mis datos están más seguros que con un servicio en la nube?", a: "Tus claves se quedan en tu ordenador y las peticiones van directamente al proveedor de IA que elijas, sin ningún servidor intermedio. Eso sí, se sigue aplicando la política de privacidad de ese proveedor." },
      ],
      ctaH: "Prueba la alternativa gratis a Cluely",
      ctaP: "Descárgalo, pega una clave gratuita de Gemini y en unos dos minutos lo tienes listo.",
    },
    "interview-coder-alternative": {
      navLabel: "Alternativa gratis a Interview Coder",
      cardText: "Interview Coder vs AI Interview Helper para entrevistas de programación y LeetCode.",
      title: "Alternativa gratis a Interview Coder (2026): código abierto",
      description: "Según reseñas, Interview Coder cuesta unos $299/mes. Lo mismo gratis: captura → código, LeetCode, HackerRank, modo voz, 7 modelos de IA. Código abierto.",
      h1: `Una <span class="grad">alternativa a Interview Coder</span> gratis y de código abierto`,
      lead: "Haz una captura de un ejercicio de programación y obtén código que funciona, con su explicación. AI Interview Helper además escucha las preguntas habladas, admite 7 proveedores de IA y no cuesta nada.",
      updatedHuman: "octubre de 2026",
      intro: `
<p><strong>Interview Coder</strong> es una app de escritorio de pago centrada en entrevistas de programación. Capturas el problema en pantalla y genera una solución. Las reseñas de terceros la describen como una de las herramientas más caras de esta categoría.</p>
<p>AI Interview Helper cubre el mismo flujo de captura → solución gratis, y añade un modo de voz para las partes habladas de la entrevista: preguntas de comportamiento, diseño de sistemas y preguntas de seguimiento.</p>`,
      tableTitle: "Interview Coder vs AI Interview Helper",
      table: [
        ["Precio", "Gratis, sin plan de pago", "Según reseñas, unos $299/mes o unos $799 en un único pago; acceso gratuito limitado"],
        ["Código fuente", "Abierto (MIT) en GitHub", "Producto comercial"],
        ["Captura → código", "Sí, Ctrl+Shift+Space", "Sí, es su función principal"],
        ["Preguntas habladas", "Sí, transcripción en tiempo real con Whisper", "Centrado en ejercicios de programación"],
        ["Modelo de IA", "Lo eliges tú: 7 proveedores o cualquier modelo local", "Lo decide el proveedor"],
        ["Funciona sin internet", "Sí, con Ollama", "No"],
        ["Reembolsos", "No hay nada que reembolsar, es gratis", "Según reseñas, los planes de pago no son reembolsables"],
      ],
      tableNote: `Precios de Interview Coder según reseñas de terceros de octubre de 2026 (por ejemplo, <a href="https://prachub.com/resources/interview-coder-review-2026-pricing-detection-risks-and-ethical-alternatives">PracHub</a>). Los precios cambian a menudo, así que consulta los planes actuales en la web oficial.`,
      sections: `
<h2>Por qué la gente busca una alternativa a Interview Coder</h2>
<ul>
  <li><strong>Precio.</strong> Cientos de dólares es mucho para una herramienta que necesitas unas pocas semanas mientras buscas trabajo.</li>
  <li><strong>Más que programación.</strong> La mayoría de los procesos de selección incluyen también rondas de comportamiento y de diseño de sistemas, donde el modo de voz ayuda.</li>
  <li><strong>Elección del modelo.</strong> Los mejores modelos para programar cambian rápido. Con tu propia clave puedes pasarte al más nuevo el mismo día que sale.</li>
</ul>
${OURS}
<h2>Consejos para ejercicios de programación</h2>
<ul>
  <li>Para problemas de algoritmos difíciles, elige un modelo potente como Claude Opus o GPT-OSS 120B.</li>
  <li>Para capturas, el modelo tiene que admitir imágenes: Gemini Flash, Claude y GPT-4o lo hacen.</li>
  <li>Haz preguntas de seguimiento en el chat («explica la complejidad», «reescríbelo en Java») para entender la solución, no solo copiarla.</li>
</ul>
<h2>Cuándo Interview Coder puede ser mejor opción</h2>
<p>Si quieres un producto pensado solo para problemas de programación, con el proveedor encargándose de los modelos y del soporte, una herramienta de pago como Interview Coder puede encajarte mejor.</p>
${LIMITS}
${SWITCH}`,
      faq: [
        { q: "¿Hay una alternativa gratis a Interview Coder?", a: "Sí, AI Interview Helper es gratis y de código abierto. Pulsa Ctrl+Shift+Space para enviar el ejercicio de programación de tu pantalla a un modelo con visión y obtener código que funciona, con su explicación." },
        { q: "¿Sirve para ejercicios de LeetCode, HackerRank y CodeSignal?", a: "Sí, funciona con todo lo que se vea en tu pantalla, incluidos LeetCode, HackerRank, CodeSignal y editores compartidos." },
        { q: "¿Qué lenguajes de programación admite?", a: "Cualquier lenguaje que conozca el modelo de IA: Python, Java, C++, JavaScript, Go, SQL y más. Solo tienes que pedir el lenguaje que necesitas." },
        { q: "¿También ayuda con preguntas de comportamiento y de diseño de sistemas?", a: "Sí, el modo de voz transcribe las preguntas habladas y sugiere respuestas, usando tu CV para las preguntas de comportamiento." },
      ],
      ctaH: "Prueba la alternativa gratis a Interview Coder",
      ctaP: "Descárgalo, pega una clave gratuita de Gemini y resuelve tu primer ejercicio en unos dos minutos.",
    },
    "final-round-ai-alternative": {
      navLabel: "Alternativa gratis a Final Round AI",
      cardText: "Final Round AI vs AI Interview Helper: lo que obtienes sin suscripción.",
      title: "Alternativa gratis a Final Round AI (2026): sin suscripción",
      description: "Según reseñas, Final Round AI cuesta unos $150/mes. AI Interview Helper es un copiloto en vivo gratis y de código abierto: voz y pantalla, sin registro.",
      h1: `Una <span class="grad">alternativa a Final Round AI</span> gratis y de código abierto`,
      lead: "Ten un copiloto de entrevistas con IA en tiempo real sin pagar suscripción. AI Interview Helper escucha las preguntas, lee tu pantalla y te sugiere respuestas, con el modelo de IA que tú elijas.",
      updatedHuman: "octubre de 2026",
      intro: `
<p><strong>Final Round AI</strong> es una plataforma de empleo de pago. Además de su copiloto de entrevistas en vivo, ofrece entrevistas simuladas, herramientas para el CV y otras funciones para buscar trabajo. Según reseñas de terceros, las sesiones del copiloto en vivo requieren un plan de pago.</p>
<p>Si lo que necesitas es la parte del copiloto en vivo, AI Interview Helper te la da gratis, como app de escritorio de código abierto.</p>`,
      tableTitle: "Final Round AI vs AI Interview Helper",
      table: [
        ["Precio", "Gratis, sin plan de pago", "Según reseñas, unos $150/mes en plan mensual, menos en planes más largos"],
        ["Prueba gratis de la ayuda en vivo", "Todo es gratis", "Según reseñas, no hay prueba gratuita para las sesiones del copiloto en vivo"],
        ["Código fuente", "Abierto (MIT) en GitHub", "Cerrado"],
        ["Modelo de IA", "Lo eliges tú: 7 proveedores o cualquier modelo local", "Lo decide el proveedor"],
        ["Funciona sin internet", "Sí, con Ollama", "No"],
        ["Herramientas de empleo extra", "No, se centra en el copiloto en vivo", "Entrevistas simuladas, herramientas para el CV y más"],
      ],
      tableNote: `Precios de Final Round AI según reseñas de terceros de octubre de 2026 (por ejemplo, <a href="https://ophyai.com/blog/career-advice/final-round-ai-pricing">Ophy AI</a>). Los precios cambian a menudo, así que consulta los planes actuales en finalroundai.com.`,
      sections: `
<h2>Por qué la gente busca una alternativa a Final Round AI</h2>
<ul>
  <li><strong>Precio.</strong> Un plan mensual sale caro si solo necesitas ayuda para unas pocas entrevistas.</li>
  <li><strong>Pruébalo antes de fiarte.</strong> Con una app gratuita puedes probarla en entrevistas simuladas todas las veces que quieras.</li>
  <li><strong>Control.</strong> Tus claves, tu modelo, el camino de tus datos. Nada pasa por un servicio de terceros.</li>
</ul>
${OURS}
<h2>Cuándo Final Round AI puede ser mejor opción</h2>
<p>Si quieres una plataforma todo en uno con entrevistas simuladas, creación de CV y herramientas de búsqueda de empleo en una sola cuenta, Final Round AI ofrece más que una simple app de escritorio.</p>
${LIMITS}
${SWITCH}`,
      faq: [
        { q: "¿Hay una alternativa gratis a Final Round AI?", a: "Sí, AI Interview Helper es un copiloto de entrevistas con IA gratuito y de código abierto, con transcripción de voz en tiempo real y análisis de pantalla, y sin suscripción." },
        { q: "¿Puedo usarlo para hacer entrevistas simuladas?", a: "Sí, haz una entrevista de práctica con un amigo o con una lista de preguntas grabadas, y la app te muestra cómo podría sonar una buena respuesta." },
        { q: "¿Hace falta crear una cuenta?", a: "No, descargas la app, pegas una clave de IA gratuita y funciona. No hay cuenta ni servidor." },
        { q: "¿Funciona en español y otros idiomas además del inglés?", a: "Sí, responde en el idioma de la pregunta, incluidos el español, el ruso, el alemán, el francés y muchos más." },
      ],
      ctaH: "Prueba la alternativa gratis a Final Round AI",
      ctaP: "Sin registro y sin tarjeta. Descárgalo y pega una clave gratuita.",
    },
  },
};
