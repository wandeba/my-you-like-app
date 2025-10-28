const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: { nodeIntegration: false }
  });
  win.loadURL('https://openart.ai/video/i2v/wan-i2v-2.2');
}

app.whenReady().then(createWindow);
