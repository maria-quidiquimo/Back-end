import express from 'express'

const app = express()
 
const users = []

app.get('/usuarios', (req, res) => {
    res.json(users)
})

app.listen(3000, () => console.log('Servidor Rodando!!'))