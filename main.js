const {
  app,
  BrowserWindow,
  globalShortcut,
  desktopCapturer,
  ipcMain,
  screen,
  session,
  systemPreferences,
} = require("electron");
const path = require("path");

// Honest app identity (NOT a disguise of a Windows system process).
// Affects the in-app name and, in a packaged build, the Windows taskbar grouping.
// The packaged .exe name comes from build.productName / build.executableName in package.json.
const APP_NAME = "DOM Host";
app.setName(APP_NAME);

let win;
let isVisible = true;
let defaultBounds = null;
let customPos = null;   // set once the user moves the window with Ctrl+Alt+Arrows
const MOVE_STEP = 60;   // px per key press

// Safe send — never throw if the window/webContents was already destroyed.
function send(channel, ...args) {
  if (win && !win.isDestroyed() && win.webContents && !win.webContents.isDestroyed()) {
    win.webContents.send(channel, ...args);
  }
}

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  defaultBounds = { x: width - 488, y: 0, width: 480, height };

  win = new BrowserWindow({
    width: 480,
    height: height,
    x: width - 488,
    y: 0,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    skipTaskbar: true,
    hasShadow: false,
    resizable: true,
    minWidth: 260,
    minHeight: 260,
    focusable: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      // CRITICAL: without this, Chromium pauses rAF/timers when the window is
      // hidden (Ctrl+Shift+H) — which would freeze voice silence-detection in
      // exactly the hidden state the app is meant to run in.
      backgroundThrottling: false,
    },
  });

  win.loadFile("index.html");

  // INVISIBLE to screen sharing (Zoom, Meet, Teams, OBS)
  win.setContentProtection(true);
  win.setAlwaysOnTop(true, "screen-saver", 1);
  win.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });

  win.on("closed", () => { win = null; });
}

// Compact "session" mode: small semi-transparent square. Full mode: tall side panel.
function setWindowMode(mode) {
  if (!win || win.isDestroyed()) return;
  const area = screen.getPrimaryDisplay().workAreaSize;
  let b;
  if (mode === "compact") {
    const size = 380;
    win.setMinimumSize(260, 260);
    b = { x: area.width - size - 16, y: 16, width: size, height: size };
    win.setOpacity(0.88);
  } else {
    win.setMinimumSize(320, 400);
    b = { ...(defaultBounds || { x: area.width - 488, y: 0, width: 480, height: area.height }) };
    win.setOpacity(1);
  }
  // Keep the spot the user moved the window to instead of jumping back to the corner.
  if (customPos) b = clampToWorkArea({ ...b, x: customPos.x, y: customPos.y });
  win.setBounds(b, true);
}

// Keep a rectangle fully inside the work area of the display it lands on
// (works across several monitors: the nearest display to its center wins).
function clampToWorkArea(b) {
  const center = { x: Math.round(b.x + b.width / 2), y: Math.round(b.y + b.height / 2) };
  const wa = screen.getDisplayNearestPoint(center).workArea;
  const width = Math.min(b.width, wa.width);
  const height = Math.min(b.height, wa.height);
  const x = Math.min(Math.max(b.x, wa.x), wa.x + wa.width - width);
  const y = Math.min(Math.max(b.y, wa.y), wa.y + wa.height - height);
  return { x, y, width, height };
}

// Ctrl+Alt+Arrows: nudge the window around the screen without touching the mouse.
function moveWindow(dx, dy) {
  if (!win || win.isDestroyed()) return;
  const cur = win.getBounds();
  const b = clampToWorkArea({ ...cur, x: cur.x + dx, y: cur.y + dy });
  win.setBounds(b);
  customPos = { x: b.x, y: b.y };
}

// Ctrl+Shift+Enter: bring the window up and put the cursor in the chat box.
function focusChatInput() {
  if (!win || win.isDestroyed()) return;
  if (!isVisible || !win.isVisible()) {
    win.show();
    isVisible = true;
  }
  win.focus();
  win.webContents.focus();
  send("focus-input");
}

async function captureScreen() {
  if (!win || win.isDestroyed()) return;
  try {
    const sources = await desktopCapturer.getSources({
      types: ["screen"],
      thumbnailSize: { width: 1920, height: 1080 },
    });
    if (!sources || sources.length === 0) {
      send("error", "No screen sources found");
      return;
    }
    const base64 = sources[0].thumbnail.toDataURL().split(",")[1];
    send("screenshot-ready", base64);
  } catch (err) {
    send("error", err.message);
  }
}

function toggleVisibility() {
  if (!win || win.isDestroyed()) return;
  if (isVisible) {
    win.hide();
    isVisible = false;
  } else {
    win.show();
    win.focus();
    isVisible = true;
  }
}

// Register a global shortcut and warn (instead of failing silently) if the OS refuses it.
function reg(accel, fn) {
  try {
    const ok = globalShortcut.register(accel, fn);
    if (!ok) console.warn(`[DOM Host] Hotkey not registered (already in use?): ${accel}`);
  } catch (e) {
    console.warn(`[DOM Host] Hotkey error for ${accel}: ${e.message}`);
  }
}

app.whenReady().then(async () => {
  app.setAppUserModelId("com.ghost.interview");

  // macOS: proactively request the OS-level microphone permission (TCC) so voice
  // works in a packaged build, not just the in-app permission grant below.
  if (process.platform === "darwin") {
    try { await systemPreferences.askForMediaAccess("microphone"); } catch (e) {}
  }

  // Grant microphone permission for audio capture
  session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => {
    if (permission === "media" || permission === "microphone" || permission === "audioCapture") {
      callback(true);
    } else {
      callback(false);
    }
  });

  createWindow();

  // Renderer -> main: resize/reshape the window (compact session square / full panel)
  ipcMain.on("set-window-mode", (_e, mode) => setWindowMode(mode));

  // Ctrl+Shift+Space — screenshot + analyze
  reg("CommandOrControl+Shift+Space", () => {
    if (win && !win.isDestroyed()) {
      send("start-capture");
      captureScreen();
    }
  });

  // Ctrl+Shift+L — toggle listen mode
  reg("CommandOrControl+Shift+L", () => send("toggle-listen"));

  // Ctrl+Shift+H — hide/show
  reg("CommandOrControl+Shift+H", () => toggleVisibility());

  // Ctrl+Shift+C — clear chat
  reg("CommandOrControl+Shift+C", () => send("clear"));

  // Ctrl+Shift+Enter — jump straight into the chat box and start typing
  reg("CommandOrControl+Shift+Enter", () => focusChatInput());

  // Ctrl+Alt+Arrows — move the window around the screen
  reg("CommandOrControl+Alt+Left",  () => moveWindow(-MOVE_STEP, 0));
  reg("CommandOrControl+Alt+Right", () => moveWindow(MOVE_STEP, 0));
  reg("CommandOrControl+Alt+Up",    () => moveWindow(0, -MOVE_STEP));
  reg("CommandOrControl+Alt+Down",  () => moveWindow(0, MOVE_STEP));

  // Ctrl+Shift+Q — panic kill switch: close everything instantly, no confirmation
  reg("CommandOrControl+Shift+Q", () => app.exit(0));

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("will-quit", () => globalShortcut.unregisterAll());
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
