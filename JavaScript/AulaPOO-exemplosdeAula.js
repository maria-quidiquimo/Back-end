// Aula 1
// const pessoa = {
//     nome : "Maria",
//     idade : 26,
//     falar: function() {
//         console.log(`Olá meu nome é ${this.nome}.`);
//     }
// };
// pessoa.falar();

// const pessoa2 = {
//     nome2 : "Renato",
//     idade2 : 18,
//     falar: function() {
//         console.log(`Olá meu nome é ${this.nome2}.`);
//     }
// };
// pessoa2.falar();

// const pessoa3 = {
//     nome3 : "Ana",
//     idade3 : 42,
//     falar: function() {
//         console.log(`Olá meu nome é ${this.nome3}.`);
//     }
// };
// pessoa3.falar();



// class Pessoa{
//     constructor (nome, idade){
//         this.nome = nome;
//         this.idade = idade;
//     }

//     saudacao() {
//         return ` Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
//     }
// }

// const pessoa4 = new Pessoa ("João", 25);
// pessoa4.saudacao()


// class Conta{
//     constructor(titular, saldo){
//         this.titular = titular;
//         this.saldo = saldo;
//     }

//     depositar(valor) {
//         this.saldo += valor
//         console.log(`Depósito realizado. Saldo atual: R$ ${this.saldo}`)
//     }
//     sacar(valor){
//         if (valor <= this.saldo){
//              this.saldo -= valor
//             console.log(`Saque realizado. Saldo Atual: R$ ${this.saldo}`)
//         } else {
//             console.log(`Saldo Insuficiente.`)
//         }
       
//     }
// }

// Aula 2 Exemplos
// Abstração
// Exemplo de Abstração
class Carro{
	ligaMotor(){
		console.log("Motor ligado.")
	}
	desligaMotor(){
		console.log("Motor desligado.")
	}
}

// Encapsulamento
// Encapsulamento - Atributo privado
class ContaBancaria{
	#saldo
	numeroConta
	
	constructor (saldo, numeroConta){
		this.#saldo = saldo;
		this.numeroConta = numeroConta;
	}
    // Definindo o Get - não permite alterar o valor
    get getSaldo(){return this.#saldo}

    // Definindo o Set - permite alterar o valor
    // set setSaldo(valor){return this.#saldo = valor}

    // Definindo Set - Validando o valor
    set setSaldo(valor){
	if (valor != null && valor > 0){
		this.#saldo = valor
	} else{
			console.log("Saldo inválido")}
    }
}

// Acessando o atributo privado
let conta = new ContaBancaria(100, "R2-D2")

console.log(conta.numeroConta)
console.log(conta.getSaldo)

conta.getSaldo = 30000
console.log(conta.getSaldo)

// conta.setSaldo = 10000
// console.log(conta.getSaldo)

conta.setSaldo = -1000
console.log(conta.getSaldo)

// Herança
class Animal { // classe pai
	constructor(nome){
		this.nome = nome;
	}
	fazerSom(){
		console.log("Emite um som genérico")
	}
}
class Cachorro extends Animal{
	constructor(nome){
		super(nome); //o super
	}
	fazerSom(){
		console.log("Auau")
	}
} // classe filha
let cachorro = new Cachorro ();
cachorro.fazerSom()
let cachorro1 = new Cachorro("Rex");
console.log(`Nome do cachorro: ${cachorro1.nome}`)

// Polimorfismo

