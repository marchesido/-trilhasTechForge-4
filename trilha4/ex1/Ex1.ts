interface Produto {
  id: number;
  nome: string;
  preco: number;
}

class ItemLoja implements Produto {
  id: number;
  nome: string;
  preco: number;

  constructor(id: number, nome: string, preco: number) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
  }
}

const item1 = new ItemLoja(1, "Camera Sony Alpha A6000", 2499.99);
const item2 = new ItemLoja(2, "Cartão de memória", 45.90);

console.log(item1);
console.log(item2);