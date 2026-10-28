// Brazilian Portuguese versions of the comparison pages in articles.mjs. Same structure, same facts.
const REPO = "https://github.com/pyk-boo/ai-interview-helper";
const SITE = "/ai-interview-helper/";
const DL = `${REPO}/releases/latest/download/AI-Interview-Helper-Setup.exe`;

const OURS = `
<h2>O que você ganha com o AI Interview Helper</h2>
<ul>
  <li><strong>Voz → resposta.</strong> O Whisper transcreve o entrevistador em tempo real, e a resposta aparece assim que ele para de falar.</li>
  <li><strong>Print → solução.</strong> <code>Ctrl+Shift+Space</code> envia sua tela para um modelo com visão: desafios de código, SQL, diagramas e testes.</li>
  <li><strong>Separação de vozes.</strong> O áudio do sistema é tratado como o entrevistador e o seu microfone como você, então ele só responde ao outro lado.</li>
  <li><strong>7 provedores de IA.</strong> Groq, Anthropic Claude, Google Gemini, OpenAI GPT, DeepSeek, Z.ai GLM ou um modelo local com Ollama. Se um atingir o limite de uso, a requisição passa para o próximo.</li>
  <li><strong>Respostas pessoais.</strong> Cole seu currículo e a vaga desejada, e as respostas vêm em primeira pessoa, com base na sua experiência.</li>
  <li><strong>Qualquer idioma.</strong> Ele responde no idioma da pergunta: português, inglês, espanhol, russo, alemão, francês e muitos outros.</li>
  <li><strong>Privado por padrão.</strong> Sem conta, sem servidor próprio. Suas chaves de API ficam no seu computador.</li>
</ul>`;

const LIMITS = `
<h2>Limitações, sem rodeios</h2>
<ul>
  <li>Você precisa da sua própria chave de IA. Os planos gratuitos do Gemini, Groq e Z.ai bastam para a maioria das pessoas, e o Ollama não precisa de chave nenhuma.</li>
  <li>Só existe instalador pronto para Windows. No macOS você roda pelo código-fonte com Node.js.</li>
  <li>Não há app para celular nem versão hospedada na nuvem.</li>
  <li>O app para Windows ainda não tem assinatura de código, então o Windows mostra um aviso do SmartScreen na primeira execução.</li>
</ul>`;

const SWITCH = `
<h2>Como trocar em 3 passos</h2>
<ol>
  <li><a href="${DL}">Baixe o instalador para Windows</a> (ou rode <a href="${REPO}#-quick-start">pelo código-fonte</a> no macOS).</li>
  <li>Crie uma chave gratuita do Gemini em <a href="https://aistudio.google.com/apikey">aistudio.google.com</a> e cole nas configurações do app. Uma só chave serve para chat, voz e prints.</li>
  <li>Aperte <code>Ctrl+Shift+L</code> para ouvir ou <code>Ctrl+Shift+Space</code> para resolver o que está na tela. O <a href="${SITE}free-ai-interview-assistant/">guia completo de configuração</a> (em inglês) explica o áudio e a escolha do modelo.</li>
</ol>`;

