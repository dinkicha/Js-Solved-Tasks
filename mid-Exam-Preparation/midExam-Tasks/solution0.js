function main(input) {
  let numberOfCities = input.shift();
  let result = 0;
  let total = 0;
  for (let i = 1; i <= numberOfCities; i++) {
    let name = input.shift();
    let ownerIncome = Number(input.shift());
    let ownerExpenses = Number(input.shift());

    if (i % 3 === 0 && i % 5 !== 0) {
      ownerExpenses = ownerExpenses + ownerExpenses * 0.5;
    }

    if (i % 5 === 0) {
      ownerIncome -= ownerIncome * 0.1;
    }

    result = ownerIncome - ownerExpenses;
    total += result;
    console.log(`In ${name} Burger Bus earned ${result.toFixed(2)} leva.`);
  }

  console.log(`Burger Bus total profit: ${total.toFixed(2)} leva.`);
}
main([
  "5",
  "Lille",
  "2226.00",
  "1200.60",
  "Rennes",
  "6320.60",
  "5460.20",
  "Reims",
  "600.20",
  "452.32",
  "Bordeaux",
  "6925.30",
  "2650.40",
  "Montpellier",
  "680.50",
  "290.20",
]);
