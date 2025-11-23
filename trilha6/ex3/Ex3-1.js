var EmailSenderV1 = /** @class */ (function () {
    function EmailSenderV1() {
    }
    EmailSenderV1.prototype.sendEmail = function (contact, subject, message) {
        // Validação misturada com lógica de envio
        if (!contact.name || contact.name.trim().length === 0) {
            throw new Error('Nome do contato é obrigatório');
        }
        if (!contact.email || contact.email.trim().length === 0) {
            throw new Error('Email é obrigatório');
        }
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(contact.email)) {
            throw new Error('Email inválido');
        }
        // Lógica de envio
        console.log(" Enviando email para: ".concat(contact.name, " <").concat(contact.email, ">"));
        console.log("   Assunto: ".concat(subject));
        console.log("   Mensagem: ".concat(message));
        console.log(' Email enviado com sucesso!\n');
    };
    return EmailSenderV1;
}());
console.log('='.repeat(50));
console.log('VERSÃO 1: Classe Acoplada');
console.log('='.repeat(50));
var senderV1 = new EmailSenderV1();
try {
    senderV1.sendEmail({ name: 'João Silva', email: 'joao@example.com' }, 'Bem-vindo!', 'Obrigado por se cadastrar');
}
catch (error) {
    console.error(' Erro:', error);
}
try {
    senderV1.sendEmail({ name: 'Maria', email: 'email-invalido' }, 'Teste', 'Mensagem');
}
catch (error) {
    console.error(' Erro:', error.message, '\n');
}
