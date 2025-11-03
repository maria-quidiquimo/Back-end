import express from 'express'

const app = express()

const products = []

app.use(express.json())

app.get('/produtos', (req, res) => {
    res.json(products)
})

app.post('/produtos', (req, res) => {
    products.push(req.body)
    res.json(req.body)
})

app.listen(3000, () => console.log('Servidor Funcionando!'))