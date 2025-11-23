var ItemLoja = /** @class */ (function () {
    function ItemLoja(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
    return ItemLoja;
}());
var item1 = new ItemLoja(1, "Camera Sony Alpha A6000", 2500.00);
var item2 = new ItemLoja(2, "Cartão de memória", 45.90);
console.log(item1);
console.log(item2);
