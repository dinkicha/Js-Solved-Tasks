function processOddNumber(array) {
    let filtered = array.filter((el, i) => i % 2 === 1);
    let doubled = filtered.map(el => el * 2);
    let reversed = doubled.reverse();
    console.log(reversed.join(" "));
}
processOddNumber([10, 15, 20, 25]);
