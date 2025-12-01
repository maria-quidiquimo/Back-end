import express from "express"

const app = express()

app.use(express.json())

const livros = [
    {
        isbn:1,
        titulo_livro:"Java - Como programar",
        editora:"Saber",
        ano_publicacao:"2002"
    },
    {
        isbn:2,
        titulo_livro:"Java - Como programar de verdade",
        editora:"Saber",
        ano_publicacao:"2008"
    }
]

function buscarLivro(isbn){
    return livros.findIndex(livro => {
        return livro.isbn === Number(isbn)
    })
}

app.get("/", (req,res) => {
    res.status(200).send("Livraria Saber e Cia")
})

app.get("/livros", (req,res) => {
    res.status(200).json(livros)
})

app.get("/livros/:isbn", (req,res) =>{
    const index = buscarLivro(req.params.isbn)
    res.status(200).json(livros[index])
})

app.post("/livros", (req,res) => {
    livros.push(req.body)
    res.status(201).json(req.body)
})

app.put("/livros/:isbn", (req,res) =>{
    const index = buscarLivro(req.params.isbn)

    livros[index].titulo_livro = req.body.titulo_livro
    livros[index].editora = req.body.editora
    livros[index].ano_publicacao = req.body.ano_publicacao

    res.status(200).json(livros[index])
})

app.delete("/livros/:isbn", (req,res) =>{
    const index = buscarLivro(req.params.isbn)
    livros.splice(index, 1)
    res.status(200).json(livros)
})

const autores = [
    {
        id_autor: 1,
        nome_autor:"Machado de Assis",
        nacionalidade:"Brasileiro"
    },
    {
        id_autor: 2,
        nome_autor:"Clarisse Lispector",
        nacionalidade:"Brasileira"
    }
]

function buscarAutor(id_autor){
    return autores.findIndex(autores => {
        return autores.id_autor === Number(id_autor)
    })
}

app.get('/autores', (req, res) => {
    res.json(autores);
}); 

app.get("/autores/:id_autor", (req,res) => {
    res.status(200).json(autores[buscarAutor(req.params.id_autor)])
})

app.post("/autores", (req,res) => { 
    autores.push(req.body); 
    res.status(201).json(req.body)
})
app.put("/autores/:id_autor", (req,res) =>{

    const index = buscarAutor(req.params.id_autor)

    autores[index].nome_autor = req.body.nome_autor
    autores[index].nacionalidade = req.body.nacionalidade

    res.json(autores[index])
})
app.delete("/autores/:id", (req,res)=>{
    const index = buscarAutor(req.params.id_autor)
    autores.splice(index, 1)
    res.json(autores)
})

const autorLivro = [
    {
        id: 1,
        id_autor: 1,
        isbn: 1
    },
    {
        id: 2,
        id_autor: 2,
        isbn: 2
    }
]

app.get('/autorlivro', (req, res) => {
    res.json(autorLivro);
}); 

function vizualizarAutorLivro(id){
    return autorLivro.findIndex(autorLivro => {
        return autorLivro.id === Number(id)
    })
}

app.get("/autorlivro", (req,res) => {
    res.status(200).json(autorLivro[vizualizarAutorLivro(req.params.id)])
})

app.post("/autorlivro", (req,res) => { 
    autorLivro.push(req.body); 
    res.status(201).json(req.body)
})
app.put("/autorlivro/:id", (req,res) =>{
    const index = vizualizarAutorLivro(req.params.id)
    autorLivro[index].id_autor = req.body.id_autor
    autores[index].isbn = req.body.isbn
    res.json(autorLivro[index])
})
app.delete("/autorlivro/:id", (req,res)=>{
    const index = vizualizarAutorLivro(req.params.id)
    autorLivro.splice(index, 1)
    res.json(autorLivro)
})

const exemplar = [
    {
        id_exemplar: 1,
        status_exemplar: "disponível",
        isbn: 2
    },
    {
        id_exemplar: 2,
        status_exemplar: "emprestado",
        isbn: 1
    }
]

