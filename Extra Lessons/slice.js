/**
 * The slice() method returns selected elements in an array, as a new array.
 * The slice() method selects from a given start, up to a (not inclusive) given end.
 * The slice() method does not change the original array.
 * https://www.w3schools.com/jsref/jsref_slice_array.asp
 */
const frutas = ["Plátano", "Naranja", "Limón", "Manzana", "Mango"];

const citricos = frutas.slice(2);
console.log(citricos);
console.log(frutas);

const misFavoritos = frutas.slice(-3, -1);
console.log(citricos);
console.log(frutas);

/**
The splice() method adds and/or removes array elements.
The splice() method overwrites the original array.
https://www.w3schools.com/jsref/jsref_splice.asp
 */

frutas.splice(2, 0, "Fresa", "Kiwi");
console.log(frutas);

frutas.splice(2, 0);
console.log(frutas);
