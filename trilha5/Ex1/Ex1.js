var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype.taskExists = function (description, type) {
        return this.tasks.some(function (task) { return task.description === description && task.type === type; });
    };
    return TaskManager;
}());
var Project = /** @class */ (function (_super) {
    __extends(Project, _super);
    function Project(projectName) {
        var _this = _super.call(this) || this;
        _this.projectName = projectName;
        return _this;
    }
    Project.prototype.addTask = function (task) {
        if (!task.trim()) {
            console.log('⚠️ Tarefa vazia não pode ser adicionada.');
            return;
        }
        if (this.taskExists(task, 'project')) {
            console.log("\u26A0\uFE0F A tarefa \"".concat(task, "\" j\u00E1 existe no projeto \"").concat(this.projectName, "\"."));
            return;
        }
        this.tasks.push({
            description: task,
            type: 'project'
        });
        console.log("\u2705 Tarefa adicionada ao projeto \"".concat(this.projectName, "\": ").concat(task));
    };
    Project.prototype.listTasks = function () {
        return this.tasks.map(function (task) { return task.description; });
    };
    Project.prototype.getProjectName = function () {
        return this.projectName;
    };
    return Project;
}(TaskManager));
var DailyTasks = /** @class */ (function (_super) {
    __extends(DailyTasks, _super);
    function DailyTasks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DailyTasks.prototype.addTask = function (task) {
        if (!task.trim()) {
            console.log('⚠️ Tarefa vazia não pode ser adicionada.');
            return;
        }
        if (this.taskExists(task, 'daily')) {
            console.log("\u26A0\uFE0F A tarefa di\u00E1ria \"".concat(task, "\" j\u00E1 foi adicionada."));
            return;
        }
        this.tasks.push({
            description: task,
            type: 'daily'
        });
        console.log("\u2705 Tarefa di\u00E1ria adicionada: ".concat(task));
    };
    DailyTasks.prototype.listTasks = function () {
        return this.tasks.map(function (task) { return task.description; });
    };
    return DailyTasks;
}(TaskManager));
console.log('=== GERENCIADOR DE TAREFAS ===\n');
var projeto1 = new Project('Sistema de E-commerce');
projeto1.addTask('Implementar autenticação');
projeto1.addTask('Criar página de produtos');
projeto1.addTask('Integrar gateway de pagamento');
projeto1.addTask('Implementar autenticação');
console.log('\n--- Tarefas do Projeto ---');
console.log("Projeto: ".concat(projeto1.getProjectName()));
projeto1.listTasks().forEach(function (task, index) {
    console.log("".concat(index + 1, ". ").concat(task));
});
console.log('\n');
var tarefasDiarias = new DailyTasks();
tarefasDiarias.addTask('Revisar emails');
tarefasDiarias.addTask('Daily meeting às 9h');
tarefasDiarias.addTask('Atualizar documentação');
tarefasDiarias.addTask('Revisar emails'); // Tentativa de duplicação
console.log('\n--- Tarefas Diárias ---');
tarefasDiarias.listTasks().forEach(function (task, index) {
    console.log("".concat(index + 1, ". ").concat(task));
});
console.log('\n');
var projeto2 = new Project('API REST');
projeto2.addTask('Definir endpoints');
projeto2.addTask('Implementar validações');
projeto2.addTask('Escrever testes unitários');
console.log('\n--- Tarefas do Segundo Projeto ---');
console.log("Projeto: ".concat(projeto2.getProjectName()));
projeto2.listTasks().forEach(function (task, index) {
    console.log("".concat(index + 1, ". ").concat(task));
});
