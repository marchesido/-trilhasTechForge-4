interface Item {
  name: string;
  price: number;
  quantity: number;
}

class Cart {
  private items: Item[] = [];

  addItem(item: Item): void {
    this.items.push(item);
  }

  removeItem(itemName: string): void {
    this.items = this.items.filter(item => item.name !== itemName);
  }

  getItems(): Item[] {
    return [...this.items];
  }

  calculateTotal(): number {
    return this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  clear(): void {
    this.items = [];
  }
}

class Payment {
  private status: 'pending' | 'paid' | 'failed' = 'pending';
  private method: string = '';

  process(paymentMethod: string, amount: number, requiredAmount: number): boolean {
    this.method = paymentMethod;

    if (amount < requiredAmount) {
      this.status = 'failed';
      console.log(`❌ Payment failed: insufficient amount`);
      return false;
    }

    console.log(`💳 Processing payment of $${amount.toFixed(2)} via ${paymentMethod}...`);
    this.status = 'paid';
    console.log(`✅ Payment successful!`);
    return true;
  }

  getStatus(): string {
    return this.status;
  }

  isPaid(): boolean {
    return this.status === 'paid';
  }
}

class Shipping {
  private status: 'pending' | 'shipped' | 'delivered' = 'pending';
  private trackingNumber: string = '';

  updateStatus(newStatus: 'pending' | 'shipped' | 'delivered'): void {
    this.status = newStatus;
    
    if (newStatus === 'shipped') {
      this.trackingNumber = this.generateTrackingNumber();
      console.log(`📦 Order shipped! Tracking: ${this.trackingNumber}`);
    } else if (newStatus === 'delivered') {
      console.log(`✅ Order delivered!`);
    }
  }

  getStatus(): string {
    return this.status;
  }

  getTrackingNumber(): string {
    return this.trackingNumber;
  }

  private generateTrackingNumber(): string {
    return `TRK-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  }
}

class Order {
  private cart: Cart;
  private payment: Payment;
  private shipping: Shipping;
  private orderId: string;

  constructor() {
    this.cart = new Cart();
    this.payment = new Payment();
    this.shipping = new Shipping();
    this.orderId = `ORD-${Date.now()}`;
  }

  addItem(item: Item): void {
    this.cart.addItem(item);
  }

  processPayment(paymentMethod: string, amount: number): boolean {
    const total = this.cart.calculateTotal();
    return this.payment.process(paymentMethod, amount, total);
  }

  ship(): void {
    if (!this.payment.isPaid()) {
      throw new Error('Cannot ship unpaid order');
    }
    this.shipping.updateStatus('shipped');
  }

  deliver(): void {
    if (this.shipping.getStatus() !== 'shipped') {
      throw new Error('Cannot deliver order that has not been shipped');
    }
    this.shipping.updateStatus('delivered');
  }

  getOrderSummary(): string {
    const items = this.cart.getItems();
    const total = this.cart.calculateTotal();
    
    return `
📋 Order ${this.orderId}
━━━━━━━━━━━━━━━━━━━━━━
Items (${items.length}):
${items.map(item => `  • ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`).join('\n')}
━━━━━━━━━━━━━━━━━━━━━━
Total: $${total.toFixed(2)}
Payment: ${this.payment.getStatus()}
Shipping: ${this.shipping.getStatus()}
${this.shipping.getTrackingNumber() ? `Tracking: ${this.shipping.getTrackingNumber()}` : ''}
    `.trim();
  }
}

console.log('\n' + '='.repeat(50));
console.log('VERSÃO 2: Refatorado com SRP e Baixo Acoplamento');
console.log('='.repeat(50) + '\n');

const order = new Order();
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