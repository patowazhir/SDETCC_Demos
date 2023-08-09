export class Vehicle {
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
