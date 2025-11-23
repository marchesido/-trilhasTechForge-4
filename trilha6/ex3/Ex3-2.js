var ContactValidator = /** @class */ (function () {
    function ContactValidator() {
    }
    ContactValidator.prototype.validate = function (contact) {
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
    };
    ContactValidator.prototype.isValidEmail = function (email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    return ContactValidator;
}());
var EmailSenderV2 = /** @class */ (function () {
    function EmailSenderV2(validator) {
        this.validator = validator;
    }
    EmailSenderV2.prototype.sendEmail = function (contact, subject, message) {
        this.validator.validate(contact);
        console.log(" Enviando email para: ".concat(contact.name, " <").concat(contact.email, ">"));
        console.log("   Assunto: ".concat(subject));
        console.log("   Mensagem: ".concat(message));
        console.log(' Email enviado com sucesso!\n');
    };
    return EmailSenderV2;
}());
console.log('='.repeat(50));
console.log('VERSÃO 2: Classes Desacopladas (com DI)');
console.log('='.repeat(50));
var validator = new ContactValidator();
var senderV2 = new EmailSenderV2(validator);
try {
    senderV2.sendEmail({ name: 'Pedro Santos', email: 'pedro@example.com' }, 'Confirmação', 'Seu pedido foi confirmado');
}
catch (error) {
    console.error(' Erro:', error);
}
try {
    senderV2.sendEmail({ name: '', email: 'teste@example.com' }, 'Teste', 'Mensagem');
}
catch (error) {
    console.error(' Erro:', error.message, '\n');
}
