interface Contact {
  name: string;
  email: string;
}


class ContactValidator {
  validate(contact: Contact): void {
    if (!contact.name || contact.name.trim().length === 0) {
      throw new Error('Nome do contato é obrigatório');
    }

    if (!contact.email || contact.email.trim().length === 0) {
      throw new Error('Email é obrigatório');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contact.email)) {
      throw new Error('Email inválido');
    }
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

class EmailSenderV2 {
  private validator: ContactValidator;

  constructor(validator: ContactValidator) {
    this.validator = validator;
  }

  sendEmail(contact: Contact, subject: string, message: string): void {
    this.validator.validate(contact);

    console.log(` Enviando email para: ${contact.name} <${contact.email}>`);
    console.log(`   Assunto: ${subject}`);
    console.log(`   Mensagem: ${message}`);
    console.log(' Email enviado com sucesso!\n');
  }
}

console.log('='.repeat(50));
console.log('VERSÃO 2: Classes Desacopladas (com DI)');
console.log('='.repeat(50));

const validator = new ContactValidator();
const senderV2 = new EmailSenderV2(validator);

try {
  senderV2.sendEmail(
    { name: 'Pedro Santos', email: 'pedro@example.com' },
    'Confirmação',
    'Seu pedido foi confirmado'
  );
} catch (error) {
  console.error(' Erro:', error);
}

try {
  senderV2.sendEmail(
    { name: '', email: 'teste@example.com' },
    'Teste',
    'Mensagem'
  );
} catch (error) {
  console.error(' Erro:', (error as Error).message, '\n');
}