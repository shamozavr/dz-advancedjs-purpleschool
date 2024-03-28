class Car {
  #make;
  #model;
  #run;

  constructor(make, model, run) {
    this.#make = make;
    this.#model = model;
    this.#run = run;
  }

  get getRun() {
    return this.#run;
  }

  set setRun(newRun) {
    this.#run = newRun;
  }

  info() {
    console.log(`
    Make is ${this.#make},
    Model is ${this.#model},
    Current run is ${this.#run}`)
  }
}

const car1 = new Car ('Volvo', 'XC70', '123');
car1.info();
console.log(car1.getRun);
car1.setRun = 456;
car1.info();