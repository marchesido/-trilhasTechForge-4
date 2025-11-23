abstract class FiguraGeometrica {
    abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica {
    raio: number;

    constructor(raio: number) {
        super();
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * this.raio ** 2;
    }
}

class Quadrado extends FiguraGeometrica {
    lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }
}

class Triangulo extends FiguraGeometrica {
    base: number;
    altura: number;

    constructor(base: number, altura: number) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}

function imprimirAreas(figuras: FiguraGeometrica[]): void {         // Função que recebe array de Figuras e imprime área
    figuras.forEach((figura, index) => {
        console.log(`Área da figura ${index + 1}: ${figura.calcularArea()}`);
    });
}

const figuras: FiguraGeometrica[] = [
    new Circulo(6),
    new Quadrado(4),
    new Triangulo(6, 3)
];

imprimirAreas(figuras);
