interface Contact {
  name: string;
  email: string;
}

class EmailSenderV1 {
  sendEmail(contact: Contact, subject: string, message: string): void {
    // Validação misturada com lógica de envio
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

    // Lógica de envio
    console.log(` Enviando email para: ${contact.name} <${contact.email}>`);
    console.log(`   Assunto: ${subject}`);
    console.log(`   Mensagem: ${message}`);
    console.log(' Email enviado com sucesso!\n');
  }
}

console.log('='.repeat(50));
console.log('VERSÃO 1: Classe Acoplada');
console.log('='.repeat(50));

const senderV1 = new EmailSenderV1();

try {
  senderV1.sendEmail(
    { name: 'João Silva', email: 'joao@example.com' },
    'Bem-vindo!',
    'Obrigado por se cadastrar'
  );
} catch (error) {
  console.error(' Erro:', error);
}

try {
  senderV1.sendEmail(
    { name: 'Maria', email: 'email-invalido' },
    'Teste',
    'Mensagem'
  );
} catch (error) {
  console.error(' Erro:', (error as Error).message, '\n');
}