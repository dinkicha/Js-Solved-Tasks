function barIncome(input) {
  let pattern = /%([A-Z][a-z]*)%.*?<(\w+)>.*?\|(\d+)\|.*?(-?\d+(?:\.\d+)?)\$/;
  let total = 0;
  while (input[0] !== "end of shift") {
    let line = input.shift();

    let match = pattern.exec(line);
    if (match !== null) {
      let [_, name, product, qty, price] = match;
      qty = Number(qty);
      price = Number(price);
      total += qty * price;
      console.log(`${name}: ${product} - ${(qty * price).toFixed(2)}`);
    }
  }
  console.log(`Total income: ${total.toFixed(2)}`);
}
barIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
