var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var BibliotecaGestao = /** @class */ (function () {
    function BibliotecaGestao(livros) {
        if (livros === void 0) { livros = []; }
        this.livros = livros;
    }
    BibliotecaGestao.prototype.adicionarLivro = function (livro) {
        this.livros.push(livro);
    };
    BibliotecaGestao.prototype.filtrarPorGenero = function (genero) {
        return this.livros.filter(function (livro) { return livro.genero.toLowerCase() === genero.toLowerCase(); });
    };
    BibliotecaGestao.prototype.buscarPorAutor = function (autor) {
        return this.livros.filter(function (livro) { return livro.autor.toLowerCase() === autor.toLowerCase(); });
    };
    BibliotecaGestao.prototype.obterLivrosDisponiveisOrdenados = function () {
        return this.livros
            .filter(function (livro) { return livro.disponivel; })
            .sort(function (a, b) { return a.titulo.localeCompare(b.titulo); });
    };
    // Método auxiliar para listar todos os livros
    BibliotecaGestao.prototype.listarTodos = function () {
        return __spreadArray([], this.livros, true);
    };
    return BibliotecaGestao;
}());
var biblioteca = new BibliotecaGestao();
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
