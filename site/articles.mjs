// English-only pages: "free X alternative" comparisons and how-to guides.
// Competitor prices come from third-party reviews (linked in each table note) and change often,
// so every figure is hedged and dated. Re-check them before editing the numbers.

const REPO = "https://github.com/pyk-boo/ai-interview-helper";
const SITE = "/ai-interview-helper/";
const DL = `${REPO}/releases/latest/download/AI-Interview-Helper-Setup.exe`;

const OURS = `
<h2>What you get with AI Interview Helper</h2>
<ul>
  <li><strong>Voice → answer.</strong> Whisper transcribes the interviewer in real time, and the answer appears as soon as they stop talking.</li>
  <li><strong>Screenshot → solution.</strong> <code>Ctrl+Shift+Space</code> sends your screen to a vision model for coding tasks, SQL, diagrams and quizzes.</li>
  <li><strong>Speaker separation.</strong> System audio is treated as the interviewer and your mic as you, so it only answers the other side.</li>
  <li><strong>7 AI providers.</strong> Groq, Anthropic Claude, Google Gemini, OpenAI GPT, DeepSeek, Z.ai GLM, or a local model with Ollama. If one hits a rate limit, the request moves to the next.</li>
  <li><strong>Personal answers.</strong> Paste your resume and target role, and answers come in first person, based on your experience.</li>
  <li><strong>Any language.</strong> It replies in the language of the question: English, Spanish, Russian, German, French and many more.</li>
  <li><strong>Private by design.</strong> No account, no backend. Your API keys stay on your computer.</li>
</ul>`;

const LIMITS = `
<h2>Honest limitations</h2>
<ul>
  <li>You need your own AI key. Free tiers from Gemini, Groq and Z.ai are enough for most people, and Ollama needs no key at all.</li>
  <li>There is a ready installer for Windows only. On macOS you run it from source with Node.js.</li>
  <li>There is no mobile app and no hosted cloud version.</li>
  <li>The Windows app isn't code-signed yet, so Windows shows a SmartScreen warning on first launch.</li>
</ul>`;

const SWITCH = `
<h2>How to switch in 3 steps</h2>
<ol>
  <li><a href="${DL}">Download the Windows installer</a> (or run it <a href="${REPO}#-quick-start">from source</a> on macOS).</li>
  <li>Create a free Gemini key at <a href="https://aistudio.google.com/apikey">aistudio.google.com</a> and paste it into the app settings. One key covers chat, voice and screenshots.</li>
  <li>Press <code>Ctrl+Shift+L</code> to listen or <code>Ctrl+Shift+Space</code> to solve what's on screen. The <a href="${SITE}free-ai-interview-assistant/">full setup guide</a> covers audio and model choice.</li>
</ol>`;

