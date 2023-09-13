function listedProducts(array) {
    let sorted = array.sort()
    for (let i = 0; i < sorted.length; i++) {
        console.log(`${i + 1}.${array[i]}`);
    }
}
listedProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
