import { Vehicle } from "./Vehicle.js";

export class Boat extends Vehicle {
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
