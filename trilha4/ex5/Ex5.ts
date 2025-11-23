interface LivroBiblioteca {
  titulo: string;
  autor: string;
  genero: string;
  disponivel: boolean;
}

class BibliotecaGestao {      // Classe para gerenciar a biblioteca
  private livros: LivroBiblioteca[];

  constructor(livros: LivroBiblioteca[] = []) {
    this.livros = livros;
  }

  adicionarLivro(livro: LivroBiblioteca): void {      // Adicionar um livro à biblioteca
    this.livros.push(livro);
  }

  filtrarPorGenero(genero: string): LivroBiblioteca[] {       // Filtrar livros por gênero
    return this.livros.filter(
      livro => livro.genero.toLowerCase() === genero.toLowerCase()
    );
  }

  buscarPorAutor(autor: string): LivroBiblioteca[] {        // Buscar livros por autor
    return this.livros.filter(
      livro => livro.autor.toLowerCase() === autor.toLowerCase()
    );
  }

  obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {        // Obter livros disponíveis ordenados alfabeticamente
    return this.livros
      .filter(livro => livro.disponivel)
      .sort((a, b) => a.titulo.localeCompare(b.titulo));
  }

  // Método auxiliar para listar todos os livros
  listarTodos(): LivroBiblioteca[] {
    return [...this.livros];
  }
}

const biblioteca = new BibliotecaGestao();

biblioteca.adicionarLivro({
  titulo: "1984",
  autor: "George Orwell",
  genero: "Ficção Científica",
  disponivel: true
});

biblioteca.adicionarLivro({
  titulo: "A Revolução dos Bichos",
  autor: "George Orwell",
  genero: "Fábula",
  disponivel: false
});

biblioteca.adicionarLivro({
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  genero: "Fantasia",
  disponivel: true
});

biblioteca.adicionarLivro({
  titulo: "O Hobbit",
  autor: "J.R.R. Tolkien",
  genero: "Fantasia",
  disponivel: true
});

biblioteca.adicionarLivro({
  titulo: "Fundação",
  autor: "Isaac Asimov",
  genero: "Ficção Científica",
  disponivel: false
});

biblioteca.adicionarLivro({
  titulo: "Admirável Mundo Novo",
  autor: "Aldous Huxley",
  genero: "Ficção Científica",
  disponivel: true
});

console.log("=== LIVROS DE FICÇÃO CIENTÍFICA ===");
console.log(biblioteca.filtrarPorGenero("Ficção Científica"));

console.log("\n=== LIVROS DE GEORGE ORWELL ===");
console.log(biblioteca.buscarPorAutor("George Orwell"));

console.log("\n=== LIVROS DISPONÍVEIS (ORDENADOS) ===");
console.log(biblioteca.obterLivrosDisponiveisOrdenados());