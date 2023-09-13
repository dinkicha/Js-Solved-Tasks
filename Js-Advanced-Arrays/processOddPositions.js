function main(input) {
    return input.filter((a, i) => i % 2 !== 0).map(i => i * 2).reverse().join(' ')
}
console.log(main([10, 15, 20, 25]));