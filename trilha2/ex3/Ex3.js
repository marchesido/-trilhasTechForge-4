var Produto = /** @class */ (function () {
    function Produto(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    Produto.prototype.valorTotalEstoque = function () {
        var total = (this.preco * this.quantidade).toFixed(2);
        return "O valor total em estoque \u00E9 de: ".concat(total, " R$");
    };
    return Produto;
}());
var produto1 = new Produto("Mouse", 150, 18);
console.log(produto1.valorTotalEstoque());
var produto2 = new Produto("Teclado", 250, 20);
console.log(produto2.valorTotalEstoque());
var produto3 = new Produto("MousePad", 50, 15);
console.log(produto3.valorTotalEstoque());
var produto4 = new Produto("Headset", 200, 20);
console.log(produto3.valorTotalEstoque());
