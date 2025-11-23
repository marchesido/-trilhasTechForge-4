var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var EmailNotification = /** @class */ (function () {
    function EmailNotification() {
    }
    EmailNotification.prototype.send = function (to, subject, body) {
        console.log(' Enviando email...');
        console.log("Para: ".concat(to));
        console.log("Assunto: ".concat(subject));
        console.log("Mensagem: ".concat(body));
        console.log(' Email enviado!\n');
    };
    return EmailNotification;
}());
var UserManager = /** @class */ (function () {
    function UserManager(notification) {
        this.notification = notification;
        this.users = [];
    }
    UserManager.prototype.createUser = function (name, email) {
        if (!email.includes('@')) {
            throw new Error('Email inválido');
        }
        var user = {
            id: this.generateId(),
            name: name,
            email: email
        };
        this.users.push(user);
        this.notification.send(email, 'Bem-vindo!', "Ol\u00E1 ".concat(name, ", sua conta foi criada com sucesso!"));
        return user;
    };
    UserManager.prototype.generateId = function () {
        return Math.random().toString(36).substr(2, 9);
    };
    UserManager.prototype.getUsers = function () {
        return __spreadArray([], this.users, true);
    };
    return UserManager;
}());
var SMSNotification = /** @class */ (function () {
    function SMSNotification() {
    }
    SMSNotification.prototype.send = function (to, subject, body) {
        console.log(' Enviando SMS...');
        console.log("Para: ".concat(to));
        console.log("Mensagem: ".concat(body));
        console.log(' SMS enviado!\n');
    };
    return SMSNotification;
}());
var MultiNotification = /** @class */ (function () {
    function MultiNotification(notifications) {
        this.notifications = notifications;
    }
    MultiNotification.prototype.send = function (to, subject, body) {
        this.notifications.forEach(function (notification) {
            notification.send(to, subject, body);
        });
    };
    return MultiNotification;
}());
console.log('\n=== DEPOIS DA REFATORAÇÃO ===\n');
var emailNotification = new EmailNotification();
var managerAfter = new UserManager(emailNotification);
managerAfter.createUser('Maria Santos', 'maria@email.com');
console.log('--- Usando SMS ---\n');
var smsNotification = new SMSNotification();
var managerWithSMS = new UserManager(smsNotification);
managerWithSMS.createUser('Pedro Costa', 'pedro@email.com');
console.log('--- Usando múltiplas notificações ---\n');
var multiNotification = new MultiNotification([
    new EmailNotification(),
    new SMSNotification()
]);
var managerMulti = new UserManager(multiNotification);
managerMulti.createUser('Ana Paula', 'ana@email.com');
console.log('\nUsuários finais:', managerAfter.getUsers());