export const ALTERNATIVES = [
{
  slug: "cluely-alternative",
  competitor: "Cluely",
  navLabel: "Free Cluely alternative",
  cardText: "Cluely vs AI Interview Helper: price, features, AI models and privacy.",
  title: "Free Cluely Alternative (Open Source) | AI Interview Helper",
  description: "Free, open-source Cluely alternative for job interviews: real-time answers from your voice and screen, 7 AI providers, no subscription.",
  h1: `A free, open-source <span class="grad">Cluely alternative</span>`,
  lead: "AI Interview Helper does the core of what people use Cluely for in interviews: it listens, reads your screen and suggests an answer. It costs nothing, the code is on GitHub, and you pick the AI model.",
  updatedHuman: "October 2026",
  intro: `
<p><strong>Cluely</strong> is a commercial AI assistant that listens to your calls and looks at your screen to suggest what to say. People use it for sales calls, meetings and job interviews. It has a limited free tier, and the full features are paid.</p>
<p>If you mainly need help in <strong>interviews</strong> and don't want another monthly subscription, AI Interview Helper is a free, open-source option built for exactly that.</p>`,
  tableTitle: "Cluely vs AI Interview Helper",
  table: [
    ["Price", "Free, no paid plan", "Limited free tier; Pro reported at about $19.99/month, higher tiers cost more"],
    ["Source code", "Open source (MIT) on GitHub", "Closed source"],
    ["AI model", "You choose: 7 providers or any local model", "Chosen by the vendor"],
    ["Works offline", "Yes, with Ollama", "No"],
    ["Account", "Not needed", "Required"],
    ["Where your data goes", "Directly from your computer to the AI provider you pick", "Through Cluely's service"],
    ["Main focus", "Job and coding interviews", "Meetings, sales calls and interviews"],
    ["Platforms", "Windows (installer), macOS (from source)", "Desktop apps; a separate mobile plan is reported"],
  ],
  tableNote: `Cluely pricing as reported by third-party reviews in October 2026 (for example <a href="https://toolradar.com/tools/cluely/pricing">Toolradar</a>). Prices change often, so check cluely.com for current plans.`,
  sections: `
<h2>Why people look for a Cluely alternative</h2>
<ul>
  <li><strong>Price.</strong> A subscription adds up if you only need it during a job search.</li>
  <li><strong>Model choice.</strong> Some people want a specific model, like Claude for system design or a fast Groq model for low latency.</li>
  <li><strong>Privacy.</strong> With an open-source app and your own key, there is no third-party service between you and the AI.</li>
  <li><strong>Transparency.</strong> You can read exactly what the app does with your audio and screenshots.</li>
</ul>
${OURS}
<h2>When Cluely might be the better choice</h2>
<p>Cluely is a polished commercial product with a team behind it. If you want meeting notes, help on sales calls, a mobile app, or simply zero setup without managing API keys, a paid service like Cluely can make more sense.</p>
${LIMITS}
${SWITCH}`,
  faq: [
    { q: "Is there a free alternative to Cluely?", a: "Yes. AI Interview Helper is a free, open-source AI interview copilot. It listens to the interviewer, reads your screen and suggests answers without a subscription." },
    { q: "Is AI Interview Helper really free?", a: "Yes. There is no paid plan. You use a free-tier AI key (Gemini, Groq or Z.ai) or run a local model with Ollama at zero cost." },
    { q: "Does it work like Cluely in interviews?", a: "The core workflow is the same: transcribe the question, look at the screen, suggest an answer. It focuses on interviews and doesn't include Cluely's meeting-notes or sales features." },
    { q: "Is my data safer than with a cloud service?", a: "Your keys stay on your computer, and requests go straight to the AI provider you choose, with no extra server in between. The provider's own privacy policy still applies." },
  ],
  ctaH: "Try the free Cluely alternative",
  ctaP: "Download it, paste a free Gemini key, and you're ready in about two minutes.",
},
{
  slug: "interview-coder-alternative",
  competitor: "Interview Coder",
  navLabel: "Free Interview Coder alternative",
  cardText: "Interview Coder vs AI Interview Helper for coding interviews and LeetCode.",
  title: "Free Interview Coder Alternative | AI Interview Helper",
  description: "Free, open-source Interview Coder alternative: screenshot a LeetCode-style task and get working code. Voice mode, 7 AI providers, no subscription.",
  h1: `A free, open-source <span class="grad">Interview Coder alternative</span>`,
  lead: "Screenshot a coding task, get working code with an explanation. AI Interview Helper also listens to spoken questions, supports 7 AI providers and costs nothing.",
  updatedHuman: "October 2026",
  intro: `
<p><strong>Interview Coder</strong> is a paid desktop app focused on coding interviews. You capture the problem on screen and it generates a solution. Third-party reviews describe it as one of the more expensive tools in this category.</p>
<p>AI Interview Helper covers the same screenshot-to-solution workflow for free, and adds voice mode for the spoken parts of an interview: behavioral questions, system design and follow-ups.</p>`,
  tableTitle: "Interview Coder vs AI Interview Helper",
  table: [
    ["Price", "Free, no paid plan", "Reported at about $299/month or about $799 one-time; limited free access"],
    ["Source code", "Open source (MIT) on GitHub", "Commercial product"],
    ["Screenshot → code", "Yes, Ctrl+Shift+Space", "Yes, the core feature"],
    ["Spoken questions", "Yes, real-time Whisper transcription", "Focused on coding tasks"],
    ["AI model", "You choose: 7 providers or any local model", "Chosen by the vendor"],
    ["Works offline", "Yes, with Ollama", "No"],
    ["Refunds", "Nothing to refund, it's free", "Paid plans are reported as non-refundable"],
  ],
  tableNote: `Interview Coder pricing as reported by third-party reviews in October 2026 (for example <a href="https://prachub.com/resources/interview-coder-review-2026-pricing-detection-risks-and-ethical-alternatives">PracHub</a>). Prices change often, so check the official site for current plans.`,
  sections: `
<h2>Why people look for an Interview Coder alternative</h2>
<ul>
  <li><strong>Price.</strong> Hundreds of dollars is a lot for a tool you need for a few weeks of job hunting.</li>
  <li><strong>More than coding.</strong> Most interview loops also include behavioral and system design rounds, where voice mode helps.</li>
  <li><strong>Model choice.</strong> Strong coding models change fast. With your own key you can switch to the newest one the day it ships.</li>
</ul>
${OURS}
<h2>Tips for coding tasks</h2>
<ul>
  <li>For hard algorithm problems, pick a strong model such as Claude Opus or GPT-OSS 120B.</li>
  <li>For screenshots, the model must support images: Gemini Flash, Claude and GPT-4o all do.</li>
  <li>Ask follow-ups in the chat ("explain the complexity", "rewrite in Java") to understand the solution, not just copy it.</li>
</ul>
<h2>When Interview Coder might be the better choice</h2>
<p>If you want a product built only around coding problems, with the vendor managing models and support, a paid tool like Interview Coder may suit you better.</p>
${LIMITS}
${SWITCH}`,
  faq: [
    { q: "Is there a free alternative to Interview Coder?", a: "Yes. AI Interview Helper is free and open source. Press Ctrl+Shift+Space to send a coding task on your screen to a vision model and get working code with an explanation." },
    { q: "Does it work for LeetCode, HackerRank and CodeSignal tasks?", a: "Yes. It works with anything visible on your screen, including LeetCode, HackerRank, CodeSignal and shared editors." },
    { q: "Which programming languages does it support?", a: "Any language the AI model knows: Python, Java, C++, JavaScript, Go, SQL and more. Just ask for the language you need." },
    { q: "Can it help with behavioral and system design questions too?", a: "Yes. Voice mode transcribes spoken questions and suggests answers, using your resume for behavioral questions." },
  ],
  ctaH: "Try the free Interview Coder alternative",
  ctaP: "Download it, paste a free Gemini key, and solve your first task in about two minutes.",
},
{
  slug: "final-round-ai-alternative",
  competitor: "Final Round AI",
  navLabel: "Free Final Round AI alternative",
  cardText: "Final Round AI vs AI Interview Helper: what you get without a subscription.",
  title: "Free Final Round AI Alternative | AI Interview Helper",
  description: "Free, open-source Final Round AI alternative: a real-time AI interview copilot with voice and screen analysis. No subscription, no sign-up.",
  h1: `A free, open-source <span class="grad">Final Round AI alternative</span>`,
  lead: "Get a real-time AI interview copilot without a subscription. AI Interview Helper listens to questions, reads your screen and suggests answers, with any AI model you choose.",
  updatedHuman: "October 2026",
  intro: `
<p><strong>Final Round AI</strong> is a paid career platform. Next to its live interview copilot it offers mock interviews, resume tools and other job-search features. Third-party reviews report that live copilot sessions require a paid plan.</p>
<p>If what you need is the live copilot part, AI Interview Helper gives you that for free, as an open-source desktop app.</p>`,
  tableTitle: "Final Round AI vs AI Interview Helper",
  table: [
    ["Price", "Free, no paid plan", "Reported at about $150/month month-to-month, less on longer plans"],
    ["Free trial for live help", "Everything is free", "Reported: no free trial for live copilot sessions"],
    ["Source code", "Open source (MIT) on GitHub", "Closed source"],
    ["AI model", "You choose: 7 providers or any local model", "Chosen by the vendor"],
    ["Works offline", "Yes, with Ollama", "No"],
    ["Extra career tools", "No, it focuses on the live copilot", "Mock interviews, resume tools and more"],
  ],
  tableNote: `Final Round AI pricing as reported by third-party reviews in October 2026 (for example <a href="https://ophyai.com/blog/career-advice/final-round-ai-pricing">Ophy AI</a>). Prices change often, so check finalroundai.com for current plans.`,
  sections: `
<h2>Why people look for a Final Round AI alternative</h2>
<ul>
  <li><strong>Price.</strong> A monthly plan is expensive if you only need help for a few interviews.</li>
  <li><strong>Try before you trust.</strong> With a free app you can test it in mock interviews as much as you want.</li>
  <li><strong>Control.</strong> Your keys, your model, your data path. Nothing runs through a third-party service.</li>
</ul>
${OURS}
<h2>When Final Round AI might be the better choice</h2>
<p>If you want an all-in-one platform with mock interviews, resume building and job-search tools under one account, Final Round AI offers more than a single desktop app.</p>
${LIMITS}
${SWITCH}`,
  faq: [
    { q: "Is there a free alternative to Final Round AI?", a: "Yes. AI Interview Helper is a free, open-source AI interview copilot with real-time voice transcription and screen analysis, and no subscription." },
    { q: "Can I use it for mock interviews?", a: "Yes. Run a practice interview with a friend or a list of recorded questions, and the app shows how a strong answer could sound." },
    { q: "Do I need to create an account?", a: "No. Download the app, paste a free AI key, and it works. There is no account and no server." },
    { q: "Does it support languages other than English?", a: "Yes. It replies in the language of the question, including Spanish, Russian, German, French and many more." },
  ],
  ctaH: "Try the free Final Round AI alternative",
  ctaP: "No sign-up, no card. Download it and paste a free key.",
},
];

