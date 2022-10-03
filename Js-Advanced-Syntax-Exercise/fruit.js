function main(fruit, weightInGrams, priceForKg) {
    const weightInKG = weightInGrams / 1000;
    const total = weightInKG * priceForKg;
    console.log(`I need $${total.toFixed(2)} to buy ${weightInKG.toFixed(2)} kilograms ${fruit}.`);
}
main('orange', 2500, 1.80)
