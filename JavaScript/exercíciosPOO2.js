// Herança

// 1. Crie uma classe InstrumentoMusical com o método tocar(). Depois, crie duas subclasses Violao e Piano que herdem de InstrumentoMusical e sobrescrevam o método tocar() exibindo mensagens diferentes.

class InstrumentoMusical{
    tocar(){
        console.log("Emitindo som")
    }
}
class Violao extends InstrumentoMusical{
    tocar(){
        console.log("Violão: Emite nota Sol")
    }
}
class Piano extends InstrumentoMusical{
    tocar(){
        console.log("Piano: Emite nota Dó")
    }
}
const violao = new Violao ();
violao.tocar()

const piano = new Piano();
piano.tocar()


// 2. Crie uma classe Funcionario com os atributos nome e salario. Crie uma classe Gerente que herde de Funcionario e adicione o atributo bonus.

class Funcionario{
    constructor(nome, salario){
        this.nome = nome;
        this.salario = salario;
    }
    mensagem(){
        console.log(`${this.nome} ganha de salario R$${this.salario}.`)
    }
}
class Gerente extends Funcionario{
    constructor(nome, salario, bonus){
        super(nome, salario);
        this.bonus = bonus;
    }
    mensagem(){
        console.log(`O gerente deu R$ ${this.bonus} de bonus para ${this.nome} por ir bem no trabalho. Elen ficou com R$ ${this.salario + this.bonus}.`)
    }
}
const funcionario = new Funcionario("Elen", 1800)
funcionario.mensagem()

const gerente1 = new Gerente("Elen", 1800, 500)
gerente1.mensagem();


// 3. Implemente uma classe Veiculo com os atributos marca e ano. Depois crie: Carro (com atributo adicional portas); Moto (com atributo adicional cilindradas).

class Veiculo{
    constructor(marca, ano){
        this.marca = marca;
        this.ano = ano;
    }
    mensagem(){
        console.log(`O veículo é da marca ${this.marca} do ano de ${this.ano}.`)
    }
}
class Carro extends Veiculo{
    constructor(marca, ano, portas){
        super(marca,ano);
        this.portas = portas;
    }
    mensagem(){
        console.log(`O carro tem ${this.portas} portas`)
    }
}
class Moto extends Veiculo{
    constructor(marca, ano, cilindradas){
        super(marca, ano);
        this.cilindradas = cilindradas;
    }
    mensagem(){
        console.log(`A moto é ${this.cilindradas} cilindrada.`)
    }
}
const veiculo1 = new Veiculo("BMW", 2024)
veiculo1.mensagem()
const carro1 = new Carro("BMW", 2024, 4)
carro1.mensagem()
const moto = new Moto("BMW", 2024, "sim")
moto.mensagem()


// 4. Crie uma classe Funcionario com o método calcularSalario(). Crie duas subclasses: Gerente: salário base + bônus de 30%. Desenvolvedor: salário base + adicional de 20%.

class Funcionario{
    constructor(salarioBase){
        this.salarioBase = salarioBase;
    }
    calcularSalario(){
    }
}
class Gerente extends Funcionario{
    constructor(salarioBase){
        super(salarioBase);
    }
    calcularSalario(){
        this.salario = this.salarioBase * 130/100
        console.log(`O gerente recebeu um bônus de 30% então seu salário vai ficar R$ ${this.salario}.`)
    }
}
class Desenvolvedor extends Funcionario{
    constructor(salarioBase){
        super(salarioBase);
    }
    calcularSalario(){
        this.salario = this.salarioBase * 120/100
        console.log(`O desenvolvedor recebeu um bônus de 20%, então seu salário vai ficar R$ ${this.salario}`)
    }
}
const gerente2 = new Gerente(2500)
gerente2.calcularSalario()

const desenvolvedor3 = new Desenvolvedor (2000)
desenvolvedor3.calcularSalario()


// 5. Implemente uma classe base ContaBancaria com atributos titular e saldo, e métodos depositar() e sacar(). ContaCorrente deve cobrar uma taxa de R$ 2,00 em cada saque. ContaPoupanca deve render 5% ao mês quando for chamado o método atualizarSaldo().

