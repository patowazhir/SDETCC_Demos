class Producto {
  constructor(nombre, marca, precio, stock) {
    this.nombre = nombre;
    this.marca = marca;
    this.precio = precio;
    this.stock = stock;
  }

  mostrarInformacion() {
    return `${this.nombre} (${this.marca}) - Precio: $${this.precio.toFixed(
      2
    )} - Stock: ${this.stock} unidades`;
  }
}

class Smartphone extends Producto {
  constructor(nombre, marca, precio, stock, modelo, pantalla) {
    super(nombre, marca, precio, stock);
    this.modelo = modelo;
    this.pantalla = pantalla;
  }

  mostrarInformacion() {
    return `${this.nombre} (${this.marca}) - Modelo: ${
      this.modelo
    } - Pantalla: ${this.pantalla}" - Precio: $${this.precio.toFixed(
      2
    )} - Stock: ${this.stock} unidades`;
  }
}

class Laptop extends Producto {
  constructor(nombre, marca, precio, stock, modelo, almacenamiento) {
    super(nombre, marca, precio, stock);
    this.modelo = modelo;
    this.almacenamiento = almacenamiento;
  }

  mostrarInformacion() {
    return `${this.nombre} (${this.marca}) - Modelo: ${
      this.modelo
    } - Almacenamiento: ${
      this.almacenamiento
    }GB - Precio: $${this.precio.toFixed(2)} - Stock: ${this.stock} unidades`;
  }
}

class Tienda {
  constructor(nombre) {
    this.nombre = nombre;
    this.productos = [];
    this.gananciasTotales = 0;
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  realizarVenta(producto, cantidad) {
    if (producto.stock >= cantidad) {
      producto.stock -= cantidad;
      this.gananciasTotales += producto.precio * cantidad;
      console.log(
        `Venta realizada: ${cantidad} unidades de ${producto.nombre}`
      );
    } else {
      console.log(`No hay suficiente stock de ${producto.nombre}`);
    }
  }

  mostrarInventario() {
    console.log(`Inventario de la tienda ${this.nombre}:`);
    this.productos.forEach((producto) => {
      console.log(producto.mostrarInformacion());
    });
  }
}

// Crear instancias de productos
const smartphone1 = new Smartphone(
  "Smartphone",
  "Samsung",
  599.99,
  10,
  "Galaxy S21",
  6.2
);
const smartphone2 = new Smartphone(
  "Smartphone",
  "Apple",
  699.99,
  15,
  "iPhone 13",
  6.1
);
const laptop1 = new Laptop("Laptop", "HP", 899.99, 5, "Pavilion", 512);
const laptop2 = new Laptop("Laptop", "Dell", 1099.99, 8, "XPS 13", 256);

// Crear instancia de tienda y agregar productos
const tiendaElectronica = new Tienda("Electronics Store");
tiendaElectronica.agregarProducto(smartphone1);
tiendaElectronica.agregarProducto(smartphone2);
tiendaElectronica.agregarProducto(laptop1);
tiendaElectronica.agregarProducto(laptop2);

// Realizar ventas y mostrar ganancias
tiendaElectronica.realizarVenta(smartphone1, 3);
tiendaElectronica.realizarVenta(laptop2, 2);

// Mostrar inventario y ganancias totales
tiendaElectronica.mostrarInventario();
console.log(
  `Ganancias totales: $${tiendaElectronica.gananciasTotales.toFixed(2)}`
);

// Pruebas adicionales
console.log("\nPruebas adicionales:");
console.log("Mostrando información detallada de productos:");
console.log(smartphone1.mostrarInformacion());
console.log(laptop2.mostrarInformacion());

console.log("\nIntentando vender más stock del disponible:");
tiendaElectronica.realizarVenta(smartphone2, 20);

console.log("\nMostrando inventario actualizado:");
tiendaElectronica.mostrarInventario();
