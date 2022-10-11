function main(array) {
    let max = [array[0]];

    for (let i = 1; i < array.length; i++) {
        let current = array[i]
        if (current >= max[max.length - 1]) {
            max.push(current);
        }
    }
    return max
}
console.log(main([1, 3, 8, 4, 10, 12, 3, 2, 24]));