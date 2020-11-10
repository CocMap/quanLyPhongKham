import {app, BrowserWindow} from 'electron'

const createWindow = () => {
    let window = new BrowserWindow({
        width: 500,
        height: 300,
        webPreferences: {
            nodeIntegration: true
        }
    })

    window.loadFile("index.html")
}


app.on("ready", createWindow)