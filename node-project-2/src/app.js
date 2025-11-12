import express from "express"

const app = express()

app.use(express.json())

const livros = [
{
    isbn:1,
    titulo_livro:"Java - Como Programar",
    editora:"Saber",
    ano_publicacao:"2002"
},
{
    isbn:2,
    titulo_livro:"Java - Como Programar de Verdade",
    editora:"Saber",
    ano_publicacao:"2008"
}
];

function buscarLivro(isbn){
    return livros.findIndex(livro => {
        return livro.isbn === Number(isbn)
    })
}

app.get("/", (req, res) => {
    res.status(200).send("Livraria Saber e Cia")
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros)
});

app.get("/livros/:isbn", (req,res) => {
    const index = buscarLivro(req.params.isbn)
    res.status(200).json(livros[index])
});



export default app