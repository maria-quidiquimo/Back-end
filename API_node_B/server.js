import express from 'express'

const app = express()
 
const users = []

app.get('/usuarios', (req, res) => {
    
})

app.listen(3000, () => console.log('Servidor Rodando!!'))