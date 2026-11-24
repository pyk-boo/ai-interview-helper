const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  onScreenshotReady: (cb) => ipcRenderer.on("screenshot-ready", (_, b64) => cb(b64)),
  onStartCapture:    (cb) => ipcRenderer.on("start-capture",    ()       => cb()),
  onToggleListen:    (cb) => ipcRenderer.on("toggle-listen",    ()       => cb()),
  onError:           (cb) => ipcRenderer.on("error",            (_, msg) => cb(msg)),
  onClear:           (cb) => ipcRenderer.on("clear",            ()       => cb()),
  onFocusInput:      (cb) => ipcRenderer.on("focus-input",      ()       => cb()),
  setWindowMode:     (mode) => ipcRenderer.send("set-window-mode", mode),
});
