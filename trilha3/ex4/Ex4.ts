class Animal {
    private energia: number;

    constructor(energiaInicial: number = 50) {
        this.energia = energiaInicial;
    }

    protected comer(valor: number): void {
        this.energia += valor;
    }

    protected gastarEnergia(valor: number): void {
        this.energia -= valor;
        if (this.energia < 0) this.energia = 0;
    }

    statusEnergia(): void {
        console.log(`Energia atual: ${this.energia}`);
    }
}
