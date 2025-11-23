interface User {
  id: string;
  name: string;
  email: string;
}

interface INotification {
  send(to: string, subject: string, body: string): void;
}

class EmailNotification implements INotification {
  send(to: string, subject: string, body: string): void {
    console.log(' Enviando email...');
    console.log(`Para: ${to}`);
    console.log(`Assunto: ${subject}`);
    console.log(`Mensagem: ${body}`);
    console.log(' Email enviado!\n');
  }
}

class UserManager {
  private users: User[] = [];
  
  constructor(private notification: INotification) {}

  createUser(name: string, email: string): User {

    if (!email.includes('@')) {
      throw new Error('Email inválido');
    }

    const user: User = {
      id: this.generateId(),
      name,
      email
    };

    this.users.push(user);

    this.notification.send(
      email,
      'Bem-vindo!',
      `Olá ${name}, sua conta foi criada com sucesso!`
    );

    return user;
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  getUsers(): User[] {
    return [...this.users];
  }
}

class SMSNotification implements INotification {
  send(to: string, subject: string, body: string): void {
    console.log(' Enviando SMS...');
    console.log(`Para: ${to}`);
    console.log(`Mensagem: ${body}`);
    console.log(' SMS enviado!\n');
  }
}

class MultiNotification implements INotification {
  constructor(private notifications: INotification[]) {}

  send(to: string, subject: string, body: string): void {
    this.notifications.forEach(notification => {
      notification.send(to, subject, body);
    });
  }
}

console.log('\n=== DEPOIS DA REFATORAÇÃO ===\n');

const emailNotification = new EmailNotification();
const managerAfter = new UserManager(emailNotification);
managerAfter.createUser('Maria Santos', 'maria@email.com');

console.log('--- Usando SMS ---\n');
const smsNotification = new SMSNotification();
const managerWithSMS = new UserManager(smsNotification);
managerWithSMS.createUser('Pedro Costa', 'pedro@email.com');

console.log('--- Usando múltiplas notificações ---\n');
const multiNotification = new MultiNotification([
  new EmailNotification(),
  new SMSNotification()
]);
const managerMulti = new UserManager(multiNotification);
managerMulti.createUser('Ana Paula', 'ana@email.com');

console.log('\nUsuários finais:', managerAfter.getUsers());