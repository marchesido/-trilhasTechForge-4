interface Item {
  name: string;
  price: number;
  quantity: number;
}

class OrderV1 {
  private items: Item[] = [];
  private totalPrice: number = 0;
  private paymentStatus: 'pending' | 'paid' | 'failed' = 'pending';
  private shippingStatus: 'pending' | 'shipped' | 'delivered' = 'pending';

  addItem(item: Item): void {
    this.items.push(item);
    this.calculateTotal();
  }

  private calculateTotal(): void {
    this.totalPrice = this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  processPayment(paymentMethod: string, amount: number): boolean {
    if (amount < this.totalPrice) {
      this.paymentStatus = 'failed';
      return false;
    }

    console.log(`Processing payment via ${paymentMethod}...`);
    this.paymentStatus = 'paid';
    return true;
  }

  updateShippingStatus(status: 'pending' | 'shipped' | 'delivered'): void {
    if (this.paymentStatus !== 'paid') {
      throw new Error('Cannot ship unpaid order');
    }
    this.shippingStatus = status;
    console.log(`Shipping status updated to: ${status}`);
  }

  getOrderSummary(): string {
    return `
Order Summary:
- Items: ${this.items.length}
- Total: $${this.totalPrice.toFixed(2)}
- Payment: ${this.paymentStatus}
- Shipping: ${this.shippingStatus}
    `.trim();
  }
}

console.log('='.repeat(50));
console.log('VERSÃO 1: Classe com múltiplas responsabilidades');
console.log('='.repeat(50));

const orderV1 = new OrderV1();
orderV1.addItem({ name: 'Laptop', price: 999.99, quantity: 1 });
orderV1.addItem({ name: 'Mouse', price: 29.99, quantity: 2 });
orderV1.processPayment('Credit Card', 1100);
orderV1.updateShippingStatus('shipped');
console.log(orderV1.getOrderSummary());