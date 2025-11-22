class Produto {
    nome: string;
    preco: number;
    quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    valorTotalEstoque(): string {
        const total = (this.preco * this.quantidade).toFixed(2);
        return `O valor total em estoque é de: ${total} R$`;
    }
}

const produto1 = new Produto("Mouse", 150, 18);
console.log(produto1.valorTotalEstoque());

const produto2 = new Produto("Teclado", 250, 20);
console.log(produto2.valorTotalEstoque());

const produto3 = new Produto("MousePad", 50, 15);
console.log(produto3.valorTotalEstoque());

const produto4 = new Produto("Headset", 200, 20);
console.log(produto3.valorTotalEstoque());