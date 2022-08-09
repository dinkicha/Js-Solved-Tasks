function orders(product, quantity) {
  let sum = 0;
  switch (product) {
    case "coffee":
      sum += 1.5;
      break;
    case "water":
      sum += 1.0;
      break;
    case "coke":
      sum += 1.4;
      break;
    case "snacks":
      sum += 2.0;
      break;
  }
  let total = sum * quantity;
  console.log(total.toFixed(2));
}
orders("water", 5);
