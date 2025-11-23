var OrderV1 = /** @class */ (function () {
    function OrderV1() {
        this.items = [];
        this.totalPrice = 0;
        this.paymentStatus = 'pending';
        this.shippingStatus = 'pending';
    }
    OrderV1.prototype.addItem = function (item) {
        this.items.push(item);
        this.calculateTotal();
    };
    OrderV1.prototype.calculateTotal = function () {
        this.totalPrice = this.items.reduce(function (sum, item) { return sum + item.price * item.quantity; }, 0);
    };
    OrderV1.prototype.processPayment = function (paymentMethod, amount) {
        if (amount < this.totalPrice) {
            this.paymentStatus = 'failed';
            return false;
        }
        console.log("Processing payment via ".concat(paymentMethod, "..."));
        this.paymentStatus = 'paid';
        return true;
    };
    OrderV1.prototype.updateShippingStatus = function (status) {
        if (this.paymentStatus !== 'paid') {
            throw new Error('Cannot ship unpaid order');
        }
        this.shippingStatus = status;
        console.log("Shipping status updated to: ".concat(status));
    };
    OrderV1.prototype.getOrderSummary = function () {
        return "\nOrder Summary:\n- Items: ".concat(this.items.length, "\n- Total: $").concat(this.totalPrice.toFixed(2), "\n- Payment: ").concat(this.paymentStatus, "\n- Shipping: ").concat(this.shippingStatus, "\n    ").trim();
    };
    return OrderV1;
}());
console.log('='.repeat(50));
console.log('VERSÃO 1: Classe com múltiplas responsabilidades');
console.log('='.repeat(50));
var orderV1 = new OrderV1();
orderV1.addItem({ name: 'Laptop', price: 999.99, quantity: 1 });
orderV1.addItem({ name: 'Mouse', price: 29.99, quantity: 2 });
orderV1.processPayment('Credit Card', 1100);
orderV1.updateShippingStatus('shipped');
console.log(orderV1.getOrderSummary());
