class Persona {
  constructor(nombre, edad, sabeManejar) {
    this.nombre = nombre;
    this.edad = edad;
    this.sabeManejar = sabeManejar;
  }

  saluda() {
    return `Hola! Me llamo ${this.nombre}.`;
  }

  esMayorDeEdad() {
    return this.edad > 18;
  }

  maneja() {
    if (this.sabeManejar) {
      return `A donde quieres que maneje?`;
    } else {
      return `No se manejar!`;
    }
  }
}

const anna = new Persona("Anna", 37, false);
console.log(anna.saluda());
console.log(anna.esMayorDeEdad());
console.log(anna.maneja());

const pedro = new Persona("Pedro", 12, false);
console.log(pedro.saluda());
console.log(pedro.esMayorDeEdad());
console.log(pedro.maneja());

const angel = new Persona("Angel", 25, true);
console.log(angel.saluda());
console.log(angel.esMayorDeEdad());
console.log(angel.maneja());
