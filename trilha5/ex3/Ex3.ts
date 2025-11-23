abstract class FavoriteManager {
  protected favorites: string[] = [];

  abstract addFavorite(item: string): void;          // Método abstrato para adicionar um favorito

  abstract getFavorites(): string[];              // Método abstrato para obter a lista de favoritos
}

class MoviesFavoriteManager extends FavoriteManager {           // Gerenciador de filmes favoritos
  // Adiciona um filme sem permitir duplicatas
  addFavorite(item: string): void {
    if (!this.favorites.includes(item)) {
      this.favorites.push(item);
    }
  }

  getFavorites(): string[] {              // Retorna a lista de filmes em ordem alfabética
    return [...this.favorites].sort();
  }
}

class BooksFavoriteManager extends FavoriteManager {            // Gerenciador de livros favoritos

  addFavorite(item: string): void {         // Adiciona um livro no início da lista
    this.favorites.unshift(item);
  }

  getFavorites(): string[] {
    return [...this.favorites];
  }
}

console.log("=== FILMES FAVORITOS ===");
const movieManager = new MoviesFavoriteManager();
movieManager.addFavorite("Inception");
movieManager.addFavorite("The Matrix");
movieManager.addFavorite("Interstellar");
movieManager.addFavorite("The Matrix"); // Duplicata - não será adicionado
movieManager.addFavorite("Avatar");

console.log("Filmes (ordem alfabética):");
console.log(movieManager.getFavorites());

console.log("\n=== LIVROS FAVORITOS ===");
const bookManager = new BooksFavoriteManager();
bookManager.addFavorite("1984");
bookManager.addFavorite("O Senhor dos Anéis");
bookManager.addFavorite("Harry Potter");
bookManager.addFavorite("Dom Casmurro");

console.log("Livros (último adicionado no início):");
console.log(bookManager.getFavorites());