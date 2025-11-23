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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Classe abstrata base para gerenciar inventário
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.items = {};
    }
    // Método concreto para obter o inventário
    Inventory.prototype.getInventory = function () {
        return __assign({}, this.items);
    };
    // Método auxiliar para verificar se item existe
    Inventory.prototype.hasItem = function (item) {
        return item in this.items && this.items[item] > 0;
    };
    return Inventory;
}());
// Subclasse para inventário de armazém (sem limites)
var WarehouseInventory = /** @class */ (function (_super) {
    __extends(WarehouseInventory, _super);
    function WarehouseInventory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WarehouseInventory.prototype.addItem = function (item, quantity) {
        if (quantity <= 0) {
            console.log("\u274C Quantidade inv\u00E1lida: ".concat(quantity));
            return;
        }
        if (this.items[item]) {
            this.items[item] += quantity;
        }
        else {
            this.items[item] = quantity;
        }
        console.log("\u2705 Armaz\u00E9m: ".concat(quantity, " unidade(s) de \"").concat(item, "\" adicionada(s). Total: ").concat(this.items[item]));
    };
    WarehouseInventory.prototype.removeItem = function (item) {
        if (this.hasItem(item)) {
            var quantity = this.items[item];
            delete this.items[item];
            console.log("\u2705 Armaz\u00E9m: \"".concat(item, "\" removido completamente (").concat(quantity, " unidade(s))"));
        }
        else {
            console.log("\u274C Armaz\u00E9m: \"".concat(item, "\" n\u00E3o encontrado no invent\u00E1rio"));
        }
    };
    // Método adicional para remover quantidade específica
    WarehouseInventory.prototype.removeQuantity = function (item, quantity) {
        if (!this.hasItem(item)) {
            console.log("\u274C Armaz\u00E9m: \"".concat(item, "\" n\u00E3o encontrado no invent\u00E1rio"));
            return;
        }
        if (this.items[item] >= quantity) {
            this.items[item] -= quantity;
            console.log("\u2705 Armaz\u00E9m: ".concat(quantity, " unidade(s) de \"").concat(item, "\" removida(s). Restante: ").concat(this.items[item]));
            if (this.items[item] === 0) {
                delete this.items[item];
            }
        }
        else {
            console.log(" Armaz\u00E9m: Quantidade insuficiente de \"".concat(item, "\". Dispon\u00EDvel: ").concat(this.items[item]));
        }
    };
    return WarehouseInventory;
}(Inventory));
// Subclasse para inventário (limite de 10 por item)
var StoreInventory = /** @class */ (function (_super) {
    __extends(StoreInventory, _super);
    function StoreInventory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.MAX_QUANTITY_PER_ITEM = 10;
        return _this;
    }
    StoreInventory.prototype.addItem = function (item, quantity) {
        if (quantity <= 0) {
            console.log(" Quantidade inv\u00E1lida: ".concat(quantity));
            return;
        }
        var currentQuantity = this.items[item] || 0;
        var newTotal = currentQuantity + quantity;
        if (newTotal > this.MAX_QUANTITY_PER_ITEM) {
            var allowedQuantity = this.MAX_QUANTITY_PER_ITEM - currentQuantity;
            if (allowedQuantity > 0) {
                this.items[item] = this.MAX_QUANTITY_PER_ITEM;
                console.log("  Loja: Apenas ".concat(allowedQuantity, " unidade(s) de \"").concat(item, "\" adicionada(s). Limite m\u00E1ximo (").concat(this.MAX_QUANTITY_PER_ITEM, ") atingido!"));
            }
            else {
                console.log(" Loja: N\u00E3o \u00E9 poss\u00EDvel adicionar \"".concat(item, "\". Limite m\u00E1ximo (").concat(this.MAX_QUANTITY_PER_ITEM, ") j\u00E1 atingido!"));
            }
        }
        else {
            this.items[item] = newTotal;
            console.log(" Loja: ".concat(quantity, " unidade(s) de \"").concat(item, "\" adicionada(s). Total: ").concat(this.items[item]));
        }
    };
    StoreInventory.prototype.removeItem = function (item) {
        if (this.hasItem(item)) {
            var quantity = this.items[item];
            delete this.items[item];
            console.log(" Loja: \"".concat(item, "\" removido completamente (").concat(quantity, " unidade(s))"));
        }
        else {
            console.log(" Loja: \"".concat(item, "\" n\u00E3o encontrado no invent\u00E1rio"));
        }
    };
    StoreInventory.prototype.getAvailableSpace = function (item) {
        var currentQuantity = this.items[item] || 0;
        return this.MAX_QUANTITY_PER_ITEM - currentQuantity;
    };
    return StoreInventory;
}(Inventory));
console.log("=== INVENTÁRIO DE ARMAZÉM ===\n");
var warehouse = new WarehouseInventory();
warehouse.addItem("Cadeiras", 500);
warehouse.addItem("Mesas", 300);
warehouse.addItem("Cadeiras", 200); // Adiciona mais cadeiras
warehouse.removeQuantity("Cadeiras", 100);
warehouse.removeItem("Mesas");
console.log("\n📦 Inventário do Armazém:", warehouse.getInventory());
console.log("\n\n=== INVENTÁRIO DE LOJA ===\n");
var store = new StoreInventory();
store.addItem("Canetas", 5);
store.addItem("Canetas", 3); // Total: 8
store.addItem("Canetas", 5); // Tentará adicionar, mas só cabem 2
store.addItem("Notebooks", 10);
store.addItem("Notebooks", 1);
store.removeItem("Canetas");
console.log("\n Inventário da Loja:", store.getInventory());
console.log(" Espa\u00E7o dispon\u00EDvel para Notebooks: ".concat(store.getAvailableSpace("Notebooks"), " unidades"));
