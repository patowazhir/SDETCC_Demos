// 1. Create an empty array called `inventory`.
let inventory = [];

// 2. Implement a function called `addItem` that takes three parameters: `name`, `quantity`, and `price`.
function addItem(name, quantity, price) {
  // Create an object representing an item
  let item = {
    name: name,
    quantity: quantity,
    price: price,
  };

  // Add the item object to the `inventory` array
  inventory.push(item);
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
  console.log("Inventory:");
  for (let i = 0; i < inventory.length; i++) {
    let item = inventory[i];
    console.log(`- ${item.name}: ${item.quantity} (Price: $${item.price})`);
  }
}

// Test your code by adding, removing, and checking the inventory in different scenarios.

// Add items to the inventory
addItem("Apple", 10, 0.5);
addItem("Banana", 5, 0.3);
addItem("Orange", 8, 0.4);

// Check the inventory
checkInventory();
// Output:
// Inventory:
// - Apple: 10 (Price: $0.5)
// - Banana: 5 (Price: $0.3)
// - Orange: 8 (Price: $0.4)

// Remove an item from the inventory
removeItem("Banana");

// Check the inventory again
checkInventory();
// Output:
// Inventory:
// - Apple: 10 (Price: $0.5)
// - Orange: 8 (Price: $0.4)
