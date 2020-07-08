const {app, BrowserWindow} = require('electron')

function createWindow() {
  let window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferencees: {
      nodeIntegration: true
    }
  })

  //and load the index.html of the app
  window.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
