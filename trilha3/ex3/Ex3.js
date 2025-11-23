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
// Classe base
var Pagamento = /** @class */ (function () {
    function Pagamento() {
    }
    Pagamento.prototype.processar = function () {
        console.log("Processando pagamento genérico...");
    };
    return Pagamento;
}());
var PagamentoCartao = /** @class */ (function (_super) {
    __extends(PagamentoCartao, _super);
    function PagamentoCartao(numeroCartao) {
        var _this = _super.call(this) || this;
        _this.numeroCartao = numeroCartao;
        return _this;
    }
    PagamentoCartao.prototype.validarCartao = function () {
        return /^\d{16}$/.test(this.numeroCartao);
    };
    PagamentoCartao.prototype.processar = function () {
        if (this.validarCartao()) {
            console.log("Pagamento com cart\u00E3o aprovado! N\u00FAmero: ".concat(this.numeroCartao));
        }
        else {
            console.log("Número do cartão inválido!");
        }
    };
    return PagamentoCartao;
}(Pagamento));
var PagamentoBoleto = /** @class */ (function (_super) {
    __extends(PagamentoBoleto, _super);
    function PagamentoBoleto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PagamentoBoleto.prototype.gerarCodigoBoleto = function () {
        //  (simulação) Geração simples de um código de boleto
        return Math.floor(Math.random() * 1000000000000).toString().padStart(12, "0");
    };
    PagamentoBoleto.prototype.processar = function () {
        var codigo = this.gerarCodigoBoleto();
        console.log("Boleto gerado com sucesso! C\u00F3digo: ".concat(codigo));
    };
    return PagamentoBoleto;
}(Pagamento));
function realizarPagamento(pag) {
    pag.processar();
}
var pagamento1 = new PagamentoCartao("1234567812345678"); // Teste
var pagamento2 = new PagamentoBoleto();
realizarPagamento(pagamento1);
realizarPagamento(pagamento2);
