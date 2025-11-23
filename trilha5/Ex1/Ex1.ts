interface Task {
  description: string;
  type: 'project' | 'daily';
}

abstract class TaskManager {
  protected tasks: Task[] = [];

  abstract addTask(task: string): void;

  abstract listTasks(): string[];

  protected taskExists(description: string, type: 'project' | 'daily'): boolean {
    return this.tasks.some(
      task => task.description === description && task.type === type
    );
  }
}

class Project extends TaskManager {
  private projectName: string;

  constructor(projectName: string) {
    super();
    this.projectName = projectName;
  }

  addTask(task: string): void {
    if (!task.trim()) {
      console.log('⚠️ Tarefa vazia não pode ser adicionada.');
      return;
    }

    if (this.taskExists(task, 'project')) {
      console.log(`⚠️ A tarefa "${task}" já existe no projeto "${this.projectName}".`);
      return;
    }

    this.tasks.push({
      description: task,
      type: 'project'
    });
    console.log(`✅ Tarefa adicionada ao projeto "${this.projectName}": ${task}`);
  }

  listTasks(): string[] {
    return this.tasks.map(task => task.description);
  }

  getProjectName(): string {
    return this.projectName;
  }
}

class DailyTasks extends TaskManager {
  addTask(task: string): void {
    if (!task.trim()) {
      console.log('⚠️ Tarefa vazia não pode ser adicionada.');
      return;
    }

    if (this.taskExists(task, 'daily')) {
      console.log(`⚠️ A tarefa diária "${task}" já foi adicionada.`);
      return;
    }

    this.tasks.push({
      description: task,
      type: 'daily'
    });
    console.log(`✅ Tarefa diária adicionada: ${task}`);
  }

  listTasks(): string[] {
    return this.tasks.map(task => task.description);
  }
}

console.log('=== GERENCIADOR DE TAREFAS ===\n');

const projeto1 = new Project('Sistema de E-commerce');
projeto1.addTask('Implementar autenticação');
projeto1.addTask('Criar página de produtos');
projeto1.addTask('Integrar gateway de pagamento');
projeto1.addTask('Implementar autenticação');

console.log('\n--- Tarefas do Projeto ---');
console.log(`Projeto: ${projeto1.getProjectName()}`);
projeto1.listTasks().forEach((task, index) => {
  console.log(`${index + 1}. ${task}`);
});

console.log('\n');

const tarefasDiarias = new DailyTasks();
tarefasDiarias.addTask('Revisar emails');
tarefasDiarias.addTask('Daily meeting às 9h');
tarefasDiarias.addTask('Atualizar documentação');
tarefasDiarias.addTask('Revisar emails'); // Tentativa de duplicação

console.log('\n--- Tarefas Diárias ---');
tarefasDiarias.listTasks().forEach((task, index) => {
  console.log(`${index + 1}. ${task}`);
});

console.log('\n');

const projeto2 = new Project('API REST');
projeto2.addTask('Definir endpoints');
projeto2.addTask('Implementar validações');
projeto2.addTask('Escrever testes unitários');

console.log('\n--- Tarefas do Segundo Projeto ---');
console.log(`Projeto: ${projeto2.getProjectName()}`);
projeto2.listTasks().forEach((task, index) => {
  console.log(`${index + 1}. ${task}`);
});