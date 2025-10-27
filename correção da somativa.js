// correção da questão 1
// na minha prova somativa essa questão ficou correta
const candidatos = {
    ana: true,
    bruno: false,
    carla: true,
    daniel: false
};
function verificarCandidato(nome, callback){
    return callback(nome)
};
function conferir(nome){
    if(candidatos[nome]){
        return `Candidato aprovado para a próxima fase.`
    } else{
        return `Candidato reprovado.`
    }
}
console.log(verificarCandidato("ana", conferir));
console.log(verificarCandidato("bruno", conferir));


// correção da questão 2
// minha questão na somativa ficou correta também (eu acho)
class Colaborador{
    constructor(nome, cargo, salario){
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    aumentarSalario(percentual){
        this.salario += this.salario * percentual / 100
    }
    exibirDados(){
        return `
        Nome: ${this.nome};
        Cargo: ${this.cargo};
        Salário: R$ ${this.salario}.`
    }
}
const colaborador = new Colaborador("Zuleica", "Caixa", 1500);
colaborador.aumentarSalario(10)
console.log(colaborador.exibirDados())

const colaborador1 = new Colaborador("Zeca", "Cientista", 5500);
colaborador1.aumentarSalario(15)
console.log(colaborador1.exibirDados())


// correção da questão 3
// minha prova somativa ficou correto também (eu acho)
class FolhaDePagamento{
    constructor(nomeColaborador, cargo, salarioBase, diasTrabalhados){
        this.nomeColaborador = nomeColaborador;
        this.cargo = cargo;
        this.salarioBase = salarioBase;
        this.diasTrabalhados = diasTrabalhados;
    }
    calcularSalarioMensal(){
        return this.salarioBase / 30 * this.diasTrabalhados
    }
    resumoPagamento(){
        return `
        Nome Colaborador: ${this.nomeColaborador};
        Cargo: ${this.cargo};
        Salário Base: R$ ${this.salarioBase};
        Dias Trabalhados: ${this.diasTrabalhados};
        Salário Mensal: R$ ${this.calcularSalarioMensal().toFixed(2)}
        `   
    }
}
const novaFolhaDePagamento = new FolhaDePagamento("Carla", "Médica", 10000, 36)
console.log(novaFolhaDePagamento.resumoPagamento())


// correção da questão 4
// nessa questão eu tive dúvida no que é o tipo. Fiquei sem uma parte da nota, pois desconsiderei fazer o if dos 15%. Perdi parte da nota por causa do if somente. o resto ta td certo
class Contrato{
    constructor(colaborador, dataInicio, tipo, salarioBase){
        this.colaborador = colaborador;
        this.dataInicio = dataInicio;
        this.tipo = tipo;
        this.salarioBase = salarioBase;
    }
    calcularSalario(){
        return this.salarioBase
    }
}
class CLT extends Contrato{
    constructor(colaborador, dataInicio, tipo, salarioBase, bonus){
        super(colaborador, dataInicio, tipo, salarioBase)
        this.bonus = bonus;
    }
    calcularSalario(){
        if(this.bonus < 15){
        return this.salarioBase += this.salarioBase * this.bonus / 100
        } else {
            return this.salarioBase += this.salarioBase*0.15
        }
    }
    detalhesDoContrato(){
        return`
        Colaborador: ${this.colaborador};
        Data de Início: ${this.dataInicio};
        Tipo: ${this.tipo};
        Salário Base: R$ ${this.salarioBase};
        Bônus: ${this.bonus}%
        Salário Total: R$ ${this.calcularSalario()}.
        `
    }
}
class Estagiario extends Contrato{
    constructor(colaborador, dataInicio, tipo, salarioBase, horasSemanais){
        super(colaborador, dataInicio, tipo, salarioBase)
        this.horasSemanais = horasSemanais;
    }
    calcularSalario(){
        return this.salarioBase + this.horasSemanais * 20
    }
    detalhesDoContrato(){
        return`
        Colaborador: ${this.colaborador};
        Data de Início: ${this.dataInicio};
        Tipo: ${this.tipo};
        Salário Base: R$ ${this.salarioBase};
        Horas Semanais: ${this.horasSemanais};
        Salário Total: R$ ${this.calcularSalario()}.
        `
    }
}
const novoClt = new CLT("Vanessa", "12/01/2012", "CLT", 1520, 10)
console.log(novoClt.detalhesDoContrato())
const novoEstagiario = new Estagiario("Bruna", "23/04/2012", "Estagiário", 2000, 40)
console.log(novoEstagiario.detalhesDoContrato())


// correção da questão 5
// utilizei constructor nas classes filhas, mas o professor disse que não tem problema. Acho que minha questão ficou correta.
class Funcionario{
    constructor(nome,salarioBase){
        this.nome = nome;
        this.salarioBase = salarioBase;
    }
    calcularSalario(){
        return this.salarioBase
    }
}
class AssistenteRH extends Funcionario{
    constructor(nome, salarioBase){
        super(nome, salarioBase)
    }
    calcularSalario(){
        return this.salarioBase + this.salarioBase * 0.05
    }
}
class AnalistaRH extends Funcionario{
    constructor(nome, salarioBase){
        super(nome, salarioBase)
    }
    calcularSalario(){
        return this.salarioBase + this.salarioBase * 0.15
    }
}
class GerenteRH extends Funcionario{
    constructor(nome, salarioBase){
        super(nome, salarioBase)
    }
    calcularSalario(){
        return this.salarioBase + 3000
    }
}
const funcionariosRH = [
    new AssistenteRH("Nicole", 1600),
    new AnalistaRH("Maria", 1500),
    new GerenteRH("Amanda", 1615),
    new AssistenteRH("Simone",1650),
    new GerenteRH("Daniel", 1680)
];

funcionariosRH.forEach(f => {
    console.log(`${f.nome} - Salário: ${f.calcularSalario().toFixed(2)}`)
});


// correção da questão 6
// utilizei return nos métodos, o professor disse que não precisa mas eu coloquei. Acho que essa foi correta também.
class BancoDeHoras{
    #horas
    colaborador
    constructor(horas, colaborador){
        this.#horas = horas;
        this.colaborador = colaborador;
    }
    adicionarHoras(qtd){
        this.#horas += qtd
    }
    retirarHoras(qtd){
        this.#horas -= qtd
    }
    consultarHoras(){
        return `
        Nome: ${this.colaborador};
        Horas: ${this.#horas}hrs.`
    }
}
const novoColaborador = new BancoDeHoras(3, "Kátia")
novoColaborador.adicionarHoras(10)
console.log(novoColaborador.consultarHoras())
novoColaborador.retirarHoras(5)
console.log(novoColaborador.consultarHoras())