interface Livro {
  titulo: string;
  autor: string;
  disponivel: boolean;
}

class Biblioteca {
  private livros: Livro[];

  constructor() {
    this.livros = [];
  }

  adicionarLivro(livro: Livro): void {
    this.livros.push(livro);
  }

  buscarLivrosDisponiveis(): Livro[] {
    return this.livros.filter(livro => livro.disponivel);
  }

  obterTodosLivros(): Livro[] {
    return this.livros;
  }
}

const bibliotecaEx4 = new Biblioteca();

bibliotecaEx4.adicionarLivro({
  titulo: "Dom Casmurro",
  autor: "Machado de Assis",
  disponivel: true
});

bibliotecaEx4.adicionarLivro({
  titulo: "1984",
  autor: "George Orwell",
  disponivel: false
});

bibliotecaEx4.adicionarLivro({
  titulo: "O Pequeno Príncipe",
  autor: "Antoine de Saint-Exupéry",
  disponivel: true
});

bibliotecaEx4.adicionarLivro({
  titulo: "Harry Potter e a Pedra Filosofal",
  autor: "J.K. Rowling",
  disponivel: false
});

bibliotecaEx4.adicionarLivro({
  titulo: "Cem Anos de Solidão",
  autor: "Gabriel García Márquez",
  disponivel: true
});

console.log("=== LIVROS DISPONÍVEIS ===");          // Testando o método buscarLivrosDisponiveis()
const livrosDisponiveis = bibliotecaEx4.buscarLivrosDisponiveis();
livrosDisponiveis.forEach(livro => {
  console.log(`- ${livro.titulo} (${livro.autor})`);
});

console.log("\n=== TODOS OS LIVROS ===");
const todosLivros = bibliotecaEx4.obterTodosLivros();
todosLivros.forEach(livro => {
  const status = livro.disponivel ? "✓ Disponível" : "✗ Emprestado";
  console.log(`${status} - ${livro.titulo} (${livro.autor})`);
});