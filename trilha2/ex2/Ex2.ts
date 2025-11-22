class Livro {
    titulo: string;
    autor: string;
    paginas: number;
    lido: boolean;

    constructor(titulo: string, autor: string, paginas: number, lido: boolean = false) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }

    marcarComoLido(): void {
        this.lido = true;
        console.log(`O livro "${this.titulo}" foi marcado como lido.`);
    }
}

const livro = new Livro("Dom Casmurro", "Machado de Assis", 256);
livro.marcarComoLido();
console.log(livro);

const livro2 = new Livro("Casa Velha", "Machado de Assis", 	152);
livro2.marcarComoLido();
console.log(livro2);