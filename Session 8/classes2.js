/**
 * Una Clase de Javascript no es un Objeto
 * Es el "template" de un Objeto
 */
class Carro {
  // Propiedad
  tieneGas;

  // El Constructor se ejecuta al instanciar la clase.
  // Los paramatros de el constructor se convierten en propiedades
  constructor(modelo, marca, litrosGasolina) {
    this.modelo = modelo;
    this.marca = marca;
    this.litrosGasolina = litrosGasolina;
    if (this.litrosGasolina > 0) this.tieneGas = true;
    console.log("Instanciado!");
  }

  imprimirDetalles() {
    return `
    Modelo: ${this.modelo}
    Marca: ${this.marca}
    Litros Gasolina: ${this.litrosGasolina}
    Tiene Gasolina: ${this.tieneGas}
    `;
  }

  maneja(kilometros) {
    this.litrosGasolina -= kilometros * 0.5;
    if (this.litrosGasolina > 0) this.tieneGas = true;
  }
}

// Objeto 1
const carro1 = new Carro("Porsche", "Cayenne", 200);
console.log(carro1.imprimirDetalles());
carro1.maneja(24);
console.log(carro1.imprimirDetalles());

// Objeto 2
const carro2 = new Carro("Nissan", "Tsuru", 100);
console.log(carro2.imprimirDetalles());
carro2.maneja(24);
console.log(carro2.imprimirDetalles());
