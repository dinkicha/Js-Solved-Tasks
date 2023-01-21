function storeCatalogue(arr) {
    let catalog = {};

    for (const line of arr) {
        let [product, price] = line.split(' : ');
        const firstLetter = product[0];
        if (!catalog.hasOwnProperty(firstLetter)) {
            catalog[firstLetter] = {};
        }
        catalog[firstLetter][product] = price;
    }

    let sorted = Object.keys(catalog).sort((a, b) => a.localeCompare(b));

    for (const key of sorted) {
        console.log(key);
        let sortedProduct = Object.keys(catalog[key]).sort((a, b) => a.localeCompare(b));
        for (const product of sortedProduct) {
            console.log(`  ${product}: ${catalog[key][product]}`);
        }
    }
    
}
console.log(storeCatalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']));