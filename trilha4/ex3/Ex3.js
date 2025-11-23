var Loja = /** @class */ (function () {
    function Loja(produtos) {
        if (produtos === void 0) { produtos = []; }
        this.produtos = produtos;
    }
    Loja.prototype.buscarProdutoPorCodigo = function (codigo) {
        return this.produtos.find(function (produto) { return produto.codigo === codigo; });
    };
    Loja.prototype.adicionarProduto = function (produto) {
        this.produtos.push(produto);
    };
    Loja.prototype.listarProdutos = function () {
        return this.produtos;
    };
    return Loja;
}());
var loja = new Loja([
    { codigo: 1, nome: "Sony A6700" },
    { codigo: 2, nome: "Lente Sigma 16mm" },
    { codigo: 3, nome: "Camera Sony A7 IV" }
]);
var produto1 = loja.buscarProdutoPorCodigo(2); // Buscando produtos
console.log(produto1);
var produto2 = loja.buscarProdutoPorCodigo(99);
console.log(produto2);
loja.adicionarProduto({ codigo: 4, nome: "Camera Canon R" });
var produto3 = loja.buscarProdutoPorCodigo(4);
console.log(produto3);
