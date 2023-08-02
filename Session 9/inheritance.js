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
}

class Boat extends Vehicle {
  constructor(make, model, year, boatClass) {
    super(make, model, year);
    this.boatClass = boatClass;
  }

  navigate() {
    if (this._isEngineOn) {
      return `Boat (${this.model}, ${this.year}, class ${this.boatClass}) is moving forward!`;
    } else {
      return "Boat is not on!";
    }
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
}

class Motorcycle extends Vehicle {
  constructor(make, model, year, engineSize) {
    super(make, model, year);
    this.engineSize = engineSize;
  }

  doAWheelie() {
    this.startEngine();
    return `I've done a wheelie with the engine on!`;
  }
}

// BOAT
const yacht = new Boat("Neptune", "Trident", 2020, "A");
console.log(yacht.navigate());
console.log(yacht.startEngine());
console.log(yacht.navigate());

// TRUCK
const laMamalona = new Truck("Ford", "F-250", 2023, 4);
console.log(laMamalona.startEngine());
console.log(laMamalona.openDoors());

// MOTOTCYCLE
const motoMami = new Motorcycle("Ducatti", "Superleggera", 2023, 4);
console.log(motoMami.startEngine());
console.log(motoMami.doAWheelie());
