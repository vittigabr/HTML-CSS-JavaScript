const express = require('express')
const cors = require('cors')
require('dotenv').config()

const usuariosRoutes = require('./routes/usuarios')

const app = express()

app.use(cors())
app.use(express.json())

// Rotas
app.use('/usuarios', usuariosRoutes)

app.get('/', (req, res) => {
    res.send('testando rota')
})

const PORT = process.env.PORT || 3306

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})