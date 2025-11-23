var Agenda = /** @class */ (function () {
    function Agenda() {
        this.compromissos = [];
    }
    Agenda.prototype.adicionarCompromisso = function (compromisso) {
        this.compromissos.push(compromisso);
        console.log("Compromisso '".concat(compromisso, "' adicionado com sucesso!"));
    };
    Agenda.prototype.listarCompromissos = function () {
        if (this.compromissos.length === 0) {
            console.log("Nenhum compromisso cadastrado.");
        }
        else {
            console.log("\n=== Agenda (".concat(this.compromissos.length, " compromisso(s)) ==="));
            this.compromissos.forEach(function (compromisso, index) {
                console.log("".concat(index + 1, ". ").concat(compromisso));
            });
            console.log();
        }
    };
    return Agenda;
}());
// Exemplo de uso
var minhaAgenda = new Agenda();
// Adiciona alguns compromissos
minhaAgenda.adicionarCompromisso("Reunião com cliente às 10h");
minhaAgenda.adicionarCompromisso("Almoço com equipe às 12h");
minhaAgenda.adicionarCompromisso("Apresentação do projeto às 15h");
// Lista todos os compromissos
minhaAgenda.listarCompromissos();
