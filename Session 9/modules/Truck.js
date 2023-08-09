import { Vehicle } from "./Vehicle.js";

export class Truck extends Vehicle {
  constructor(make, model, year, numberOfDoors) {
    super(make, model, year);
    this.numberOfDoors = numberOfDoors;
  }

  openDoors() {
    return `All ${this.numberOfDoors} doors on the ${this.make} ${this.model} have been opened`;
  }
}
