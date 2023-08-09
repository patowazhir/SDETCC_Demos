import { Vehicle } from "./Vehicle.js";

export class Motorcycle extends Vehicle {
  constructor(make, model, year, engineSize) {
    super(make, model, year);
    this.engineSize = engineSize;
  }
  doAWheelie() {
    this.startEngine();
    return `I've done a wheelie with the engine on!`;
  }
}
