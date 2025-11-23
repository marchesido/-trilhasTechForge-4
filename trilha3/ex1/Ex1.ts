class Veiculo {
    mover(): void {
        console.log("O veículo está se movendo");
    }
}

class Carro extends Veiculo {
    mover(): void {
        console.log("O carro está dirigindo");
    }
}

class Bicicleta extends Veiculo {
    mover(): void {
        console.log("A bicicleta está pedalando");
    }
}

console.log("=== Testando Polimorfismo ===\n");

const veiculo = new Veiculo();
veiculo.mover();

const carro = new Carro();
carro.mover();

const bicicleta = new Bicicleta();
bicicleta.mover();

console.log("\n=== Array de Veículos ===\n");

const veiculos: Veiculo[] = [
    new Veiculo(),
    new Carro(),
    new Bicicleta()
];

veiculos.forEach((v, index) => {
    console.log(`Veículo ${index + 1}:`);
    v.mover();
});