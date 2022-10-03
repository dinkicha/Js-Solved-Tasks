function storage(input) {
  let result = new Map();

  for (const line of input) {
    let [product, quantity] = line.split(" ");
    quantity = Number(quantity);

    if (result.has(product)) {
      let existing = result.get(product);
      result.set(product, quantity + existing);
    } else {
      result.set(product, quantity);
    }
  }
  for (const [product, quantity] of result) {
    console.log(`${product} -> ${quantity}`);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
