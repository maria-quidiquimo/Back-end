// 1  Função com Callback – Conferência de Estoque. Crie uma função verificarEstoque(produto, quantidade, callback) que: Receba o nome do produto e a quantidade solicitada; Use o callback para verificar se a quantidade está disponível no estoque.Retorne "Pedido aprovado" se tiver estoque suficiente ou "Estoque insuficiente" caso contrário. Para simular um banco de dados utilize:
//           // "Banco de dados" de estoque
//           const estoque = {
//             caixa: 50,
//             palete: 10,
//             empilhadeira: 2
//           };
// Para utilizar a quantidade de produtos em estoque utilize: estoque[produto]

// const estoque = {"caixa": 50, "palete": 10, "empilhadeira": 2};

// function verificarEstoque(produto, quantidade, callback){
//     return callback (produto, quantidade)
// }
// function verificacao(produto, estoque, quantidade){
//     if(quantidade > estoque){
//         console.log(`Produto: ${produto}. Estoque insuficiente.`)
//     } else{
//         console.log(`Produto: ${produto}. Pedido aprovado`)
//     }
// }
// console.log(verificacao("caixa", 50, 60))
// console.log(verificacao("palete", 10, 2))



// 2) Classe Simples – Produto Crie uma classe Produto com os atributos:
// nome (string)
// preco (number)
// quantidade (number)
// Implemente os métodos:
// valorTotal() → retorna o valor total do estoque do produto (preço × quantidade).
// reporEstoque(qtd) → aumenta a quantidade em estoque do produto.


// class Produto{
//     constructor(nome, preco, quantidade){
//         this.nome = nome;
//         this.preco = preco;
//         this.quantidade = quantidade;
//     }
//     valorTotal(){
//         this.valor = this.preco * this.quantidade
//         console.log(`O valor total do estoque de ${this.nome} é de R$ ${this.valor}`)
//     }
//     reporEstoque(qtd){
//         qtd += this.quantidade
//         console.log(`A quantidade de ${this.nome} no estoque é de ${qtd}`)
//     }
// }
// const produto1 = new Produto ("Bolsa", 70, 30)
// produto1.valorTotal()
// const produto2 = new Produto ("Saia", 70, 80)
// produto2.reporEstoque(5)


// 3) Classe Simples – Pedido Na área de almoxarifado, cada pedido feito para o fornecedor contém um produto por vez, informado no momento da solicitação. O sistema precisa registrar o número do pedido, o nome do produto solicitado, o preço unitário do produto e a quantidade solicitada.O supervisor explicou que precisa:
// Calcular o valor total do pedido (preço × quantidade).
// Emitir um resumo contendo o número do pedido, nome do produto, quantidade e valor total.
// Modele uma classe Pedido que atenda a essa necessidade, criando atributos e métodos adequados.

// class Pedido{
//     constructor(numPedido, nomeProduto, quantidade, preco){
//         this.numPedido = numPedido;
//         this.nomeProduto = nomeProduto;
//         this.quantidade = quantidade;
//         this.preco = preco;
//     }
//     valorTotal(){
//         this.valor = this.preco * this.quantidade
//         console.log(`O valor total do pedido é de R$ ${this.valor}`)
//     }
//     resumoPedido(){
//         console.log(`Numero do pedido: ${this.numPedido}; Produto: ${this.nomeProduto}; Quantidade: ${this.quantidade}; Valor Total: R$ ${this.valor}`)
//     }
// }
// const pedido1 = new Pedido (16, "Papel", 10, 20)
// pedido1.valorTotal()
// pedido1.resumoPedido()

// 4) Herança – Veículos de Transporte Crie uma classe Veiculo com atributos:
// placa
// capacidade (em kg)
// Depois crie duas subclasses:
// Caminhao → adiciona atributo eixos e motorista.
// Van → adiciona atributo motorista.
// Cada subclasse deve implementar o método podeTransportar(carga) que verifica se o veículo consegue realizar a viagem:
// Van suporta até 5.000 kg.
// Caminhão suporta até 8.000 kg por eixo.
// Exemplo: um caminhão com 2 eixos pode transportar até 16.000 kg.

