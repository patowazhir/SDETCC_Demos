class Vehicle {
  _isEngineOn = false;

  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    this._isEngineOn = true;
    return "Starting Engine";
  }

  drive() {
    return "I can't drive, I don't have that implemented!";
  }
}

class Truck extends Vehicle {
  constructor(make, model, year, numberOfDoors) {
    super(make, model, year);
    this.numberOfDoors = numberOfDoors;
  }

  openDoors() {
    return `All ${this.numberOfDoors} doors on the ${this.make} ${this.model} have been opened`;
  }

  drive() {
    if (this._isEngineOn) return "Truck is now driving!";
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year, engineSize) {
    super(make, model, year);
    this.engineSize = engineSize;
  }

  doAWheelie() {
    this.startEngine();
    console.log(`I've done a wheelie with the engine on!`);
  }

  drive() {
    if (this._isEngineOn) return "Motorcycle is now driving!";
  }
}

// VEHICLE
const vehicle = new Vehicle("RandomAss", "X", 2022);
console.log(vehicle.drive());

// TRUCK
const laMamalona = new Truck("Ford", "F-250", 2023, 4);
console.log(laMamalona.startEngine());
console.log(laMamalona.openDoors());
console.log(laMamalona.drive());

// MOTOTCYCLE
const motoMami = new Motorcycle("Ducatti", "Superleggera", 2023, 4);
console.log(motoMami.startEngine());
console.log(motoMami.doAWheelie());
console.log(motoMami.drive());
