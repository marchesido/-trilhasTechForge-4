// Classe base
class Pagamento {
    processar(): void {
        console.log("Processando pagamento genérico...");
    }
}

class PagamentoCartao extends Pagamento {       //Subclasse - pagamento com cartão
    numeroCartao: string;

    constructor(numeroCartao: string) {
        super();
        this.numeroCartao = numeroCartao;
    }

    private validarCartao(): boolean {           // Validação basica - cartão deve ter 16 dígitos
        return /^\d{16}$/.test(this.numeroCartao);
    }

    processar(): void {
        if (this.validarCartao()) {
            console.log(`Pagamento com cartão aprovado! Número: ${this.numeroCartao}`);
        } else {
            console.log("Número do cartão inválido!");
        }
    }
}

class PagamentoBoleto extends Pagamento {           // Subclasse - pagamento com boleto
    private gerarCodigoBoleto(): string {
        //  (simulação) Geração simples de um código de boleto
        return Math.floor(Math.random() * 1_000_000_000_000).toString().padStart(12, "0");
    }

    processar(): void {
        const codigo = this.gerarCodigoBoleto();
        console.log(`Boleto gerado com sucesso! Código: ${codigo}`);
    }
}

function realizarPagamento(pag: Pagamento) {        // Polimorfismo em uma função
    pag.processar();
}

const pagamento1 = new PagamentoCartao("1234567812345678");   // Teste
const pagamento2 = new PagamentoBoleto();

realizarPagamento(pagamento1);
realizarPagamento(pagamento2);
