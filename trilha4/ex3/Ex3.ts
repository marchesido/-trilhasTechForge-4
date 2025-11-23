interface ProdutoLoja {
  codigo: number;
  nome: string;
}

class Loja {
  private produtos: ProdutoLoja[];

  constructor(produtos: ProdutoLoja[] = []) {
    this.produtos = produtos;
  }

  buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {         // Método para buscar produto por código
    return this.produtos.find(produto => produto.codigo === codigo);
  }

  adicionarProduto(produto: ProdutoLoja): void {             // Método auxiliar para adicionar produtos
    this.produtos.push(produto);
  }

  listarProdutos(): ProdutoLoja[] {         // Método auxiliar para listar todos os produtos
    return this.produtos;
  }
}

const loja = new Loja([
  { codigo: 1, nome: "Sony A6700" },
  { codigo: 2, nome: "Lente Sigma 16mm" },
  { codigo: 3, nome: "Camera Sony A7 IV" }
]);

const produto1 = loja.buscarProdutoPorCodigo(2);            // Buscando produtos
console.log(produto1);

const produto2 = loja.buscarProdutoPorCodigo(99);
console.log(produto2);

loja.adicionarProduto({ codigo: 4, nome: "Camera Canon R6" });

const produto3 = loja.buscarProdutoPorCodigo(4);
console.log(produto3);