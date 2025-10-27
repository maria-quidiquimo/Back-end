// Funções Declaradas

// console.log(`O resultado da soma é: ${soma(5, 3)}`)

// function soma (a, b){
// 	return a + b
// }

// Funções Expressas

// const soma = function(a, b){
// 	return a + b
// }
// // let resultado = soma(4, 4)
// console.log(`O resultado da soma é: ${soma(4, 4)}`)

// Funções Anônimas

// let soma1 = function (a, b){
// 	return a+b
// }
// console.log(`O resultado da soma é ${soma1(3, 3)}`)

// // Arrow Functions

// let soma = (a, b) => {return a + b}
// console.log(`O resultado da soma é ${soma(7, 7)}`)

// Arrow Imediatas IIFE

// (function(){
// 	return console.log("Hello World!")
// })()

// Funções de Callbacks

// function executarCallback(callback){
// 	callback()
// }
// executarCallback(() => {console.log('Callback Executado')})

//  exemplo 2

function executarOperacao(a, b, callback) {
	return callback(a, b);
}
function soma (x, y){
	return x + y;
}
function multiplica(x, y){
	return x * y
}
console.log(executarOperacao(2, 3, soma)); // 5
console.log(executarOperacao(2, 3, multiplica)); // 6

// Função Recursiva

// function fatorial(n){
// 	if (n === 0 || n === 1){
// 		return 1;
// 	} else {
// 			return n * fatorial(n - 1)
// 	}
// }
// console.log(fatorial(3));

// Funções Assíncronas 

// async function buscarDados() {
// 	console.log("Iniciando a busca...");

// 	const resposta = await fetch("https://viacep.com.br/ws/13322230/json/");
// 	const dados = await resposta.json();

// 	console.log("Dados recebidos:", dados);

// }

// buscarDados();
// console.log("Essa resposta aparece antes da resposta da API!")