class Item {
  constructor(name, quantity, price) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }

  getDiscountedPrice() {
    return this.price * 0.8;
  }
}

// 1. Create an empty array called `inventory`.
let inventory = [];

// 2. Implement a function called `addItem` that takes three parameters: `name`, `quantity`, and `price`.
function addItem(name, quantity, price) {
  inventory.push(new Item(name, quantity, price));
}

// 3. Implement a function called `removeItem` that takes a parameter `name`.
function removeItem(name) {
  // Find the index of the item with the given `name` in the `inventory` array
  let index = -1;
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === name) {
      index = i;
      break;
    }
  }

  // If the item is found, remove it from the `inventory` array
  if (index != -1) {
    inventory.splice(index, 1);
    console.log(`Item "${name}" removed from the inventory.`);
  } else {
    console.log(`Item "${name}" not found in the inventory.`);
  }
}

function checkInventory() {
  console.log("Inventario:");
  for (const item of inventory) {
    console.log(
      `${item.name} - cantidad: ${item.quantity}, precio: $${
        item.price
      }, precioMayoreo: $${item.getDiscountedPrice()}`
    );
  }
}

// Agrega elementos al inventario
addItem("Apple", 10, 20);
addItem("Banana", 5, 50);
addItem("Orange", 8, 55);

// Revisa el inventario
checkInventory();
/*
Inventario:
challenge_solved.js:42
Apple - cantidad: 10, precio: $20, precioMayoreo: $16
challenge_solved.js:44
Banana - cantidad: 5, precio: $50, precioMayoreo: $40
challenge_solved.js:44
Orange - cantidad: 8, precio: $55, precioMayoreo: $44
*/

// Borra el elemento del inventario
removeItem("Banana");

// Revisa el inventario de nuevo
checkInventory();
/*
Inventario:
challenge_solved.js:42
Apple - cantidad: 10, precio: $20, precioMayoreo: $16
challenge_solved.js:44
Orange - cantidad: 8, precio: $55, precioMayoreo: $44
*/
