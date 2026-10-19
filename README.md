<div align="center">

<img src="assets/banner.svg" alt="AI Interview Helper — free, open-source AI interview assistant" width="100%"/>

# AI Interview Helper

### Free & open-source AI interview copilot: real-time answers for coding and job interviews

**No subscription. No sign-up. No paywall.** A free alternative to paid interview copilots like Cluely, Interview Coder, Final Round AI and LockedIn AI.

[![License: MIT](https://img.shields.io/badge/license-MIT-00e5a0)](LICENSE)
![Price](https://img.shields.io/badge/price-%240%20forever-00e5a0)
![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS-lightgrey)
![Electron](https://img.shields.io/badge/Electron-28-47848F?logo=electron&logoColor=white)
![AI providers](https://img.shields.io/badge/AI%20providers-7-00d4ff)
[![GitHub stars](https://img.shields.io/github/stars/pyk-boo/ai-interview-helper?style=flat&color=ffd166)](https://github.com/pyk-boo/ai-interview-helper/stargazers)

<a href="https://github.com/pyk-boo/ai-interview-helper/releases/latest/download/AI-Interview-Helper-Setup.exe"><img src="https://img.shields.io/badge/⬇_Download_for_Windows-free-00d4ff?style=for-the-badge" alt="Download for Windows"/></a>
<a href="https://pyk-boo.github.io/ai-interview-helper/"><img src="https://img.shields.io/badge/🌐_Website-visit-7c6af7?style=for-the-badge" alt="Website"/></a>

[**Quick start**](#-quick-start) · [**Features**](#-features) · [**Why free?**](#-free-vs-paid-interview-copilots) · [**FAQ**](#-faq) · [**☕ Support**](#-support-the-project)

</div>

---

**AI Interview Helper** is a free, open-source AI interview copilot (an AI assistant on the candidate's side, not an AI interviewer) for technical and job interviews. It listens to the interviewer's question, transcribes it with Whisper, and shows a ready answer in seconds. Press one hotkey and it reads your screen to solve a coding task (LeetCode, HackerRank, live coding), a system design diagram or a quiz. It works with **Groq, Claude, Gemini, ChatGPT, DeepSeek, GLM** or a **local Ollama model**, so you choose the AI and you never pay a subscription.

## 💸 Free vs paid interview copilots

| | **AI Interview Helper** | Typical paid interview copilots |
|---|:-:|:-:|
| Price | ✅ **$0, forever** | 💳 Monthly subscription |
| Account / sign-up | ✅ Not needed | Required |
| Source code | ✅ Open (MIT) | Usually closed |
| Choice of AI model | ✅ 7 providers + any local model | Fixed by the vendor |
| Works offline | ✅ With Ollama | ❌ |
| Where your data goes | ✅ Straight to the AI provider you pick | Through the vendor's servers |

> **How is it free?** The app itself costs nothing. For the AI part you either use a free-tier API key (Gemini, Groq and Z.ai all have one) or run a model locally with Ollama. No middleman, no markup.

Detailed comparisons: [Free Cluely alternative](https://pyk-boo.github.io/ai-interview-helper/cluely-alternative/) · [Free Interview Coder alternative](https://pyk-boo.github.io/ai-interview-helper/interview-coder-alternative/) · [Free Final Round AI alternative](https://pyk-boo.github.io/ai-interview-helper/final-round-ai-alternative/)

## ✨ Features

| | |
|---|---|
| 🎙 **Voice → answer** | Real-time speech-to-text (Whisper via Groq / OpenAI, or Gemini). Answers automatically when the interviewer stops talking |
| 🖼 **Screenshot → solution** | One hotkey sends your screen to a vision model: coding problems, SQL, diagrams, multiple-choice tests |
| 🗣 **Speaker separation** | Tells the interviewer (system audio) apart from your mic and only answers the interviewer |
| 🔀 **7 AI providers** | Groq, Anthropic Claude, Google Gemini, OpenAI GPT, DeepSeek, Z.ai GLM, local Ollama, with automatic fallback when one hits a rate limit |
| 👤 **Personalized answers** | Paste your resume and target role. Answers come in first person, based on your real experience |
| 🌐 **Multilingual** | Replies in the language of the question: English, Spanish, Russian and many more |
| 🪟 **Always-on-top overlay** | Transparent side panel, compact mode, hide/show with one hotkey |
| 🔒 **Private by design** | API keys stay on your machine. No telemetry, no analytics, no backend |

## 🚀 Quick start

### Option 1: download (Windows)

| | |
|---|---|
| 📦 **[Installer](https://github.com/pyk-boo/ai-interview-helper/releases/latest/download/AI-Interview-Helper-Setup.exe)** | Standard setup with a Start menu shortcut |
| 🎒 **[Portable](https://github.com/pyk-boo/ai-interview-helper/releases/latest/download/AI-Interview-Helper-Portable.exe)** | Single .exe, no installation needed |

> Windows may show *"Windows protected your PC"* because the app isn't code-signed yet (certificates cost money, and this project is free). Click **More info → Run anyway**. The full source is right here, so you can check it or build it yourself.

### Option 2: run from source (Windows / macOS)

> Requires [Node.js](https://nodejs.org/) 18+.

```bash
git clone https://github.com/pyk-boo/ai-interview-helper.git
cd ai-interview-helper
npm install
npm start
```

On Windows you can simply double-click **`start.bat`**. It installs everything on the first run.

**Get a free API key in 1 minute:** sign in at [aistudio.google.com](https://aistudio.google.com/apikey) with your Google account, create a Gemini key and paste it into the app settings (⚙). One Gemini key covers chat, speech recognition and screenshots. For even faster answers, add a free [Groq](https://console.groq.com) key too. Full walkthrough: [How to get a free AI interview assistant in 5 minutes](https://pyk-boo.github.io/ai-interview-helper/free-ai-interview-assistant/).

## ⌨️ Hotkeys

| Shortcut | Action |
|---|---|
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Space</kbd> | Screenshot + analyze |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> | Start / stop listening |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>H</kbd> | Hide / show the window |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> | Clear chat |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Q</kbd> | Quit instantly |

On macOS use <kbd>⌘ Cmd</kbd> instead of <kbd>Ctrl</kbd>.

## 🧠 Supported AI models

| Provider | Models | Vision | Speech-to-text | Free tier |
|---|---|:-:|:-:|:-:|
| **Groq** | GPT-OSS 20B / 120B, Qwen3.6 27B | ✅* | ✅ Whisper | ✅ |
| **Anthropic** | Claude Sonnet / Haiku / Opus | ✅ | — | — |
| **Google Gemini** ⭐ | Flash, 2.5 Flash, Flash-Lite | ✅ | ✅ | ✅ |
| **OpenAI** | GPT-4o, GPT-4o mini | ✅ | ✅ Whisper | — |
| **DeepSeek** | Chat, Reasoner | — | — | — |
| **Z.ai** | GLM-4.5 Flash / Air, GLM-4.5, GLM-4.6 | ✅* | — | ✅ |
| **Ollama** | any local model (Llama, Qwen, Mistral…) | ✅* | — | ✅ offline |

<sub>* depends on the selected model</sub>

## 🎧 Capturing the interviewer's audio (Zoom, Google Meet, Teams)

To let the app hear the other side of the call, add a system-audio source:

- **Windows**: enable *Stereo Mix* or install [VB-Cable](https://vb-audio.com/Cable/)
- **macOS**: install [BlackHole](https://github.com/ExistentialAudio/BlackHole)

In the **Audio** tab, enable *"Distinguish interviewer's voice from mine"* and set system audio → *Interviewer*, microphone → *My mic*. The silence threshold (1.2 / 1.8 / 2.5 s) controls how fast the answer starts.

## ❓ FAQ

<details>
<summary><b>Is AI Interview Helper really free?</b></summary>

Yes. The app is open source under the MIT license, and there is no paid plan. You only need an AI key, and Gemini, Groq and Z.ai offer free tiers. With Ollama it runs fully offline at zero cost.
</details>

<details>
<summary><b>Is this a free alternative to Cluely or Interview Coder?</b></summary>

Yes. It covers the same core workflow (listen to the question, read the screen, suggest an answer) without a subscription and with any AI model you want.
</details>

<details>
<summary><b>Which AI model gives the best interview answers?</b></summary>

For speed, use Groq (GPT-OSS 20B). For the hardest coding and system design questions, use Claude Opus or GPT-OSS 120B. For screenshots, pick a vision-capable model such as Gemini Flash or Claude.
</details>

<details>
<summary><b>Does it work for coding interviews (LeetCode, HackerRank, CodeSignal)?</b></summary>

Yes. Press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Space</kbd> and the task on your screen is sent to a vision model, which returns working code with a short explanation.
</details>

<details>
<summary><b>Where are my API keys stored?</b></summary>

Only on your computer, in the app's local storage. Requests go directly from your machine to the provider. There is no server in between.
</details>

<details>
<summary><b>Does it support languages other than English?</b></summary>

Yes. Whisper transcribes many languages, and the assistant replies in the language of the question.
</details>

## 📦 Build a standalone app

```bash
npm run build-win   # Windows (.exe)
npm run build-mac   # macOS (.dmg)
```

Output goes to `dist/`.

## 🗂 Project structure

```
├── main.js       # Electron main process: window, hotkeys, screen capture
├── preload.js    # secure IPC bridge between main and the UI
├── index.html    # UI and logic: chat, audio, AI provider calls
├── start.bat     # one-click launch (Windows)
├── start.vbs     # launch without a console window
├── stop.vbs      # stop the app
├── build/        # app icon for electron-builder
├── assets/       # README banner and social preview
├── site/         # website generator: run `node site/build.mjs`
└── docs/         # built website (GitHub Pages)
```

## 🤝 Contributing

Issues and pull requests are welcome: new AI providers, UI ideas, bug fixes, translations.

## ⚠️ Disclaimer

This project is intended for learning and interview preparation (mock interviews, practicing answers). Using it during real interviews may violate the rules of the company or platform. That responsibility lies with the user.

Cluely, Interview Coder, Final Round AI and LockedIn AI are trademarks of their respective owners. This project is not affiliated with, endorsed by or sponsored by any of them.

## 📄 License

Distributed under the [MIT License](LICENSE).

## ☕ Support the project

AI Interview Helper is free. No subscriptions, no paywalls, no "upgrade to Pro to see the answer".

But let's be honest: I'm saving up for a **Porsche 911**. 🏎️

```
Porsche 911 fund  [▱▱▱▱▱▱▱▱▱▱]  0.0001%
                  current status: can afford the keychain
```

If this app helped you pass an interview or land an offer, toss a few coins into the tank.
Every donation gets me one bolt closer, and you'll be officially part of the build. 🔧

| Coin | Network | Address |
|---|---|---|
| ₿ **BTC** | Bitcoin | `bc1qdy7qumc4a0jqzv6tru76vvexc8z78gw4u9kua9` |
| 💵 **USDT** | TRC-20 (Tron) | `TCxhhwjNKkgsmkVEjthqk5MxY4R8JwPcso` |
| ⟠ **ETH** | Ethereum (ERC-20) | `0x8BE40eD0978eb41c3272d3a97147E9e141F9ce9E` |

> ⚠️ Double-check the network before sending. Coins sent on the wrong network don't buy anyone a Porsche.

**No crypto? No problem.** A ⭐ on GitHub also counts as fuel. So do bug reports, pull requests and telling a friend who's job hunting. Thank you! 🙏

<div align="center">

**If AI Interview Helper saved you a subscription, give it a ⭐. It helps other people find it.**

<sub>Made with ☕ by <a href="https://github.com/pyk-boo">pyk-boo</a></sub>

</div>
