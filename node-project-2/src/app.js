import express from "express"

const app = express()

app.use(express.json())

const livros = [
{
    isbn:"999-98765-432",
    titulo_livro:"Java - Como Programar",
    editora:"Saber",
    ano_publicacao:"2002"
},
{
    isbn:"987-54321-321",
    titulo_livro:"Java - Como Programar de Verdade",
    editora:"Saber",
    ano_publicacao:"2008"
}
];

export default app