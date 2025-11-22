var Livro = /** @class */ (function () {
    function Livro(titulo, autor, paginas, lido) {
        if (lido === void 0) { lido = false; }
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }
    Livro.prototype.marcarComoLido = function () {
        this.lido = true;
        console.log("O livro \"".concat(this.titulo, "\" foi marcado como lido."));
    };
    return Livro;
}());
// Exemplo de uso:
var livro = new Livro("Dom Casmurro", "Machado de Assis", 256);
livro.marcarComoLido();
console.log(livro);
