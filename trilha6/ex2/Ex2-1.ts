interface User {
  id: string;
  name: string;
  email: string;
}

class UserManagerBefore {
  private users: User[] = [];

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

    this.sendEmail(
      email,
      'Bem-vindo!',
      `Olá ${name}, sua conta foi criada com sucesso!`
    );

    return user;
  }

  private sendEmail(to: string, subject: string, body: string): void {
    console.log(' Enviando email...');
    console.log(`Para: ${to}`);
    console.log(`Assunto: ${subject}`);
    console.log(`Mensagem: ${body}`);
    console.log(' Email enviado!\n');
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 9);
  }

  getUsers(): User[] {
    return [...this.users];
  }
}

console.log('=== ANTES DA REFATORAÇÃO ===\n');
const managerBefore = new UserManagerBefore();
managerBefore.createUser('João Silva', 'joao@email.com');
console.log('Usuários:', managerBefore.getUsers());
