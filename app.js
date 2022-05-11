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