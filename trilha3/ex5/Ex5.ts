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

class Gerente extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.10; // 10%
    }
}

class Operario extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.05; // 5%
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {           // Função que usa polimorfismo
    funcionarios.forEach(func => {
        const bonus = func.calcularBonus();
        const salarioFinal = func.getSalario() + bonus;

        console.log(
            `${func.getNome()} — Salário base: R$ ${func.getSalario().toFixed(2)}, ` +
            `Bônus: R$ ${bonus.toFixed(2)}, ` +
            `Salário final: R$ ${salarioFinal.toFixed(2)}`
        );
    });
}

const funcionarios: Funcionario[] = [   // Testando
    new Gerente("Alice", 5000),
    new Operario("Bruno", 2000),
    new Operario("Carla", 3500),
    new Gerente("Daniel", 30000)
];

calcularSalarioComBonus(funcionarios);
