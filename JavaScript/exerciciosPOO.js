//1- Classe Produto. Crie uma classe Produto com nome, preço e quantidade em estoque. Adicione um método para calcular o valor total do estoque.

// class Produto{
//     constructor(nome, preco, quantidade){
//         this.nome = nome;
//         this.preco = preco;
//         this.quantidade = quantidade;
//     }
//     valorTotalDoEstoque(){
//         return console.log(`O valor do estoque de ${this.nome}: R$ ${this.quantidade * this.preco}`)
//     }
// }
// const produto1 = new Produto ("Boneca", 120, 90);
// produto1.valorTotalDoEstoque()

// const produto2 = new Produto ("Bolsa", 60, 300);
// produto2.valorTotalDoEstoque()


// 2 - Classe Filme. Crie uma classe Filme com título, diretor e ano de lançamento. Adicione um método que exiba uma frase como: "O filme Matrix foi lançado em 1999 e dirigido por Wachowski."

// class Filme{
//     constructor(titulo, diretor, ano){
//         this.titulo = titulo;
//         this.diretor = diretor;
//         this.ano = ano;
//     }
//     mensagem(){
//         return console.log(`O filme "${this.titulo}" foi lançado em ${this.ano} e dirigido por ${this.diretor}.`)
//     }
// }
// const filme1 = new Filme ("O Castelo animado", "Hayao Miyazaki", 2004);
// filme1.mensagem()

// const filme2 = new Filme ("Meu Amigo Totoro", "Hayao Miyazak", 1988);
// filme2.mensagem()


// 3 - Classe Aluno. Crie uma classe Aluno com nome, nota1 e nota2. Adicione um método que calcule a média e outro que diga se o aluno está aprovado (média ≥ 7).

// class Aluno {
//     constructor(nome, nota1, nota2){
//         this.nome = nome;
//         this.nota1 = nota1;
//         this.nota2 = nota2;
//     }
//     media(){
//         const nota = (this.nota1 + this.nota2) / 2;
//         if (nota >= 7){
//             return console.log (` ${this.nome} foi aprovado com nota ${nota}.`)
//         } else{
//             return console.log (` ${this.nome} foi reprovado com nota ${nota}.`)
//         }
//     }
// }

// const aluno1 = new Aluno ("Maria", 7, 9);
// aluno1.media();

// const aluno2 = new Aluno("Amanda", 6, 7);
// aluno2.media();


// 4 - Classe Retângulo. Crie uma classe Retangulo com base e altura. Adicione métodos para calcular a área e o perímetro.

// class Retangulo{
//     constructor(base, altura){
//         this.base = base;
//         this.altura = altura;
//     }
//     calculos(){
//         const area = this.base * this.altura;
//         const perimetro = 2 * (this.base + this.altura);
//         return console.log(`A área do retângulo é ${area} e o perímetro é ${perimetro}`);
//     }
// }
// const retangulo1 = new Retangulo(10, 15);
// retangulo1.calculos();


// 5 - Classe Carro. Criar uma classe que simule o funcionamento de um carro em relação ao consumo de combustível. O carro terá: marca e modelo → atributos de identificação. combustível → quantidade de litros no tanque. E dois comportamentos principais: abastecer(litros) → aumenta a quantidade de combustível no tanque. dirigir(km) → simula o gasto de combustível ao rodar determinada distância(consumo: 1 litro a cada 10 km).

// class Carro{
//     constructor(marca, modelo, combustivel){
//         this.marca = marca;
//         this.modelo = modelo;
//         this.combustivel = combustivel;
//     } 
//     abastecer(litros){
//         this.combustivel += litros;
//         console.log(`O tanque do ${this.marca} ${this.modelo} foi abastecido com ${litros} litros. Total de combustível: ${this.combustivel} litros.`);
//     }
//     dirigir(km){
//         const consumo = km / 10;
//         if (consumo > this.combustivel){
//             console.log(`Combustível insuficiente para dirigir ${km} km. Você pode dirigir apenas ${this.combustivel * 10} km.`);
//         } else {
//             this.combustivel -= consumo;
//             console.log(`Foi andado ${km} km. Combustível restante: ${consumo} litros.`);
//         }
// }
// }
// const carro1 = new Carro("Toyota", "Corolla", 10);
// carro1.abastecer(50);
// carro1.dirigir(200);

// const carro2 = new Carro("Ford", "Focus", 15);
// carro2.abastecer(30);
// carro2.dirigir(130);