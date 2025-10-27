//var
//var nome = "João";
//var nome = "Maria";
//console.log(nome); // Saída: Maria

// let
//let idade = 25;
//idade = 30;
//console.log(idade);

//const

//const pi=3.14;
//pi = 3.12; // Isso causará um erro, pois 'pi' já foi declarado
//console.log(pi);

//let nomeCompleto = "Maria Eduarda Quidiquimo Barreto";
//console.log(nomeCompleto);

// let texto = "Oi"; // String
//let numero = 16; // Number
//let booleano = true; // Boolean
//let nulo = null; // Null
//let indefinido =; // Undefined

// let lista = ['Banana', 'Maçã', 'Laranja'];
// let pessoa = {nome: 'Maria', idade: 16};

// function saudacao(nome){
//     return `Olá, ${nome}`;
// }

// console.log(lista);
// console.log(lista[2]);
// console.log(pessoa.nome, pessoa.idade);
// console.log(pessoa);
// console.log(saudacao('Maria'));


// let idade = 18
// if (idade >= 18) {
// 	console.log("Maior de idade");
// } else {
// 	console.log("Menor de idade");
// }


// let nota = 85;

// if (nota >= 90){
// 	console.log("Aprovdo com A");
// } else if (nota >= 70){
// 	console.log("Aprovado com B");
// } else {
// 	console.log("Reprovado");
// }


// let a = 10;
// let b = 20;

// if (a != b) {
//     console.log('a é diferente de b');

// } else {
//     console.log('a é igual a b');
// }


// let idade = 18
// let mensagem = idade >= 18 ? "Adulto" : "Menor";
// console.log(mensagem);


// let dia = 3;

// switch (dia) {
// 	case 1:
// 		console.log("Segunda");
// 		break;
// 	case 2:
// 		console.log("Terça");
// 		break;
// 	default:
// 		console.log("Outro dia");
// }


// for (let i = 0; i < 5; i ++) {
// 	console.log(i);
// }

// let nome = ["Bia", "Carol", "Helena", "João", "Maria"]
// for (i = 0; i <= 5; i++){
// 	console.log(nome[i]);
// }

// let numeros = [1, 2, 3, 4, 5]
// numeros.forEach(num => console.log(num));

// let contador = 0
// while (contador < 5) {
// 	console.log(contador);
// 	contador++;
// }

// let num = 5;
// do {
// 	console.log(num);
// 	num++;
// } while (num < 3);

// Array

let lista = ["Banana", "Maçã", "Laranja"];
console.log(lista[0]); // Banana

lista.push("Uva"); // Adiciona ao final
lista.pop();// Remove o último
lista.unshift("Manga"); // Adiciona no começo
lista.shift(); // Remove do começo

console.log(lista.includes("Maçã")); // Verifica se tem o item na lista
console.log(lista.indexOf("Laranja")); // Verifica posição na lista
console.log(lista.length); //Tamanho da Array