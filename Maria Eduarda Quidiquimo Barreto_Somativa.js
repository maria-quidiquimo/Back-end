// 1 - Função com Callback – Verificação de Candidatos

const candidatos = {
    ana: true,
    bruno: false,
    carla: true,
    daniel: false
};
function verificarCandidato(nome, callback){
    return callback(nome, candidatos);
}
function conferir(nome){
    if(candidatos[nome]){
        return `Candidato aprovado para a próxima fase`
    } else{ 
        return `Candidato Reprovado`
    }

}
console.log(verificarCandidato("carla", conferir));
console.log(verificarCandidato("daniel", conferir));


// 2 - Classe Simples – Colaborador

class Colaborador{
    constructor(nome, cargo, salario){
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    aumentarSalario(percentual){
        return this.salario * (percentual + 100)/100
    }
    exibirDados(){
        return `${this.nome} - Cargo: ${this.cargo} - Salário: R$${this.aumentarSalario(10)}`
    }
}
const colab = new Colaborador("Paula", "Gerente", 5000)
colab.aumentarSalario()
console.log(colab.exibirDados())


// 3 - Classe Simples – Folha de Pagamento

class FolhaDePagamento{
    constructor(nomeColaborador, cargo, salarioBase, diasTrabalhados){
        this.nomeColaborador = nomeColaborador;
        this.cargo = cargo;
        this.salarioBase = salarioBase;
        this.diasTrabalhados = diasTrabalhados;
    }
    calcularSalarioMensal(){
        return this.salarioBase / 30 * this.diasTrabalhados;
    }
    resumoPagamento(){
        return `
        Nome: ${this.nomeColaborador} 
        Cargo: ${this.cargo}
        Dias trabalhados: ${this.diasTrabalhados}
        Valor a receber: R$${this.calcularSalarioMensal().toFixed(2)}
        `
    }
}
const colaborador = new FolhaDePagamento("Olivia", "Química", 5000, 50)
console.log(colaborador.calcularSalarioMensal())
console.log(colaborador.resumoPagamento())


// 4 - Herança – Tipos de Contrato

class Contrato{
    constructor(colaborador, dataInicio, tipo, salarioBase){
        this.colaborador = colaborador;
        this.dataInicio = dataInicio;
        this.tipo = tipo;
        this.salarioBase = salarioBase;
    }
    calcularSalario(){
        return this.salarioBase;
    }
}
class CLT extends Contrato{
    constructor(colaborador, dataInicio, tipo, salarioBase, bonus){
        super(colaborador, dataInicio, tipo, salarioBase)
        this.bonus = bonus;
    }
    calcularSalario(){
        return  this.salarioBase * (this.bonus + 100)/ 100
    }
    detalhesContrato(){
         return`
        Nome: ${this.colaborador}
        Data de início: ${this.dataInicio}
        Tipo: ${this.tipo}
        Bônus: ${this.bonus}%
        Valor do salário: ${this.calcularSalario().toFixed(2)}`
    }
}
class Estagiario extends Contrato{
     constructor(colaborador, dataInicio, tipo, salarioBase, horaExtra){
        super(colaborador, dataInicio, tipo, salarioBase)
        this.horaExtra = horaExtra;
    }
    calcularSalario(){
        return this.salarioBase + this.horaExtra * 20
    }
    detalhesContrato(){
        return`
        Nome: ${this.colaborador}
        Data de início: ${this.dataInicio}
        Tipo: ${this.tipo}
        Valor do salário: ${this.calcularSalario().toFixed(2)}`
    }
}
const estagiario = new Estagiario("Iolanda", "12 de Janeiro", "Estágio", 1500, 2)
console.log(estagiario.calcularSalario())
console.log(estagiario.detalhesContrato())

const clt = new CLT("Ursula", "21 de Agosto", "CLT", 1700, 10)
console.log(clt.calcularSalario())
console.log(clt.detalhesContrato())


// 5 - Herança + Polimorfismo – Cargos e Bonificações

class Funcionario{
    constructor(nome, salarioBase){
        this.nome = nome;
        this.salarioBase = salarioBase;
    }
    calcularSalario(){

    }
}
class AssistenteRH extends Funcionario{
    constructor(nome, salarioBase){
        super(nome, salarioBase)
    }
    calcularSalario(){
        return this.salarioBase * 105/100 
    }
}
class AnalistaRH extends Funcionario{
    constructor(nome, salarioBase){
        super(nome, salarioBase)
    }
    calcularSalario(){
        return this.salarioBase * 115/100
    }
}
class GerenteRH extends Funcionario{
    constructor (nome, salarioBase){
        super(nome, salarioBase)
    }
    calcularSalario(){
        return this.salarioBase + 3000
    }
}
const funcionario = [
    new AssistenteRH("Yasmin", 1800),
    new AnalistaRH("Tainá", 2000),
    new GerenteRH("Renata", 2500),
    new AssistenteRH("Eduardo", 1800),
    new AnalistaRH("Willian", 2100)
];

funcionario.forEach(f => {
    console.log(`${f.nome} - Salário: ${f.calcularSalario().toFixed(2)}`)
});


// 6 - Encapsulamento – Banco de Horas

class BancoDeHoras{
    #horas
    colaborador
    constructor(horas, colaborador){
        this.#horas = horas;
        this.colaborador = colaborador;
    }
    adicionarHoras(qtd){
        return this.#horas += qtd
    }
    retirarHoras(qtd){
        return this.#horas -= qtd 
    }
    consultarHoras(){
        return `${this.colaborador} : ${this.#horas}hrs`
    }
    conferir(){
        if(this.#horas < 0){
            return"Resultado inválido. Horas abaixo de 0"
        } return " "
    }
}
const colaborador1 = new BancoDeHoras(6, "Luisa");
colaborador1.adicionarHoras(2);
colaborador1.retirarHoras(1);
colaborador1.consultarHoras()
console.log(colaborador1.consultarHoras());
colaborador1.conferir()
console.log(colaborador1.conferir())