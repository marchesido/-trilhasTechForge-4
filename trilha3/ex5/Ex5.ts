abstract class Funcionario {
    private nome: string;
    private salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    getNome(): string {
        return this.nome;
    }

    getSalario(): number {
        return this.salario;
    }

    abstract calcularBonus(): number;
}

