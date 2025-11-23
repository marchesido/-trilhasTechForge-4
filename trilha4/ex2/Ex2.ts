interface Documento {
  titulo: string;
  conteudo: string;
}

class Texto implements Documento {
  titulo: string;
  conteudo: string;

  constructor(titulo: string, conteudo: string) {
    this.titulo = titulo;
    this.conteudo = conteudo;
  }

  exibir(): string {
    return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
  }
}

const meuTexto = new Texto(
  "Aula de TypeScript",
  "Trilha 4 - Interfaces Disciplina: Tecnicas de programação basica 4"
);

console.log(meuTexto.exibir());