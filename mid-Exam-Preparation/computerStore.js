function computerStore(array) {
  let index = 0;
  let command = array[index];
  index++;
  let sum = 0;
  while (command !== "special") {
    if (command === "regular") {
      break;
    }
    let partPrice = Number(command);
    if (partPrice < 0) {
      console.log("Invalid price!");
      command = array[index];
      index++;
      continue;
    }
    sum += partPrice;
    command = array[index];
    index++;
  }
  let taxes = sum * 1.2 - sum;
  let totalPrice = sum + taxes;
  if (command === "special") {
    totalPrice = totalPrice * 0.9;
  }
  if (totalPrice === 0) {
    console.log("Invalid order!");
  } else {
    console.log(
      `Congratulations you've just bought a new computer!\n` +
        `Price without taxes: ${sum.toFixed(2)}$\n` +
        `Taxes: ${taxes.toFixed(2)}$\n` +
        `-----------\n` +
        `Total price: ${totalPrice.toFixed(2)}$`
    );
  }
}
computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
