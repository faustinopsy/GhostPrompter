const { app, BrowserWindow, globalShortcut } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 600,
    height: 450, 
    x: 50,
    y: 50,
    alwaysOnTop: true,
    transparent: true, 
    frame: false, 
    focusable: false, 
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });


  win.setIgnoreMouseEvents(true);

  win.setContentProtection(true);

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

 
  globalShortcut.register('Alt+Right', () => {
    win.webContents.send('command', 'next');
  });

  globalShortcut.register('Alt+Left', () => {
    win.webContents.send('command', 'prev');
  });
  
  globalShortcut.register('Alt+Q', () => {
    app.quit();
  });
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});