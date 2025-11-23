var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Cart = /** @class */ (function () {
    function Cart() {
        this.items = [];
    }
    Cart.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Cart.prototype.removeItem = function (itemName) {
        this.items = this.items.filter(function (item) { return item.name !== itemName; });
    };
    Cart.prototype.getItems = function () {
        return __spreadArray([], this.items, true);
    };
    Cart.prototype.calculateTotal = function () {
        return this.items.reduce(function (sum, item) { return sum + item.price * item.quantity; }, 0);
    };
    Cart.prototype.clear = function () {
        this.items = [];
    };
    return Cart;
}());
var Payment = /** @class */ (function () {
    function Payment() {
        this.status = 'pending';
        this.method = '';
    }
    Payment.prototype.process = function (paymentMethod, amount, requiredAmount) {
        this.method = paymentMethod;
        if (amount < requiredAmount) {
            this.status = 'failed';
            console.log("\u274C Payment failed: insufficient amount");
            return false;
        }
        console.log("\uD83D\uDCB3 Processing payment of $".concat(amount.toFixed(2), " via ").concat(paymentMethod, "..."));
        this.status = 'paid';
        console.log("\u2705 Payment successful!");
        return true;
    };
    Payment.prototype.getStatus = function () {
        return this.status;
    };
    Payment.prototype.isPaid = function () {
        return this.status === 'paid';
    };
    return Payment;
}());
var Shipping = /** @class */ (function () {
    function Shipping() {
        this.status = 'pending';
        this.trackingNumber = '';
    }
    Shipping.prototype.updateStatus = function (newStatus) {
        this.status = newStatus;
        if (newStatus === 'shipped') {
            this.trackingNumber = this.generateTrackingNumber();
            console.log("\uD83D\uDCE6 Order shipped! Tracking: ".concat(this.trackingNumber));
        }
        else if (newStatus === 'delivered') {
            console.log("\u2705 Order delivered!");
        }
    };
    Shipping.prototype.getStatus = function () {
        return this.status;
    };
    Shipping.prototype.getTrackingNumber = function () {
        return this.trackingNumber;
    };
    Shipping.prototype.generateTrackingNumber = function () {
        return "TRK-".concat(Date.now(), "-").concat(Math.random().toString(36).substr(2, 9).toUpperCase());
    };
    return Shipping;
}());
var Order = /** @class */ (function () {
    function Order() {
        this.cart = new Cart();
        this.payment = new Payment();
        this.shipping = new Shipping();
        this.orderId = "ORD-".concat(Date.now());
    }
    Order.prototype.addItem = function (item) {
        this.cart.addItem(item);
    };
    Order.prototype.processPayment = function (paymentMethod, amount) {
        var total = this.cart.calculateTotal();
        return this.payment.process(paymentMethod, amount, total);
    };
    Order.prototype.ship = function () {
        if (!this.payment.isPaid()) {
            throw new Error('Cannot ship unpaid order');
        }
        this.shipping.updateStatus('shipped');
    };
    Order.prototype.deliver = function () {
        if (this.shipping.getStatus() !== 'shipped') {
            throw new Error('Cannot deliver order that has not been shipped');
        }
        this.shipping.updateStatus('delivered');
    };
    Order.prototype.getOrderSummary = function () {
        var items = this.cart.getItems();
        var total = this.cart.calculateTotal();
        return "\n\uD83D\uDCCB Order ".concat(this.orderId, "\n\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\nItems (").concat(items.length, "):\n").concat(items.map(function (item) { return "  \u2022 ".concat(item.name, " x").concat(item.quantity, " - $").concat((item.price * item.quantity).toFixed(2)); }).join('\n'), "\n\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\nTotal: $").concat(total.toFixed(2), "\nPayment: ").concat(this.payment.getStatus(), "\nShipping: ").concat(this.shipping.getStatus(), "\n").concat(this.shipping.getTrackingNumber() ? "Tracking: ".concat(this.shipping.getTrackingNumber()) : '', "\n    ").trim();
    };
    return Order;
}());
console.log('\n' + '='.repeat(50));
console.log('VERSÃO 2: Refatorado com SRP e Baixo Acoplamento');
console.log('='.repeat(50) + '\n');
var order = new Order();
order.addItem({ name: 'Laptop', price: 999.99, quantity: 1 });
order.addItem({ name: 'Mouse', price: 29.99, quantity: 2 });
order.addItem({ name: 'Keyboard', price: 79.99, quantity: 1 });
console.log('\n--- Processing Payment ---');
order.processPayment('Credit Card', 1200);
console.log('\n--- Shipping Order ---');
order.ship();
console.log('\n--- Delivering Order ---');
order.deliver();
console.log('\n' + order.getOrderSummary());