export default {
  labels: {
    pill: "GRÁTIS · CÓDIGO ABERTO · MIT",
    downloadFree: "Baixar grátis para Windows",
    source: "Código-fonte no GitHub",
    updated: "Atualizado em",
    feature: "Recurso",
    faqTitle: "Perguntas frequentes",
    ctaDownload: "Baixar para Windows (grátis)",
    ctaGithub: "Ver no GitHub",
    related: "Páginas relacionadas",
    read: "Ler →",
    home: "Início",
    alternatives: "Alternativas",
    englishNote: "(em inglês)",
    trademark: (c) => `${c} é uma marca de seu respectivo titular. O AI Interview Helper é um projeto independente de código aberto e não tem vínculo, endosso nem patrocínio de ${c}.`,
  },
  pages: {
    "cluely-alternative": {
      navLabel: "Alternativa gratuita ao Cluely",
      cardText: "Cluely vs AI Interview Helper: preço, recursos, modelos de IA e privacidade.",
      title: "Alternativa grátis ao Cluely 2026: código aberto, $0",
      description: "Cluely Pro custa cerca de $20/mês, segundo reviews. O AI Interview Helper faz a parte da entrevista por $0: voz e tela, 7 modelos de IA, código aberto.",
      h1: `Uma <span class="grad">alternativa ao Cluely</span> grátis e de código aberto`,
      lead: "O AI Interview Helper faz o essencial do que as pessoas usam no Cluely em entrevistas: ouve, lê a sua tela e sugere uma resposta. Não custa nada, o código está no GitHub e você escolhe o modelo de IA.",
      updatedHuman: "outubro de 2026",
      intro: `
<p>O <strong>Cluely</strong> é um assistente de IA comercial que ouve suas chamadas e olha a sua tela para sugerir o que dizer. As pessoas usam para ligações de vendas, reuniões e entrevistas de emprego. Ele tem um plano gratuito limitado, e os recursos completos são pagos.</p>
<p>Se você precisa de ajuda principalmente em <strong>entrevistas</strong> e não quer mais uma assinatura mensal, o AI Interview Helper é uma opção grátis e de código aberto feita exatamente para isso.</p>`,
      tableTitle: "Cluely vs AI Interview Helper",
      table: [
        ["Preço", "Grátis, sem plano pago", "Plano gratuito limitado; o Pro custaria cerca de $19.99/mês, segundo reviews, e os planos superiores custam mais"],
        ["Código-fonte", "Aberto (MIT) no GitHub", "Fechado"],
        ["Modelo de IA", "Você escolhe: 7 provedores ou qualquer modelo local", "Definido pelo fornecedor"],
        ["Funciona offline", "Sim, com Ollama", "Não"],
        ["Conta", "Não precisa", "Obrigatória"],
        ["Para onde vão seus dados", "Direto do seu computador para o provedor de IA que você escolher", "Pelo serviço do Cluely"],
        ["Foco principal", "Entrevistas de emprego e de programação", "Reuniões, ligações de vendas e entrevistas"],
        ["Plataformas", "Windows (instalador), macOS (pelo código-fonte)", "Apps para desktop; há relatos de um plano separado para celular"],
      ],
      tableNote: `Preços do Cluely conforme reviews de terceiros em outubro de 2026 (por exemplo, <a href="https://toolradar.com/tools/cluely/pricing">Toolradar</a>). Os preços mudam com frequência, então confira os planos atuais em cluely.com.`,
      sections: `
<h2>Por que as pessoas procuram uma alternativa ao Cluely</h2>
<ul>
  <li><strong>Preço.</strong> Uma assinatura pesa no bolso se você só precisa dela durante a busca por emprego.</li>
  <li><strong>Escolha do modelo.</strong> Tem gente que quer um modelo específico, como o Claude para system design ou um modelo rápido do Groq para baixa latência.</li>
  <li><strong>Privacidade.</strong> Com um app de código aberto e a sua própria chave, não há nenhum serviço de terceiros entre você e a IA.</li>
  <li><strong>Transparência.</strong> Você pode ler exatamente o que o app faz com o seu áudio e os seus prints.</li>
</ul>
${OURS}
<h2>Quando o Cluely pode ser a melhor escolha</h2>
<p>O Cluely é um produto comercial bem acabado, com uma equipe por trás. Se você quer notas de reunião, ajuda em ligações de vendas, um app para celular ou simplesmente zero configuração sem lidar com chaves de API, um serviço pago como o Cluely pode fazer mais sentido.</p>
${LIMITS}
${SWITCH}`,
      faq: [
        { q: "Existe uma alternativa gratuita ao Cluely?", a: "Sim. O AI Interview Helper é um copiloto de entrevista com IA grátis e de código aberto. Ele ouve o entrevistador, lê a sua tela e sugere respostas, sem assinatura." },
        { q: "O AI Interview Helper é grátis mesmo?", a: "Sim, é totalmente grátis. Não existe plano pago: você usa uma chave de IA do plano gratuito (Gemini, Groq ou Z.ai) ou roda um modelo local com Ollama sem custo nenhum." },
        { q: "Ele funciona como o Cluely em entrevistas?", a: "Sim, o fluxo principal é o mesmo: transcrever a pergunta, olhar a tela e sugerir uma resposta. O foco é em entrevistas, e ele não inclui os recursos de notas de reunião ou de vendas do Cluely." },
        { q: "Meus dados ficam mais seguros do que em um serviço na nuvem?", a: "Não há nenhum servidor extra no meio: suas chaves ficam no seu computador e as requisições vão direto para o provedor de IA que você escolher. A política de privacidade do próprio provedor continua valendo." },
      ],
      ctaH: "Experimente a alternativa gratuita ao Cluely",
      ctaP: "Baixe, cole uma chave gratuita do Gemini e fique pronto em uns dois minutos.",
    },
    "interview-coder-alternative": {
      navLabel: "Alternativa gratuita ao Interview Coder",
      cardText: "Interview Coder vs AI Interview Helper para entrevistas de código e LeetCode.",
      title: "Alternativa grátis ao Interview Coder 2026: código aberto",
      description: "Interview Coder custa cerca de $299/mês, segundo reviews. Tenha o mesmo print → código por $0: LeetCode, HackerRank, modo de voz, 7 IAs. Código aberto.",
      h1: `Uma <span class="grad">alternativa ao Interview Coder</span> grátis e de código aberto`,
      lead: "Tire um print de um desafio de código e receba o código funcionando com explicação. O AI Interview Helper também ouve perguntas faladas, suporta 7 provedores de IA e não custa nada.",
      updatedHuman: "outubro de 2026",
      intro: `
<p>O <strong>Interview Coder</strong> é um app pago para desktop focado em entrevistas de programação. Você captura o problema na tela e ele gera uma solução. Reviews de terceiros o descrevem como uma das ferramentas mais caras dessa categoria.</p>
<p>O AI Interview Helper cobre o mesmo fluxo de print → solução de graça e ainda tem modo de voz para as partes faladas da entrevista: perguntas comportamentais, system design e perguntas de acompanhamento.</p>`,
      tableTitle: "Interview Coder vs AI Interview Helper",
      table: [
        ["Preço", "Grátis, sem plano pago", "Segundo reviews, cerca de $299/mês ou cerca de $799 em pagamento único; acesso gratuito limitado"],
        ["Código-fonte", "Aberto (MIT) no GitHub", "Produto comercial"],
        ["Print → código", "Sim, Ctrl+Shift+Space", "Sim, é o recurso principal"],
        ["Perguntas faladas", "Sim, transcrição em tempo real com Whisper", "Focado em desafios de código"],
        ["Modelo de IA", "Você escolhe: 7 provedores ou qualquer modelo local", "Definido pelo fornecedor"],
        ["Funciona offline", "Sim, com Ollama", "Não"],
        ["Reembolso", "Nada a reembolsar, é grátis", "Segundo relatos, os planos pagos não são reembolsáveis"],
      ],
      tableNote: `Preços do Interview Coder conforme reviews de terceiros em outubro de 2026 (por exemplo, <a href="https://prachub.com/resources/interview-coder-review-2026-pricing-detection-risks-and-ethical-alternatives">PracHub</a>). Os preços mudam com frequência, então confira os planos atuais no site oficial.`,
      sections: `
<h2>Por que as pessoas procuram uma alternativa ao Interview Coder</h2>
<ul>
  <li><strong>Preço.</strong> Centenas de dólares é muito dinheiro por uma ferramenta que você vai usar em poucas semanas de busca por emprego.</li>
  <li><strong>Mais do que código.</strong> A maioria dos processos seletivos também tem etapas comportamentais e de system design, onde o modo de voz ajuda.</li>
  <li><strong>Escolha do modelo.</strong> Os melhores modelos para código mudam rápido. Com a sua própria chave, você troca para o mais novo no dia em que ele sair.</li>
</ul>
${OURS}
<h2>Dicas para desafios de código</h2>
<ul>
  <li>Para problemas de algoritmo difíceis, escolha um modelo forte, como Claude Opus ou GPT-OSS 120B.</li>
  <li>Para prints, o modelo precisa aceitar imagens: Gemini Flash, Claude e GPT-4o aceitam.</li>
  <li>Faça perguntas no chat ("explique a complexidade", "reescreva em Java") para entender a solução, e não só copiar.</li>
</ul>
<h2>Quando o Interview Coder pode ser a melhor escolha</h2>
<p>Se você quer um produto feito só para problemas de programação, com o fornecedor cuidando dos modelos e do suporte, uma ferramenta paga como o Interview Coder pode servir melhor para você.</p>
${LIMITS}
${SWITCH}`,
      faq: [
        { q: "Existe uma alternativa gratuita ao Interview Coder?", a: "Sim. O AI Interview Helper é grátis e de código aberto. Aperte Ctrl+Shift+Space para enviar o desafio de código da sua tela para um modelo com visão e receber o código funcionando com explicação." },
        { q: "Funciona com desafios do LeetCode, HackerRank e CodeSignal?", a: "Sim. Funciona com qualquer coisa visível na sua tela, incluindo LeetCode, HackerRank, CodeSignal e editores compartilhados." },
        { q: "Quais linguagens de programação ele suporta?", a: "Qualquer linguagem que o modelo de IA conheça: Python, Java, C++, JavaScript, Go, SQL e outras. É só pedir a linguagem que você precisa." },
        { q: "Ele também ajuda com perguntas comportamentais e de system design?", a: "Sim. O modo de voz transcreve as perguntas faladas e sugere respostas, usando o seu currículo nas perguntas comportamentais." },
      ],
      ctaH: "Experimente a alternativa gratuita ao Interview Coder",
      ctaP: "Baixe, cole uma chave gratuita do Gemini e resolva seu primeiro desafio em uns dois minutos.",
    },
    "final-round-ai-alternative": {
      navLabel: "Alternativa gratuita ao Final Round AI",
      cardText: "Final Round AI vs AI Interview Helper: o que você tem sem assinatura.",
      title: "Alternativa grátis ao Final Round AI 2026: sem assinatura",
      description: "Final Round AI custa cerca de $150/mês, segundo reviews. O AI Interview Helper é um copiloto de entrevista ao vivo por $0, de código aberto e sem cadastro.",
      h1: `Uma <span class="grad">alternativa ao Final Round AI</span> grátis e de código aberto`,
      lead: "Tenha um copiloto de entrevista com IA em tempo real sem pagar assinatura. O AI Interview Helper ouve as perguntas, lê a sua tela e sugere respostas, com o modelo de IA que você escolher.",
      updatedHuman: "outubro de 2026",
      intro: `
<p>O <strong>Final Round AI</strong> é uma plataforma de carreira paga. Além do copiloto de entrevista ao vivo, oferece entrevistas simuladas, ferramentas de currículo e outros recursos para a busca de emprego. Reviews de terceiros relatam que as sessões com o copiloto ao vivo exigem um plano pago.</p>
<p>Se o que você precisa é o copiloto ao vivo, o AI Interview Helper entrega isso de graça, como um app para desktop de código aberto.</p>`,
      tableTitle: "Final Round AI vs AI Interview Helper",
      table: [
        ["Preço", "Grátis, sem plano pago", "Segundo reviews, cerca de $150/mês no plano mensal, menos nos planos mais longos"],
        ["Teste grátis da ajuda ao vivo", "Tudo é grátis", "Segundo relatos, não há teste grátis para as sessões com o copiloto ao vivo"],
        ["Código-fonte", "Aberto (MIT) no GitHub", "Fechado"],
        ["Modelo de IA", "Você escolhe: 7 provedores ou qualquer modelo local", "Definido pelo fornecedor"],
        ["Funciona offline", "Sim, com Ollama", "Não"],
        ["Ferramentas extras de carreira", "Não, o foco é o copiloto ao vivo", "Entrevistas simuladas, ferramentas de currículo e mais"],
      ],
      tableNote: `Preços do Final Round AI conforme reviews de terceiros em outubro de 2026 (por exemplo, <a href="https://ophyai.com/blog/career-advice/final-round-ai-pricing">Ophy AI</a>). Os preços mudam com frequência, então confira os planos atuais em finalroundai.com.`,
      sections: `
<h2>Por que as pessoas procuram uma alternativa ao Final Round AI</h2>
<ul>
  <li><strong>Preço.</strong> Um plano mensal sai caro se você só precisa de ajuda em algumas entrevistas.</li>
  <li><strong>Teste antes de confiar.</strong> Com um app gratuito, você pode testar em entrevistas simuladas quantas vezes quiser.</li>
  <li><strong>Controle.</strong> Suas chaves, seu modelo, o caminho dos seus dados. Nada passa por um serviço de terceiros.</li>
</ul>
${OURS}
<h2>Quando o Final Round AI pode ser a melhor escolha</h2>
<p>Se você quer uma plataforma completa, com entrevistas simuladas, criação de currículo e ferramentas de busca de emprego em uma única conta, o Final Round AI oferece mais do que um simples app para desktop.</p>
${LIMITS}
${SWITCH}`,
      faq: [
        { q: "Existe uma alternativa gratuita ao Final Round AI?", a: "Sim. O AI Interview Helper é um copiloto de entrevista com IA grátis e de código aberto, com transcrição de voz em tempo real e análise de tela, sem assinatura." },
        { q: "Dá para usar em entrevistas simuladas?", a: "Sim. Faça uma entrevista de treino com um amigo ou com uma lista de perguntas gravadas, e o app mostra como poderia soar uma resposta forte." },
        { q: "Preciso criar uma conta?", a: "Não. Baixe o app, cole uma chave de IA gratuita e pronto. Não existe conta nem servidor." },
        { q: "Ele funciona em português e em outros idiomas além do inglês?", a: "Sim. Ele responde no idioma da pergunta, incluindo português, espanhol, russo, alemão, francês e muitos outros." },
      ],
      ctaH: "Experimente a alternativa gratuita ao Final Round AI",
      ctaP: "Sem cadastro, sem cartão. Baixe e cole uma chave gratuita.",
    },
  },
};
