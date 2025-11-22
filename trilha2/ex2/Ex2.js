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
var livro = new Livro("1984", "George orwell", 336);
livro.marcarComoLido();
console.log(livro);
var livro2 = new Livro("Casa Velha", "Machado de Assis", 152);
livro2.marcarComoLido();
console.log(livro2);
var livro3 = new Livro("A revolução dos bichos", "George orwell", 120);
livro3.marcarComoLido();
console.log(livro3);
var livro4 = new Livro("Dom Casmurro", "Machado de Assis", 256);
livro4.marcarComoLido();
console.log(livro4);
