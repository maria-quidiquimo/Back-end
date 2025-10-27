// Funções básicas com parâmetros e retorno

//Crie uma função declarada que receba dois números como parâmetros e retorne a soma deles.
// console.log("O resultado da soma é", soma(4, 4))
// function soma(a, b){
//     return a + b
// }

//Crie uma função declarada que receba três notas e retorne a média do aluno.
// console.log("A média do aluno é", media(7, 8, 9))
// function media(a, b, c){
//     return (a+b+c)/3
// }

//Crie uma função expressa que receba a base e a altura de um triângulo e retorne a área
// console.log("A área do triângulo é ", area(5, 10))
// function area(base, altura){
//     return (base * altura)/2
// }


// Funções anônimas e arrow functions

// Crie uma função anônima que receba um número e retorne se ele é par ou ímpar
// const num = function (a) {
//     return a
// }
// let a = 5;
// if (a % 2 == 0){
//     console.log("O número é par")
// } else {
//     console.log("O número é ímpar")
// }

// Crie uma arrow function que receba dois números e retorne o maior deles.
// let maiorNumero = (a, b) => {return a > b || b > a}
// let a = 16;
// let b = 10;
// if (a > b){
//     console.log("O maior número é ", a)
// } else {
//     console.log("O maior número é ", b)
// }

// Correção
// const numeroMaior = (a, b) => {return a > b ? a : b}
// console.log(`O maior número é ${numeroMaior(10,40)}`)

// Crie uma arrow function que receba um array de números e retorne apenas os números pares.
// let numeroPar = (a,b,c,d,e,f, g, h, i, j) => {return numero % 2 == 0}
// let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let pares = [];
// for (let i = 0; i < lista.length; i++){
//     if (lista[i] % 2 == 0){
//         pares.push(lista[i]);
//         console.log("Os números pares são:", pares)
//     }
// }

// Correção
// const par = (array) => {if (array % 2 == 0){return console.log(array)}}
// let lista1 = [10, 11, 16, 17, 40, 45];
// for (let i = 0; i < lista1.length; i++){
//     par(lista1[i])
// }


// Funções IIFE (Immediately Invoked Function Expression)

// Crie uma função IIFE que exiba no console a mensagem: .
// (function(){
// 	return console.log("Olá, mundo!")
// })()

// Crie uma função IIFE que calcule o quadrado de um número e exiba o resultado imediatamente.
//let num = 5;
// (function (num){
//     return console.log(`O quadrado do número ${num} é ${num ** 2}`)
// })(5)


// Callbacks

//Crie uma função que receba um nome e uma função callback, e execute a callback exibindo uma mensagem de boas-vindas personalizada.
// function executarCallback(callback){
// 	callback()
// }
// executarCallback(() => {console.log('Olá, Mundo! Seja Bem-Vindo')})

//Crie uma função que receba um array de números e uma função callback. A função deve aplicar o callback em cada elemento e retornar um novo array com o dobro de cada elemento.
function dobro(numero){
    return numero * 2
}
function aplicarCallback(array, callback){
    let listaDobro = []
    for (let i = 0; i < array.length; i++){
        listaDobro.push(callback(array[i]))
    }
    return listaDobro
}
console.log(aplicarCallback([10,40,16,47], dobro))

// Funções recursivas

// Crie uma função recursiva que exiba no console os números de 10 até 1 em ordem decrescente.
// function decrescente(n){
//     if(n === 0){
//         return 
//     } else {
//         console.log(n)
//         decrescente(n-1)
//     }
// }
// decrescente(10)


// Funções assíncronas

//Crie uma função assíncrona que aguarde 2 segundos e depois exiba no console: .
// async function mensagemAposDoisSegundos(mensagem) {
//     setTimeout(
//         () => {console.log(mensagem)},
//     2000)
// }
// mensagemAposDoisSegundos("Olá, Mundo!")

//Crie uma função assíncrona que receba um número, aguarde 1 segundo e depois retorne o dobro desse número.
// async function dobroAposUmSegundo(num) {
//     setTimeout(
//         () => {console.log(num * 2)}, 
//         1000)
// }
// dobroAposUmSegundo(10)

//Crie uma função assíncrona que simule a consulta de um usuário em um sistema e exiba a mensagem: após 3 segundos.
// async function consultaAposTresSegundos(consulta) {
//     setTimeout(
//         () => {console.log(consulta)},
//     3000)
// }
// consultaAposTresSegundos("Executado após 3 segundos")