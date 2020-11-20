import { app, BrowserWindow } from 'electron'

const createWindow = () => {
    let window = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    })

    window.loadFile("browser/BS3/danhSachCaKhamTrongNgay.html")
}

app.on("ready", createWindow)
