import {BrowserWindow, app} from "electron"

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768
  })

  win.loadURL(process.env.DEV_SERVER_URL)
}

app.whenReady().then(createWindow)
