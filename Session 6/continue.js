//continue statement in a for loop
for (let i = 5; i <= 10; i++) {
  if (i == 8) {
    continue;
  }

  console.log("The value of i is ", i);
}

let i = 0;

while (i < 8) {
  i++;
  if (i === 5) {
    continue;
  }
  console.log("Printing i = ", i);
}

//continue with Nested Loop

// outer loop
for (let num1 = 1; num1 <= 3; num1++) {
  // inner loop
  for (let num2 = 6; num2 <= 8; num2++) {
    if (num2 == 6) {
      console.log("Skipped the value of ", num2);
      continue;
    }
    console.log(`num1 = ${num1}, num2 = ${num2}`);
  }
}
