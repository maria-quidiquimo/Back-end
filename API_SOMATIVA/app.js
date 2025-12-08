import express from "express"

const app = express()

app.use(express.json())

const musica = [
    {
        id: 1,
        titulo: "Defeito Meu",
        artista: "Belo",
        genero: "Pagode",
        ano_lancamento: 2008
    }
]

function buscarMusica(id){
    return musica.findIndex(musica => {
        return musica.id === Number(id)
    })
}

// no return deveria ser m.id === Number(id)

app.get("/", (req, res) => {
    res.status(200).send("CRUD de Músicas")
})

app.get("/musica", (req, res) => {
    res.status(200).json(musica)
})

app.get("/musica/:id", (req,res) => {
    const index = buscarMusica(req.params.id)
    res.status(200).json(musica[index])
})

app.post("/musica", (req,res) => {
    musica.push(req.body)
    res.status(201).json(musica)
})

app.put("/musica/:id", (req,res) => {
    const index = buscarMusica(req.params.id)

    musica[index].titulo = req.body.titulo
    musica[index].artista = req.body.artista
    musica[index].genero = req.body.genero
    musica[index].ano_lancamento = req.body.ano_lancamento

    res.status(200).json(musica[index])
})

app.delete("/musica/:id", (req,res) => {
    const index = buscarMusica(req.params.id)
    musica.splice(index, 1)
    res.status(200).json(musica)
})

export default app