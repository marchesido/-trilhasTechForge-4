var Temperatura = /** @class */ (function () {
    function Temperatura(valor) {
        this.valor = valor;
    }
    Temperatura.prototype.paraFahrenheit = function () {
        return (this.valor * 9 / 5) + 32;
    };
    Temperatura.prototype.paraKelvin = function () {
        return this.valor + 273.15;
    };
    return Temperatura;
}());
// Exemplo de uso
var temp = new Temperatura(35);
console.log("Fahrenheit:", temp.paraFahrenheit());
console.log("Kelvin:", temp.paraKelvin());
