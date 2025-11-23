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

class Leao extends Animal {
    caçar(): void {
        console.log("Leão está caçando...");
        this.gastarEnergia(20);             // gasta energia para caçar
        this.comer(30);             // recupera energia ao comer a presa
    }
}

class Passaro extends Animal {
    comerFrutas(): void {
        console.log("Pássaro está comendo frutas...");
        this.comer(10);             // apenas aumenta energia
    }
}

function rotina(animal: Animal): void {             // Função polimórfica
    console.log("Executando rotina do animal...");

    if (animal instanceof Leao) {
        (animal as Leao).caçar();
    } else if (animal instanceof Passaro) {
        (animal as Passaro).comerFrutas();
    }

    animal.statusEnergia();
}

const leao = new Leao(60);              // Teste com polimorfismo
const passaro = new Passaro(40);

rotina(leao);
rotina(passaro);
