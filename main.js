const { app, BrowserWindow } = require('electron')

function createWindow () {
    // 创建一个新的浏览器窗口
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false // 禁止在渲染进程中集成Node.js
        }
    })

    // 加载外部网页链接
    win.loadURL('https://web3wiki.site/')
}

app.whenReady().then(createWindow)
