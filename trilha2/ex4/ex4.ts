class Temperatura {
    valor: number; // valor que deve ser inserido em Celsius

    constructor(valor: number) {
        this.valor = valor;
    }

    paraFahrenheit(): number {
        return (this.valor * 9/5) + 32;
    }

    paraKelvin(): number {
        return this.valor + 273.15;
    }
}


const temp = new Temperatura(35);           // Exemplo de como usar
console.log("Fahrenheit:", temp.paraFahrenheit());
console.log("Kelvin:", temp.paraKelvin());