app.get('/exemplar', (req, res) => {
    res.json(exemplar);
}); 

function buscarExemplar(id_exemplar){
    return exemplar.findIndex(exemplar => {
        return exemplar.id === Number(id_exemplar)
    })
}

app.get("/exemplar", (req,res) => {
    res.status(200).json(exemplar[buscarExemplar(req.params.id_exemplar)])
})

app.post("/exemplar", (req,res) => { 
    exemplar.push(req.body); 
    res.status(201).json(req.body)
})
app.put("/exemplar/:id_exemplar", (req,res) =>{
    const index = buscarExemplar(req.params.id_exemplar)
    exemplar[index].status_exemplar = req.body.status_exemplar    
    exemplar[index].isbn = req.body.isbn
    res.json(exemplar[index])
})
app.delete("/exemplar/:id_exemplar", (req,res)=>{
    const index = buscarExemplar(req.params.id_exemplar)
    exemplar.splice(index, 1)
    res.json(exemplar)
})

const membros = [
    {
        id_membro: 1,
        nome_membro: "Maria",
        endereco: "Rua Aurora das Dores",
        telefone: "11996620113"
    },
    {
        id_membro: 2,
        nome_membro: "Daniel",
        endereco: "Rua Russia",
        telefone: "11962928877"
    }
]

app.get('/membros', (req, res) => {
    res.json(membros);
}); 

function buscarMembros(id_membro){
    return membros.findIndex(membros => {
        return membros.id === Number(id_membro)
    })
}

app.get("/membros", (req,res) => {
    res.status(200).json(membros[buscarMembros(req.params.id_membro)])
})

app.post("/membros", (req,res) => { 
    membros.push(req.body); 
    res.status(201).json(req.body)
})
app.put("/membros/:id_membro", (req,res) =>{
    const index = buscarMembros(req.params.id_membro)
    membros[index].nome_membro = req.body.nome_membro
    membros[index].endereco = req.body.endereco
    membros[index].telefone = req.body.telefone
    res.json(membros[index])
})
app.delete("/membros/:id_membro", (req,res)=>{
    const index = buscarMembros(req.params.id_membro)
    membros.splice(index, 1)
    res.json(membros)
})

const emprestimos = [
    {
        id_emprestimo: 1,
        data_emprestimo: "12-01-2025",
        data_devolucao: "13-02-2025",
        data_devolucao_efetiva: "23-02-2025",
        id_exemplar: 1,
        id_membro: 2
    },
    {
        id_emprestimo: 2,
        data_emprestimo: "12-02-2025",
        data_devolucao: "13-03-2025",
        data_devolucao_efetiva: "23-3-2025",
        id_exemplar: 2,
        id_membro: 1
    }
]

app.get('/emprestimos', (req, res) => {
    res.json(emprestimos);
}); 

function verEmprestimos(id_emprestimo){
    return emprestimos.findIndex(emprestimos => {
        return emprestimos.id_emprestimo === Number(id_emprestimo)
    })
}

app.get("/emprestimos", (req,res) => {
    res.status(200).json(emprestimos[verEmprestimos(req.params.id_emprestimo)])
})

app.post("/emprestimos", (req,res) => { 
    emprestimos.push(req.body); 
    res.status(201).json(req.body)
})
app.put("/emprestimos/:id_emprestimo", (req,res) =>{
    const index = verEmprestimos(req.params.id_emprestimo)
    emprestimos[index].data_emprestimo = req.body.data_emprestimo
    emprestimos[index].data_devolucao = req.body.data_devolucao
    emprestimos[index].data_devolucao_efetiva = req.body.data_devolucao_efetiva
    emprestimos[index].id_exemplar = req.body.id_exemplar
    emprestimos[index].id_membro = req.body.id_membro
    res.json(emprestimos[index])
})
app.delete("/emprestimos/:id_emprestimo", (req,res)=>{
    const index = verEmprestimos(req.params.id_emprestimo)
    emprestimos.splice(index, 1)
    res.json(emprestimos)
})

export default app