var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(energiaInicial) {
        if (energiaInicial === void 0) { energiaInicial = 50; }
        this.energia = energiaInicial;
    }
    Animal.prototype.comer = function (valor) {
        this.energia += valor;
    };
    Animal.prototype.gastarEnergia = function (valor) {
        this.energia -= valor;
        if (this.energia < 0)
            this.energia = 0;
    };
    Animal.prototype.statusEnergia = function () {
        console.log("Energia atual: ".concat(this.energia));
    };
    return Animal;
}());
var Leao = /** @class */ (function (_super) {
    __extends(Leao, _super);
    function Leao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Leao.prototype.caçar = function () {
        console.log("Leão está caçando...");
        this.gastarEnergia(20); // gasta energia para caçar
        this.comer(30); // recupera energia ao comer a presa
    };
    return Leao;
}(Animal));
var Passaro = /** @class */ (function (_super) {
    __extends(Passaro, _super);
    function Passaro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Passaro.prototype.comerFrutas = function () {
        console.log("Pássaro está comendo frutas...");
        this.comer(10); // apenas aumenta energia
    };
    return Passaro;
}(Animal));
function rotina(animal) {
    console.log("Executando rotina do animal...");
    if (animal instanceof Leao) {
        animal.caçar();
    }
    else if (animal instanceof Passaro) {
        animal.comerFrutas();
    }
    animal.statusEnergia();
}
var leao = new Leao(60); // Teste com polimorfismo
var passaro = new Passaro(40);
rotina(leao);
rotina(passaro);