class ContaBancaria{
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(){
    }
    sacar(){
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(titular, saldo){
        super(titular, saldo)
    }
    sacar(){
        this.saldo -= 2
        console.log(`${this.titular}, seu saldo agora é de R$ ${this.saldo}, pois a cada saque cobramos uma taxa de R$ 2,00.`)
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(titular, saldo, deposito){
        super(titular, saldo)
        this.deposito = deposito;
    }
    depositar(){
        this.depositoresultado = this.saldo + this.deposito
        console.log(`Você depositou R$${this.deposito}. O seu saldo agora é de R$${this.depositoresultado}. `)
    }
    atualizarSaldo(){
        this.saldoAtualizado = this.saldo * 105/100
        console.log(`Sua poupança rendeu R$${this.saldoAtualizado}.`)
    }
}

const titular1 = new ContaCorrente ("Edson", 10000)
titular1.sacar();

const titular = new ContaPoupanca ("Edson", 10000, 5000)
titular.depositar();
titular.atualizarSaldo();


// Encapsulamento

// 6. Crie uma classe Produto com atributos privados nome e preco. Implemente métodos get e set que permitam acessar e modificar esses atributos de forma controlada (não permitir preço negativo).

class Produto{
    #nome
    #preco
    constructor(nome, preco){
        this.#nome = nome;
        this.#preco = preco;
    }
    get nome(){
        return this.#nome;
    }
    get preco(){
        return this.#preco;
    }
    set nome(novoNome){
        this.#nome = novoNome;
    }
    set preco(novoPreco){
        if(novoPreco >= 0){
            this.#preco = novoPreco;
        } else {
            console.log("Preço não pode ser negativo.")
        }
    }
}
const produto = new Produto("Camiseta", 50);
console.log(produto.nome); 
console.log(produto.preco);

// 7. Implemente uma classe Carro com atributo privado velocidade. Crie os métodos públicos acelerar() (aumenta +10 km/h) e frear() (diminui -10 km/h, sem permitir valores negativos).
class Carro{
    #velocidade
    constructor(){
        this.#velocidade = 20;
    }
    acelerar(){
        return this.#velocidade += 10
    }
    frear(){
        if(this.#velocidade >= 10){
            return this.#velocidade -= 10
        } else {
            return this.#velocidade = 0
        }
    }
}
const carro = new Carro();
console.log(carro.acelerar()); 
console.log(carro.acelerar()); 
console.log(carro.frear());    
console.log(carro.frear());    
console.log(carro.frear());

// 8. Crie uma classe Conta com atributo privado saldo. Garanta que só seja possível modificar o saldo pelos métodos depositar() (apenas valores positivos) e sacar() (apenas se houver saldo suficiente).
class Conta{
    #saldo
    constructor(saldo){
        this.#saldo = saldo;
    }
    depositar(valor){
        if(valor > 0){
            this.#saldo += valor;
            console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.#saldo}.`)
        } else {
            console.log("Valor de depósito deve ser positivo.")
        }
    }
    sacar(valor){
        if(valor <= this.#saldo){
            this.#saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.#saldo}.`)
        } else {
            console.log("Saldo insuficiente para saque.")
        }
    }
}
const conta = new Conta(100);
conta.depositar(50); 
conta.sacar(30);    
conta.sacar(150);

// 9. Implemente uma classe Usuario com atributo privado senha. Crie o método validarSenha(senhaDigitada) que retorna true se a senha estiver correta e false caso contrário.
class Usuario{
    #senha
    constructor(senha){
        this.#senha = senha;
    }
    validarSenha(senhaDigitada){
        return this.#senha === senhaDigitada;
    }
}
const usuario = new Usuario("123");
console.log(usuario.validarSenha("123")); // true
console.log(usuario.validarSenha("234"));   // false

//10. Crie uma classe Retangulo com atributos privados largura e altura. Crie métodos públicos getArea() e getPerimetro() para retornar a área e o perímetro.

class Retangulo{
    #largura
    #altura
    constructor(largura, altura){
        this.#largura = largura;
        this.#altura = altura;
    }
    getArea(){
        return this.#largura * this.#altura;
    }
    getPerimetro(){
        return 2 * (this.#largura + this.#altura);
    }
}
const retangulo = new Retangulo(5, 10);
console.log(retangulo.getArea());      
console.log(retangulo.getPerimetro());

// Polimorfismo

// 11. Crie uma classe Forma com o método calcularArea(). Crie as classes Quadrado (lado), Retangulo (largura e altura) e Circulo (raio), sobrescrevendo o método para calcular a área corretamente.

class Forma{
    calcularArea(){
    }
}
class Quadrado extends Forma{
    constructor(lado){
        super();
        this.lado = lado;
    }
    calcularArea(){
        return this.lado * this.lado;
    }
}
class Retangulo extends Forma{
    constructor(largura, altura){
        super();
        this.largura = largura;
        this.altura = altura;
    }
    calcularArea(){
        return this.largura * this.altura;
    }
}
class Circulo extends Forma{
    constructor(raio){
        super();
        this.raio = raio;
    }
    calcularArea(){
        return Math.PI * this.raio * this.raio;
    }
}
const forma = new Quadrado(5)
console.log(`A área do quadrado é: ${forma.calcularArea()}`)
const forma2 = new Retangulo(10, 5)
console.log(`A área do retangulo é: ${forma2.calcularArea()}`)
const forma3 = new Circulo(5)
console.log(`A área do círculo é: ${forma3.calcularArea()}`)

// 12. Crie uma classe Funcionario com o método trabalhar(). Depois crie: Professor: retorna "Ministrando aulas e corrigindo provas". Engenheiro: retorna "Desenvolvendo projetos e supervisionando obras". Designer: retorna "Criando layouts e materiais gráficos".

class Funcionario{
    trabalhar(){
    }
}
class Professor extends Funcionario{
    trabalhar(){
        return `ministrando aulas e corrigindo provas`
    }
}
class Engenheiro extends Funcionario{
    trabalhar(){
        return `desenvolvendo projetos e supervisionando obras`
    }
}
class Designer{
    trabalhar(){
        return `criando Layouts e materiais gráficos`
    }
}

const funcionario1 = new Professor()
console.log(funcionario1.trabalhar())
const funcionario2 = new Engenheiro()
console.log(funcionario2.trabalhar())
const funcionario3 = new Designer()
console.log(funcionario3.trabalhar())

// 13. Implemente um sistema de pagamento com uma classe Pagamento e subclasses CartaoCredito, Boleto e Pix, cada uma sobrescrevendo o método realizarPagamento() exibindo a forma de pagamento utilizada.

class Pagamento{
    realizarPagamento(){
    }
}
class CartaoCredito extends Pagamento{
    realizarPagamento(){
        return "Forma de pagamento: Cartão de crédito"
    }
}
class Boleto extends Pagamento{
    realizarPagamento(){
        return "Forma de pagamento: Boleto"
    }
}
class Pix extends Pagamento{
    realizarPagamento(){
        return "Forma de Pagamento: Pix"
    }
}
const formaPagamento = new Pix();
console.log(formaPagamento.realizarPagamento())

// 14. Crie uma classe Transporte com o método mover(). Crie as subclasses Carro, Bicicleta e Aviao, cada uma sobrescrevendo o método mover() com mensagens específicas (ex: "O carro anda pela estrada"). Depois, crie uma lista de transportes e percorra chamando mover().

class Transporte{
    mover(){
    }
}
class Carro extends Transporte{
    mover(){
        return "O carro anda pela estrada"
    }
}
class Bicicleta extends Transporte{
    mover(){
        return "A bicicleta anda pela ciclovia"
    }
}
class Aviao extends Transporte{
    mover(){
        return "O avião voa pelo céu"
    }
}

const transportes = [new Carro(), new Bicicleta(), new Aviao()];
transportes.forEach(transporte => {
    console.log(transporte.mover());
});

// 15. Implemente uma classe Mensagem com o método enviar(). Crie subclasses Email, SMS e WhatsApp que sobrescrevam enviar() exibindo a mensagem de envio.

class Mensagem{
    enviar(){
    }
}
class Email extends Mensagem{
    enviar(){
        return "Enviando email..."
    }
}
class SMS extends Mensagem{
    enviar(){
        return "Enviando SMS..."
    }
}
class WhatsApp extends Mensagem{
    enviar(){
        return "Enviando mensagem pelo WhatsApp..."
    }
}
const mensagem1 = new Email();
console.log(mensagem1.enviar());
const mensagem2 = new SMS();
console.log(mensagem2.enviar());
const mensagem3 = new WhatsApp();
console.log(mensagem3.enviar());