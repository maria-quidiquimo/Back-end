// Variáveis e Operações 


let num = 10;
let num2 = 8;
console.log(num + num2); // soma

let base = 10;
let altura = 5;
console.log(base * altura); // Área

let graus = 25;
console.log((graus * 9/5) + 32); // graus Celsius

let nota = 10;
let nota2 = 7;
let nota3 = 8;
console.log((nota + nota2 + nota3) / 3); // média

let numero = 7;
let numero2 = 8;
console.log("O resultado de 7x8 é ", numero * numero2); // multiplicação de 2 números }


// Condicionais (If / Else)


let num3 = 10;
if (num3 > 0){
    console.log("O número é positivo")
} else if (num3 < 0) {
    console.log("O número é negativo")
} else {
    console.log("O número é igual a zero")
} // número negativo, positivo ou negativo.

let idade = 25;
if (idade >= 18){
    console.log("Você é maior de idade.")
} else {
    console.log("Você é menor de idade")
} // pessoa maior de idade

let par = 10;
if (par % 2 == 0){
    console.log("O número é par")
} else {
    console.log("O número é ímpar")
} // número par ou ímpar

let nota4 = 9;
let nota5 = 10;
let media = (nota4 + nota5) / 2
if (media >= 7){
    console.log("Aprovado")
} else {
    console.log("Reprovado")
} // média de duas notas

let a = 32;
let b = 16;
let c = 12;
if (a > b && a > c){
    console.log("O número maior é a =", a)
} else if (a < b && b > c){
    console.log("O número maior é b = ", b)
} else {
    console.log("O número maior é c = ", c)
} // número maior entre 3 números


// Múltiplas Condições e Switch


let idade2 = 16;

switch (true) {
    case idade2 <= 12:
        console.log("Criança");
        break;
    case idade2 > 12 && idade2 < 17:
        console.log("Adolescente")
        break;
    case idade2 >= 18 && idade2 < 59:
        console.log("Adulto")
        break;
    case idade2 >= 60:
        console.log("Idoso")
} // Classificação de idade

let ano = 2024;
if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0){
    console.log(`O ano de ${ano} é bissexto`)
} else {
    console.log(`O ano de ${ano} não é bissexto`)
} // ano bissexto ou não

let valor = 10;
let valor2 = 16;
let operacao = 3;

switch (operacao){
    case 1:
        console.log(valor + valor2)
        break;
    case 2:
        console.log(valor - valor2)
        break;
    case 3:
        console.log(valor * valor2)
        break;
    case 4:
        console.log(valor / valor2)
        break;
} // menu de operações

let dia = 6;
switch (dia){
    case 1:
        console.log("Segunda-feira")
        break;
    case 2:
        console.log("Terça-feira")
        break;
    case 3:
        console.log("Quarta-feira")
        break;
    case 4:
        console.log("Quinta-feira")
        break;
    case 5:
        console.log("Sexta-feira")
        break;
    case 6:
        console.log("Sábado")
        break;
    case 7:
        console.log("Domingo")
} // Dias da semana

let nota6 = 7;
switch (true){
    case nota6 == 10 || nota6 == 9:
        console.log("A")
        break;
    case nota6 == 8 || nota6 == 7:
        console.log("B")
        break;
    case nota6 == 6 || nota6 ==5:
        console.log("C")
        break;
    case nota6 == 4 || nota6 == 3:
        console.log("D")
        break;
    case nota6 == 2 || nota6 == 1:
        console.log("E")
        break;
    case nota6 == 0:
        console.log("F")
        break;
    default:
        console.log("Nota inválida");
} // nota em conceito


// Laços de repetição


for (let i = 1; i < 11; i++){
    console.log(i);
} // contagem de 1-10

let soma = 0;
for (let i = 1; i <= 100; i++){
    soma+=i; 
    console.log("soma até", i, "é: ", soma); 
}// soma de 1 até 100


let val = 8;
for (let i = 1; i <=10; i++){
    console.log(val, "x", i, "=", val*i);
} // Tabuada

for (let i = 0; i < 51; i++){
    if (i % 2 == 0){
        console.log(i);
    }
} // exibir números pares de 1 a 50

let numero3 = 5;
let fatorial = 1;
for (let i = numero3; i > 0; i--){
    fatorial *= i;
}
console.log(`O fatorial de ${numero3} é ${fatorial}`);
 // Fatorial de um número


// Array


let nome = ["Bia", "Carol", "Helena", "João", "Maria"]
 for (i = 0; i < 5; i++){
 	console.log(nome[i]);
 } // 5 nomes exibidos
 
let numeros = [1, 2, 3, 4, 5, 6];
let pares = [];
for (let i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 == 0){
        pares.push(numeros[i]);
        console.log("Os números pares são:", pares)
    }
} // números pares

let nums = [1, 2, 3, 4];
let somas = 0;
for (let i = 0; i < nums.length; i++) {
    somas += nums[i];
    console.log("Soma dos valores é ", somas);
} // soma dos valores da Array

let nuns = [10, 7, 40, 16];
let maior = nuns[0];
for (let i = 0; i < nuns.length; i++) {
    if (nuns[i] > maior){
        maior = nuns[i]
        console.log("O maior número é", maior);
    }
} // Maior número em uma Array

let frutas = ["Manga", "Uva", "Maçã"];
console.log(frutas.includes("Maçã")) // Verificando se o item está na lista

let fruta = ["Manga", "Banana", "Uva"];
fruta.push("Laranja");
console.log(fruta.indexOf("Laranja"));// adiciona na lista

let flor = ["Rosa", "Margarida", "Orquídea"]
flor.pop();
console.log(flor.length);// remove da lista