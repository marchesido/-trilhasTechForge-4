class ContaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldoInicial: number = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void {
        if (valor <= 0) {
            console.log("O valor do depósito deve ser positivo.");
            return;
        }
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    }

    sacar(valor: number): void {
        if (valor <= 0) {
            console.log("O valor do saque deve ser positivo.");
            return;
        }
        if (valor > this.saldo) {
            console.log("Saldo insuficiente para realizar o saque.");
            return;
        }
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    }
}

const conta = new ContaBancaria("Douglas", 100);
conta.depositar(150);
conta.sacar(30);

const conta2 = new ContaBancaria("Evelyn", 200);
conta.depositar(250);
conta.sacar(60);