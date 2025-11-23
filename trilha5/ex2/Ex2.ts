// Classe abstrata base para gerenciar inventário
abstract class Inventory {
  protected items: Record<string, number> = {};

  // Método abstrato para adicionar itens
  abstract addItem(item: string, quantity: number): void;

  // Método abstrato para remover itens
  abstract removeItem(item: string): void;

  // Método concreto para obter o inventário
  getInventory(): Record<string, number> {
    return { ...this.items };
  }

  // Método auxiliar para verificar se item existe
  protected hasItem(item: string): boolean {
    return item in this.items && this.items[item] > 0;
  }
}

// Subclasse para inventário de armazém (sem limites)
class WarehouseInventory extends Inventory {
  addItem(item: string, quantity: number): void {
    if (quantity <= 0) {
      console.log(`❌ Quantidade inválida: ${quantity}`);
      return;
    }

    if (this.items[item]) {
      this.items[item] += quantity;
    } else {
      this.items[item] = quantity;
    }

    console.log(`✅ Armazém: ${quantity} unidade(s) de "${item}" adicionada(s). Total: ${this.items[item]}`);
  }

  removeItem(item: string): void {
    if (this.hasItem(item)) {
      const quantity = this.items[item];
      delete this.items[item];
      console.log(`✅ Armazém: "${item}" removido completamente (${quantity} unidade(s))`);
    } else {
      console.log(`❌ Armazém: "${item}" não encontrado no inventário`);
    }
  }

  // Método adicional para remover quantidade específica
  removeQuantity(item: string, quantity: number): void {
    if (!this.hasItem(item)) {
      console.log(`❌ Armazém: "${item}" não encontrado no inventário`);
      return;
    }

    if (this.items[item] >= quantity) {
      this.items[item] -= quantity;
      console.log(`✅ Armazém: ${quantity} unidade(s) de "${item}" removida(s). Restante: ${this.items[item]}`);
      
      if (this.items[item] === 0) {
        delete this.items[item];
      }
    } else {
      console.log(` Armazém: Quantidade insuficiente de "${item}". Disponível: ${this.items[item]}`);
    }
  }
}

// Subclasse para inventário (limite de 10 por item)
class StoreInventory extends Inventory {
  private readonly MAX_QUANTITY_PER_ITEM = 10;

  addItem(item: string, quantity: number): void {
    if (quantity <= 0) {
      console.log(` Quantidade inválida: ${quantity}`);
      return;
    }

    const currentQuantity = this.items[item] || 0;
    const newTotal = currentQuantity + quantity;

    if (newTotal > this.MAX_QUANTITY_PER_ITEM) {
      const allowedQuantity = this.MAX_QUANTITY_PER_ITEM - currentQuantity;
      
      if (allowedQuantity > 0) {
        this.items[item] = this.MAX_QUANTITY_PER_ITEM;
        console.log(`  Loja: Apenas ${allowedQuantity} unidade(s) de "${item}" adicionada(s). Limite máximo (${this.MAX_QUANTITY_PER_ITEM}) atingido!`);
      } else {
        console.log(` Loja: Não é possível adicionar "${item}". Limite máximo (${this.MAX_QUANTITY_PER_ITEM}) já atingido!`);
      }
    } else {
      this.items[item] = newTotal;
      console.log(` Loja: ${quantity} unidade(s) de "${item}" adicionada(s). Total: ${this.items[item]}`);
    }
  }

  removeItem(item: string): void {
    if (this.hasItem(item)) {
      const quantity = this.items[item];
      delete this.items[item];
      console.log(` Loja: "${item}" removido completamente (${quantity} unidade(s))`);
    } else {
      console.log(` Loja: "${item}" não encontrado no inventário`);
    }
  }

  getAvailableSpace(item: string): number {
    const currentQuantity = this.items[item] || 0;
    return this.MAX_QUANTITY_PER_ITEM - currentQuantity;
  }
}

console.log("=== INVENTÁRIO DE ARMAZÉM ===\n");
const warehouse = new WarehouseInventory();

warehouse.addItem("Cadeiras", 500);
warehouse.addItem("Mesas", 300);
warehouse.addItem("Cadeiras", 200); // Adiciona mais cadeiras
warehouse.removeQuantity("Cadeiras", 100);
warehouse.removeItem("Mesas");

console.log("\n📦 Inventário do Armazém:", warehouse.getInventory());

console.log("\n\n=== INVENTÁRIO DE LOJA ===\n");
const store = new StoreInventory();

store.addItem("Canetas", 5);
store.addItem("Canetas", 3); // Total: 8
store.addItem("Canetas", 5); // Tentará adicionar, mas só cabem 2
store.addItem("Notebooks", 10);
store.addItem("Notebooks", 1);
store.removeItem("Canetas");

console.log("\n Inventário da Loja:", store.getInventory());
console.log(` Espaço disponível para Notebooks: ${store.getAvailableSpace("Notebooks")} unidades`);