var Texto = /** @class */ (function () {
    function Texto(titulo, conteudo) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
    Texto.prototype.exibir = function () {
        return "T\u00EDtulo: ".concat(this.titulo, ", Conte\u00FAdo: ").concat(this.conteudo);
    };
    return Texto;
}());
var meuTexto = new Texto("Aula de TypeScript", "Trilha 4 - Interfaces Disciplina: Tecnicas de programação basica 4");
console.log(meuTexto.exibir());
