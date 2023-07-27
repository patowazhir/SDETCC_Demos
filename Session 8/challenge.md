# Session 8 Challenge

## Gestión de Inventario de una Tienda

### Descripción:

Se te ha encargado crear un sistema simple de gestión de inventario para una tienda. El sistema debe permitir a los usuarios agregar elementos al inventario, eliminar elementos del inventario y verificar el estado actual del inventario.

### Instrucciones:

- Crea un array vacío llamado `inventario`.

- Crea una clase llamada `Item`
  - Esta clase debe tener tres atributos: `nombre, cantidad y precio`
  - Esta clase debe tener un método llamado `obtenerPrecioMayoreo`, que no recibe parámetros, y regresa el valor de el `precio` del producto multiplicado por `0.80`, para reflejar un 20% de descuento.

- Implementa una función llamada `agregarItem` que tome tres parámetros: `nombre, cantidad y precio`. Esta función debe crear un objeto de tipo `Item`. La función debe agregar el objeto al array `inventario`.

- Implementa una función llamada `eliminarItem` que tome un parámetro `nombre`. Esta función debe eliminar el elemento tipo `Item` con el `nombre` proporcionado del array `inventario`. Si el elemento no se encuentra en el inventario, mostrar un mensaje de error.

- Implementa una función llamada `verificarInventario` que no tome parámetros. Esta función debe mostrar el estado actual del inventario recorriendo el array e imprimiendo los detalles de cada elemento (`nombre, cantidad, precio`) y su precio de mayoreo utilizando el método de `obtenerPrecioMayoreo`.

Prueba tu código agregando, eliminando y verificando el inventario en diferentes escenarios.

**Ejemplo de Uso:**

```js
// Agrega elementos al inventario
addItem("Apple", 10, 20);
addItem("Banana", 5, 50);
addItem("Orange", 8, 55);

// Revisa el inventario
checkInventory();
/*
Inventario:
Apple - cantidad: 10, precio: $20, precioMayoreo: $16
Banana - cantidad: 5, precio: $50, precioMayoreo: $40
Orange - cantidad: 8, precio: $55, precioMayoreo: $44
*/

// Borra el elemento del inventario
removeItem("Banana");

// Revisa el inventario de nuevo
checkInventory();
/*
Inventario:
Apple - cantidad: 10, precio: $20, precioMayoreo: $16
Orange - cantidad: 8, precio: $55, precioMayoreo: $44
*/
```