// class Veiculo{
//     constructor(placa, capacidade){
//         this.placa = placa;
//         this.capacidade = capacidade;
//     }
// }
// class Van extends Veiculo{
//     constructor(placa, capacidade){
//         super(placa, capacidade)
//     }
//     podeTransportar(carga){
//         if(carga < 5000){
//             console.log(`De van, você pode realizar a viagem.`)
//         }else{
//             console.log(`De van, você não pode realizar a viagem.`)
//         }
//     }
// }
// class Caminhao extends Veiculo{
//     constructor(placa, capacidade){
//         super(placa, capacidade)
//     }
//     podeTransportar(carga){
//         this.total = this.capacidade * carga
//         if(this.capacidade < carga){
//             console.log(`De caminhão, você não pode realizar a viagem.`)
//         } else{
//             console.log(`De caminhão, você pode realizar a viagem.`)
//         }
        
//     }
// }
// const van = new Van ("ABC", 5000)
// van.podeTransportar(3000);
// const caminhao = new Caminhao("DEF", 8000)
// caminhao.podeTransportar(1000)

// 5) Herança + Polimorfismo – Funcionários da Logística. Crie uma classe Funcionario com os atributos:
// nome
// salarioBase
// E um método calcularSalario().
// Crie subclasses:
// OperadorDeEmpilhadeira → recebe adicional de 10% sobre o salário base.
// GerenteDeLogistica → recebe adicional fixo de R$ 2.000,00.
// Simule um array com 5 funcionários diferentes e exiba os salários calculados utilizando for, demonstrando o polimorfismo em ação.

// class Funcionario{
//     constructor(nome, salarioBase){
//         this.nome = nome;
//         this.salarioBase = salarioBase;
//     }
//     calcularSalario(){
//     }
// }
// class OperadorDeEmpilhadeira extends Funcionario{
//     constructor(nome, salarioBase){
//         super(nome, salarioBase)
//     }
//     calcularSalario(){
//         this.salarioTotal = this.salarioBase * 110/100
//         console.log(`O funcionário ${this.nome} recebeu R$ ${this.salarioTotal}.`) 
//     }
// }
// class GerenteDeLogistica extends Funcionario{
//     constructor(nome, salarioBase){
//         super(nome, salarioBase)
//     }
//     calcularSalario(){
//         this.salarioTotal = this.salarioBase + 2000
//         console.log(`O gerente ${this.nome}, recebeu R$ ${this.salarioTotal}`) 
//     }
// }
// const operador = new OperadorDeEmpilhadeira("Márcio", 3000)
// operador.calcularSalario()
// const gerente = new GerenteDeLogistica("Maria", 5000)
// gerente.calcularSalario()

// 6) Encapsulamento – Controle de Almoxarifado. Crie uma classe Almoxarifado que armazene um atributo privado #quantidade e o nome de um produto. Implemente os métodos:
// adicionarProduto(nome, qtd)
// retirarProduto(nome, qtd) (não permitir retirar mais do que existe)
// consultarEstoque() (retorna todos os produtos e quantidades).

// class Almoxarifado{
//     #quantidade
//     nomeProduto
//     constructor(quantidade, nomeProduto){
//         this.#quantidade = quantidade;
//         this.nomeProduto = nomeProduto;
//     }
//     adicionarProduto(nome, qtd){
//         this.nomeProduto = nome;
//         this.#quantidade += qtd;
//     }
//     retirarProduto(nome,qtd){
//         this.nomeProduto = nome;
//         this.#quantidade -= qtd;
//         if(this.#quantidade < qtd){
//             console.log(`Você não pode tirar mais quantidade do que existe no estoque.`)
//         } else{
//             console.log(`Você retirou ${qtd} de ${nome}.`)
//         }
//     }
//     consultarEstoque(){
//        console.log(`Você tem ${this.#quantidade} de ${this.nomeProduto}.`)
//     }
// }
// const produto3 = new Almoxarifado(10, "Papel")
// produto3.adicionarProduto("Papel", 2)
// produto3.consultarEstoque()

// const produto4 = new Almoxarifado (15, "Pincél")
// produto4.retirarProduto("Pincél", 4)
// produto4.consultarEstoque()