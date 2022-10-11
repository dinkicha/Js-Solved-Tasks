function printEveryNElement(array, n) {
    let secondArray = [];
    for (let i = 0; i < array.length; i += n) {
        secondArray.push(array[i]);
    }
    return secondArray
}
console.log(printEveryNElement(['dsa', 'asd', 'test', 'tset'], 2))