var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var UserManagerBefore = /** @class */ (function () {
    function UserManagerBefore() {
        this.users = [];
    }
    UserManagerBefore.prototype.createUser = function (name, email) {
        if (!email.includes('@')) {
            throw new Error('Email inválido');
        }
        var user = {
            id: this.generateId(),
            name: name,
            email: email
        };
        this.users.push(user);
        this.sendEmail(email, 'Bem-vindo!', "Ol\u00E1 ".concat(name, ", sua conta foi criada com sucesso!"));
        return user;
    };
    UserManagerBefore.prototype.sendEmail = function (to, subject, body) {
        console.log(' Enviando email...');
        console.log("Para: ".concat(to));
        console.log("Assunto: ".concat(subject));
        console.log("Mensagem: ".concat(body));
        console.log(' Email enviado!\n');
    };
    UserManagerBefore.prototype.generateId = function () {
        return Math.random().toString(36).substring(2, 9);
    };
    UserManagerBefore.prototype.getUsers = function () {
        return __spreadArray([], this.users, true);
    };
    return UserManagerBefore;
}());
console.log('=== ANTES DA REFATORAÇÃO ===\n');
var managerBefore = new UserManagerBefore();
managerBefore.createUser('João Silva', 'joao@email.com');
console.log('Usuários:', managerBefore.getUsers());
