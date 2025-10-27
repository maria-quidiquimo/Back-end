// correção da questão 1
// funcão com callback

const estoque = {caixa: 50, palete: 10, empilhadeira: 2};

//funcão principal
function verificarEstoque(produto, quantidade, callback){
    return callback(produto, quantidade);
}

// callback
function conferir(produto, qtd){
    if(estoque[produto] >= qtd){
        return "pedido aprovado";
    } else{
        return "estoque insuficiente";
    }
}

// testes
console.log(verificarEstoque("caixa", 20, conferir));
console.log(verificarEstoque("palete", 15, conferir));
console.log(verificarEstoque("empilhadeira", 5, conferir));


// correção da questão 2

class Produto{
    constructor(nome, preco, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    valorTotal(){
        return this.preco * this.quantidade;
    }
    reporEstoque(qtd){
        this.quantidade += qtd;
    }
}

// teste
const produto1 = new Produto("Saia", 40, 10)
console.log("O valor total em estoque:", produto1.valorTotal());
produto1.reporEstoque(13);
console.log("Nova quantidade:", produto1.quantidade);

// correção da questão 3
// classe simples

// class Pedido{
//     constructor(numero, produto, precoUnitario, quantidade){
//         this.numero = numero;
//         this.produto = produto;
//         this.precoUnitario = precoUnitario;
//         this.quantidade = quantidade;
//     }
//     valorTotal(){
//         return this.precoUnitario * this.quantidade;
//     }
//     resumo(){
//         return `
//         Pedido nº: ${this.numero}
//         Produto: ${this.produto}
//         Quantidade: ${this.quantidade}
//         Valor Total: R$${this.valorTotal().toFixed(2)// mostra as duas casas decimais depois da vírgula}
//         `
//     }
// }

// //teste
// const pedido = new Pedido(18, "Bolsa", 70, 7)
// console.log(pedido.resumo());

// correção da questão 4
// classe - herança

// class Veiculo{
//     constructor(placa, capacidade){
//         this.placa = placa;
//         this.capacidade = capacidade;
//     }
// }
// class Van extends Veiculo{
//     constructor(placa, motorista){
//         super(placa, 5000) // caapcidade fixa
//         this.motorista = motorista;
//     }
//     podeTransportar(carga){
//         return carga <= this.capacidade;
//     }
// }
// class Caminhao extends Veiculo{
//     constructor(placa, eixos, motorista){
//         super(placa, 8000);
//         this.eixos = eixos;
//         this.motorista = motorista;
//     }
//     podeTransportar(carga){
//         return carga <= this.capacidade * this.eixos
//     }
// }
// const van = new Van ("ABC - 123", "Carlos");
// console.log(van.podeTransportar(4000)) // true
// console.log(van.podeTransportar(9000)) // false

// const cam = new Caminhao("DFG - 456", 2, "João");
// console.log(cam.podeTransportar(15000)) // true
// console.log(cam.podeTransportar(18000)) // false

// correção da questão 5
// classe herança e polimorfismo 

class Funcionario{
    constructor(nome, salarioBase){
        this.nome = nome;
        this.salarioBase = salarioBase;
    }
    calcularSalario(){
        return this.salarioBase;
    }
}

class OperadorDeEmpilhadeira extends Funcionario{
    calcularSalario(){
        return this.salarioBase * 1.10; // 10% adicional
    }
}

class GerenteDeLogistica extends Funcionario{
    calcularSalario(){
        return this.salarioBase + 2000; // adicional fixo
    }
}

// teste
const funcionario = [
    new OperadorDeEmpilhadeira("Pedro", 3000),
    new GerenteDeLogistica("Olivia", 5000),
    new Funcionario("Iolanda", 2500)
];

funcionario.forEach(f => {
    console.log(`${f.nome} - Salário: R$${f.calcularSalario().toFixed(2)}`)
});

// for(let i = 0; i < funcionario.length; i++){
//     let f = funcionario[i]
//     console.log(`${f.nome} - Salário: R$${f.calcularSalario().toFixed(2)}`)
// }

// correção da questão 6
// encapsulamento

class Almoxarifado{
    #quantidade;
    nome;
    constructor(nome, quantidade){
        this.#quantidade = quantidade;
        this.nome = nome;
    }
    adicionarProduto(qtd){
        if(qtd >= 0){
            this.#quantidade += qtd;
        } else {
            return "Valor incorreto"
        }
    }
    retirarProduto(qtd){
        if(this.#quantidade < qtd){
            console.log("Estoque insuficiente")
            return;
        }
        this.#quantidade -= qtd
    }
    consultarEstoque(){
        return `${this.nome}: ${this.#quantidade}`
    }
}
const almoxarifado = new Almoxarifado ("Chaveiro", 0);
almoxarifado.adicionarProduto(5);
almoxarifado.retirarProduto(2);
almoxarifado.consultarEstoque();
console.log(almoxarifado.consultarEstoque());// 3