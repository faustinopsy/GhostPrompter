const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 600, 
    height: 400,
    x: 50, 
    y: 50,
    transparent: true,
    alwaysOnTop: true,
    frame: false, 
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.setContentProtection(true);

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});