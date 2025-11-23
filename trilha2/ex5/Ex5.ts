class Agenda {
    compromissos: string[];

    constructor() {
        this.compromissos = [];
    }

    adicionarCompromisso(compromisso: string): void {
        this.compromissos.push(compromisso);
        console.log(`Compromisso '${compromisso}' adicionado com sucesso!`);
    }

    listarCompromissos(): void {
        if (this.compromissos.length === 0) {
            console.log("Nenhum compromisso cadastrado.");
        } else {
            console.log(`\n=== Agenda (${this.compromissos.length} compromisso(s)) ===`);
            this.compromissos.forEach((compromisso, index) => {
                console.log(`${index + 1}. ${compromisso}`);
            });
            console.log();
        }
    }
}

const minhaAgenda = new Agenda();

minhaAgenda.adicionarCompromisso("Reunião com cliente às 10h");
minhaAgenda.adicionarCompromisso("Almoço com equipe às 12h");
minhaAgenda.adicionarCompromisso("Apresentação do projeto às 15h");

minhaAgenda.listarCompromissos();