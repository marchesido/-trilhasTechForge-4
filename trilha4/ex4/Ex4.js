var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.livros = [];
    }
    Biblioteca.prototype.adicionarLivro = function (livro) {
        this.livros.push(livro);
    };
    Biblioteca.prototype.buscarLivrosDisponiveis = function () {
        return this.livros.filter(function (livro) { return livro.disponivel; });
    };
    Biblioteca.prototype.obterTodosLivros = function () {
        return this.livros;
    };
    return Biblioteca;
}());
var bibliotecaEx4 = new Biblioteca();
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
console.log("=== LIVROS DISPONÍVEIS ==="); // Testando o método buscarLivrosDisponiveis()
var livrosDisponiveis = bibliotecaEx4.buscarLivrosDisponiveis();
livrosDisponiveis.forEach(function (livro) {
    console.log("- ".concat(livro.titulo, " (").concat(livro.autor, ")"));
});
console.log("\n=== TODOS OS LIVROS ===");
var todosLivros = bibliotecaEx4.obterTodosLivros();
todosLivros.forEach(function (livro) {
    var status = livro.disponivel ? "✓ Disponível" : "✗ Emprestado";
    console.log("".concat(status, " - ").concat(livro.titulo, " (").concat(livro.autor, ")"));
});
