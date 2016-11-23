const app = require('app')
const BrowserWindow = require('browser-window')

let mainWindow = null

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
  })

  mainWindow.loadUrl(`file://${__dirname}/public/index.html`)
})
