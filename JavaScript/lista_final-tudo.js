// Parte 1 – Funções (básico → intermediário)

// 1. Crie uma função que receba uma string e retorne a quantidade de vogais presentes.
function contarVogais(str){
    let contador = 0;
    const vogais = 'aeiouAEIOU';
    for(let char of str){
        if(vogais.includes(char)){
            contador++;
        }
    }
    return contador;
}
console.log(contarVogais("Olá, Mundo!")) // Deve retornar 4

//  Implemente uma função que receba um número e retorne a sequência de Fibonacci até esse número.

function fibonacci(termo){
    let seq = [0, 1];
    for(let i = 2; i < termo; i++){
        seq[i] = seq[i - 1] + seq[i - 2];
    }
    return seq.slice(0, termo);
}
console.log(fibonacci(10))



// 3. Crie uma função que receba um array de números e retorne apenas os números primos.

function filtrarLista(lista, callback){
    lista.forEach(i => {
        if(callback(i)){
            console.log(i)
        }
    });
}

function primo(numero){
    if(numero < 2){
        return false
    }
    for(let i = 2; i < numero; i++){
        if(numero % i == 0){
            return false
        } 
    }
    return true
}

filtrarLista([1, 2, 3, 4, 5, 6, 7, 10, 16, 17, 40], primo)

// 4. Escreva uma função que receba uma string e retorne se ela é um palíndromo (mesmo de trás para frente).
function verificarPalindromo(str){
    const strInvertida = str.split('').reverse().join('');
    return str === strInvertida;
}
console.log(verificarPalindromo("arara")) 
console.log(verificarPalindromo("hello")) 

// Parte 2 – Classes Simples

//5. Crie uma classe Produto com atributos nome, preco e estoque. Adicione um método vender(quantidade) que diminui o estoque.

class Produto{
    constructor(nome, preco, estoque){
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
    vender(quantidade){
        
    }
}
const produto1 = new Produto("Camiseta", 50, 100);
produto1.vender(2);
console.log(produto1.estoque);

// 

// Parte 3 – Encapsulamento

// 10. Crie uma classe Cofrinho que armazena valores de moedas e notas em um atributo privado. Adicione métodos depositar(moedas, notas), retirar(valor) e saldo().

class Cofrinho{
    #notas
    #moedas
    constructor(notas, moedas){
        this.#notas = notas;
        this.#moedas = moedas;
    }
    depositar(moedasDepositadas, notasDepositadas){
        this.#moedas += moedasDepositadas;
        this.#notas += notasDepositadas;
    }
    retirar(moedasRetiradas, notasRetiradas){
        this.#moedas -= moedasRetiradas;
        this.#notas -= notasRetiradas;
    }
    get getSaldo(){
        return this.#moedas + this.#notas
    }
}
const cofre = new Cofrinho (10, 10)

cofre.depositar(100, 30)
console.log(cofre.getSaldo)