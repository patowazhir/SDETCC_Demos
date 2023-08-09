import { Motorcycle } from "./Motorcycle.js";
import { Truck } from "./Truck.js";
import { Boat } from "./Boat.js";

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
