class Billing {
  constructor(amount) {
    this.amount = amount;
  }
}

class FixedBilling extends Billing {
  constructor(amount) {
    super(amount);
  }
  calculateTotal() {
    return this.amount;
  }
}

class HourBilling extends Billing {
  constructor(amount, hours) {
    super(amount);
    this.hours = hours;
  }
  calculateTotal() {
    return this.amount * this.hours;
  }
}

class ItemBilling extends Billing {
  constructor(amount, items) {
    super(amount);
    this.items = items;
  }
  calculateTotal() {
    return this.amount * this.items;
  }
}

const fixedBill_1 = new FixedBilling(100, 2);
const hourBilling_1 = new HourBilling(50, 4);
const itemNilling_1 = new ItemBilling(200, 5);

console.log(fixedBill_1.calculateTotal());
console.log(hourBilling_1.calculateTotal());
console.log(itemNilling_1.calculateTotal());
