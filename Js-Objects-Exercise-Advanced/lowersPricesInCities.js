function lowestPrices(towns) {
    let modified = {};
    for (let i = 0; i < towns.length; i++) {
        const element = towns[i];
        const [name, product, price] = element.split(' | ');
        if (!modified[product]) modified[product] = {};
        modified[product][name] = Number(price);

    }
    let finalResult = [];
    for (const key in modified) {
        let sorted = Object.entries(modified[key]).sort((a, b) => a[1] - b[1]);
        let [town, price] = sorted[0];
        finalResult.push(`${key} -> ${price} (${town})`);
    }
    return finalResult.join('\n');
}
console.log(lowestPrices(['Sample Town | Sample Product | 1000',

    'Sample Town | Orange | 2',

    'Sample Town | Peach | 1',

    'Sofia | Orange | 3',

    'Sofia | Peach | 2',

    'New York | Sample Product | 1000.1',

    'New York | Burger | 10']));