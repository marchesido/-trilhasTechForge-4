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
var FiguraGeometrica = /** @class */ (function () {
    function FiguraGeometrica() {
    }
    return FiguraGeometrica;
}());
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(raio) {
        var _this = _super.call(this) || this;
        _this.raio = raio;
        return _this;
    }
    Circulo.prototype.calcularArea = function () {
        return Math.PI * Math.pow(this.raio, 2);
    };
    return Circulo;
}(FiguraGeometrica));
var Quadrado = /** @class */ (function (_super) {
    __extends(Quadrado, _super);
    function Quadrado(lado) {
        var _this = _super.call(this) || this;
        _this.lado = lado;
        return _this;
    }
    Quadrado.prototype.calcularArea = function () {
        return this.lado * this.lado;
    };
    return Quadrado;
}(FiguraGeometrica));
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(base, altura) {
        var _this = _super.call(this) || this;
        _this.base = base;
        _this.altura = altura;
        return _this;
    }
    Triangulo.prototype.calcularArea = function () {
        return (this.base * this.altura) / 2;
    };
    return Triangulo;
}(FiguraGeometrica));
function imprimirAreas(figuras) {
    figuras.forEach(function (figura, index) {
        console.log("\u00C1rea da figura ".concat(index + 1, ": ").concat(figura.calcularArea()));
    });
}
var figuras = [
    new Circulo(6),
    new Quadrado(4),
    new Triangulo(6, 3)
];
imprimirAreas(figuras);
