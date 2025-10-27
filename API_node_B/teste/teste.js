import express from 'express'

const app = express()

const products = []

app.use(express.json())

app.get('/produtos', (req, res) => {
    res.json(products)
})

app.post('/produtos', (res, req) => {
    products.push(req.body)
    req.json(res.body)
})

app.listen(9000, () => console.log('Servidor Funcionando!'))