export const GUIDES = [
{
  slug: "free-ai-interview-assistant",
  ico: "🛠",
  navLabel: "Set up a free AI interview assistant",
  cardText: "Download, free Gemini key, audio setup and the best models, step by step.",
  title: "How to Get a Free AI Interview Assistant in 5 Minutes (2026)",
  description: "Set up a free AI interview assistant step by step: download, free Gemini API key, interview audio from Zoom or Meet, and the best AI model to pick.",
  h1: `How to get a free <span class="grad">AI interview assistant</span> in 5 minutes`,
  lead: "A step-by-step setup for AI Interview Helper: free download, free AI key, audio from Zoom or Google Meet, and which model to pick.",
  readTime: "6 min",
  published: "2026-10-19",
  updatedHuman: "October 2026",
  content: `
<p>Paid AI interview copilots charge a monthly subscription for something you can run yourself for free. This guide sets up <strong>AI Interview Helper</strong>, a free and open-source AI interview assistant, from zero to a working answer.</p>

<h2>What you need</h2>
<ul>
  <li>A Windows 10/11 computer (on macOS, run it from source with Node.js 18+).</li>
  <li>About 5 minutes.</li>
  <li>A Google account to get a free Gemini key.</li>
</ul>

<h2>Step 1. Download and install</h2>
<p>Download the <a href="${DL}">Windows installer</a>, or the portable .exe from the <a href="${REPO}/releases/latest">releases page</a> if you don't want to install anything.</p>
<div class="callout"><p><strong>"Windows protected your PC"?</strong> The app isn't code-signed yet, because certificates cost money and the project is free. Click <strong>More info → Run anyway</strong>. The full source code is on GitHub if you want to check it.</p></div>

<h2>Step 2. Get a free AI key</h2>
<ol>
  <li>Go to <a href="https://aistudio.google.com/apikey">aistudio.google.com/apikey</a> and sign in with your Google account.</li>
  <li>Click <strong>Create API key</strong>.</li>
  <li>Copy it. It starts with <code>AIza</code>.</li>
</ol>
<p>One Gemini key covers everything: chat answers, speech recognition and screenshots of coding tasks. The free tier is enough for practice.</p>
<div class="callout"><p><strong>Want even faster answers?</strong> Add a free <a href="https://console.groq.com">Groq</a> key as well. Groq is the fastest provider and uses Whisper for speech recognition, but its free models can't read screenshots, so keep Gemini for those. If Gemini isn't available in your country, Groq or Z.ai are good free options, and Ollama runs a model on your own computer without any key.</p></div>
<p>A note on privacy: on Google's free tier, your prompts may be used to improve Google's products. If that matters to you, use a paid key or a local model with Ollama.</p>

<h2>Step 3. Paste the key</h2>
<p>Open the app, click the settings icon (⚙) and paste the key into the <strong>Gemini</strong> field. A green dot means the key is set. Optionally, add the role you're interviewing for and paste your resume: answers then come in first person, based on your experience.</p>

<h2>Step 4. Let the app hear the interviewer</h2>
<p>Your microphone only hears you. To capture the other side of a Zoom, Google Meet or Teams call, add a system-audio source:</p>
<ul>
  <li><strong>Windows:</strong> enable <em>Stereo Mix</em> in the sound settings, or install <a href="https://vb-audio.com/Cable/">VB-Cable</a>.</li>
  <li><strong>macOS:</strong> install <a href="https://github.com/ExistentialAudio/BlackHole">BlackHole</a>.</li>
</ul>
<p>Then open the <strong>Audio</strong> tab, turn on <em>"Distinguish interviewer's voice from mine"</em> and set system audio as <em>Interviewer</em> and your microphone as <em>My mic</em>. The app will only answer the interviewer.</p>

<h2>Step 5. Try it</h2>
<div class="tbl-wrap"><table>
  <thead><tr><th>Shortcut</th><th>What it does</th></tr></thead>
  <tbody>
    <tr><td><code>Ctrl+Shift+L</code></td><td>Start or stop listening</td></tr>
    <tr><td><code>Ctrl+Shift+Space</code></td><td>Screenshot the screen and solve the task</td></tr>
    <tr><td><code>Ctrl+Shift+H</code></td><td>Hide or show the window</td></tr>
    <tr><td><code>Ctrl+Shift+C</code></td><td>Clear the chat</td></tr>
  </tbody>
</table></div>
<p>Play a recorded interview question, or ask a friend to read one, and watch the answer appear when the speaker stops talking.</p>

<h2>Which AI model to choose</h2>
<div class="tbl-wrap"><table>
  <thead><tr><th>Goal</th><th>Good choice</th></tr></thead>
  <tbody>
    <tr><td>Fastest answers</td><td>Groq · GPT-OSS 20B</td></tr>
    <tr><td>Hard coding and system design</td><td>Claude Opus, or Groq · GPT-OSS 120B</td></tr>
    <tr><td>Screenshots of tasks</td><td>Gemini Flash, Claude or GPT-4o (vision models)</td></tr>
    <tr><td>Free and generous limits</td><td>Gemini Flash-Lite, Z.ai GLM-4.5-Flash</td></tr>
    <tr><td>Fully offline</td><td>Ollama with a local model such as Llama or Qwen</td></tr>
  </tbody>
</table></div>
<p>Add keys for two or three providers. If one hits a rate limit, the app automatically moves to the next one.</p>

<h2>Troubleshooting</h2>
<ul>
  <li><strong>No answer after speaking:</strong> check the volume meter in the Audio tab and lower the silence threshold.</li>
  <li><strong>"All providers unavailable":</strong> check the API key, or add a second provider as a fallback.</li>
  <li><strong>Screenshot answers ignore the image:</strong> pick a vision-capable model.</li>
</ul>`,
  ctaH: "Ready to set it up?",
  ctaP: "It's free, open source and takes about five minutes.",
},
{
  slug: "practice-coding-interviews-with-ai",
  ico: "🧠",
  navLabel: "Practice coding interviews with AI",
  cardText: "A free routine to prepare for LeetCode-style and live coding interviews with an AI copilot.",
  title: "How to Practice Coding Interviews with AI for Free (2026 Guide)",
  description: "A free routine for practicing coding interviews with AI: solve first, compare with an AI solution, drill follow-ups and rehearse answers out loud.",
  h1: `How to practice <span class="grad">coding interviews with AI</span> for free`,
  lead: "AI makes a great sparring partner if you use it the right way. Here is a simple routine that builds real skill instead of dependence.",
  readTime: "7 min",
  published: "2026-10-19",
  updatedHuman: "October 2026",
  content: `
<p>The fastest way to get better at coding interviews is deliberate practice with quick feedback. An AI copilot gives you that feedback in seconds, for free. The trick is to use it as a coach, not as a crutch.</p>

<h2>The routine: 45 minutes a day</h2>
<ol>
  <li><strong>Solve it yourself first (20 min).</strong> Pick one problem on LeetCode or HackerRank. Talk through your approach out loud, as you would with an interviewer.</li>
  <li><strong>Compare with the AI (5 min).</strong> Press <code>Ctrl+Shift+Space</code> in <a href="${SITE}">AI Interview Helper</a> to get a reference solution. Compare the approach, complexity and edge cases with yours.</li>
  <li><strong>Drill the follow-ups (10 min).</strong> Interviewers rarely stop at the first solution. Ask the AI: <em>"What follow-up questions would an interviewer ask here?"</em> Answer them out loud before reading its version.</li>
  <li><strong>Explain it back (5 min).</strong> Explain the final solution in your own words. If you can't, you don't own it yet.</li>
  <li><strong>Log it (5 min).</strong> Write down the pattern (two pointers, sliding window, BFS…) and the mistake you made. Review the log weekly.</li>
</ol>

<h2>Practice the spoken part too</h2>
<p>Most interview loops include behavioral and system design rounds, where how you speak matters as much as what you know.</p>
<ul>
  <li>Paste your resume into the app settings so answers use your real projects.</li>
  <li>Turn on listening (<code>Ctrl+Shift+L</code>), play a recorded question such as <em>"Tell me about a time you disagreed with your manager"</em>, and compare the suggested STAR answer with yours.</li>
  <li>For system design, ask for a structure (requirements → API → data model → scaling) and practice filling it in yourself.</li>
</ul>

<h2>Useful prompts</h2>
<ul>
  <li><em>"Give me a hint, not the solution."</em> Great when you're stuck but still want to solve it yourself.</li>
  <li><em>"Review my solution for bugs and edge cases."</em> Paste your code into the chat.</li>
  <li><em>"Explain the time and space complexity step by step."</em></li>
  <li><em>"Rewrite this in Java / Go / C++."</em> Useful when the interview language differs from your daily one.</li>
</ul>

<h2>Which model to use for practice</h2>
<p>For algorithm problems, a strong reasoning model gives the best explanations: Claude Opus or GPT-OSS 120B on Groq. For quick drills, Groq's GPT-OSS 20B answers almost instantly. For screenshots, use a vision model such as Gemini Flash. The <a href="${SITE}free-ai-interview-assistant/">setup guide</a> has a full comparison.</p>

<h2>Common mistakes</h2>
<ul>
  <li><strong>Reading the answer first.</strong> You learn recognition, not recall. Always attempt the problem first.</li>
  <li><strong>Practicing silently.</strong> Real interviews are spoken. Narrate your thinking every time.</li>
  <li><strong>Grinding random problems.</strong> Group practice by pattern, and move on once a pattern feels easy.</li>
</ul>

<div class="callout"><p><strong>A note on fairness.</strong> Using AI to practice is a great way to prepare. Using it during a real interview may break the company's or platform's rules, so check them first. That decision and its consequences are yours.</p></div>`,
  ctaH: "Start practicing for free",
  ctaP: "AI Interview Helper is free and open source. Set it up once and use it for every practice session.",
},
];
