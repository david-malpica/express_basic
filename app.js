// Agregar Express al proyecto
const express = require('express')
// App de Express
const app = express()
// Puerto para visualizar la app (localhost:3000)
const port = 3000

// path o ruta inicial, respondera a la url localhost
app.get('/',(req, res) => {
    res.send("Hello World!")
})

// Inicializar la app
app.listen(port, () => {
    console.log(`Example app, listen on port ${port}`)
})

// Agregar nueva ruta
// localhost:3000/launchx
app.get('/launchx',(req, res) => {
    res.send('Bienvenidos a LaunchX')
})

// Agregar ruta con un objeto
// localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = {name:"Explorer", msg:"Hello from NodeJS"}
    res.send(explorer)
})

// Nueva ruta que acepte parametros
// localhost:3000/explorers/{explorer.name}
// req.params = {explorerName:"david"}
app.get('/explorers/:explorerName',(req,res) => {
    req.params = {explorerName:"david"}
    res.send(req.params)
})