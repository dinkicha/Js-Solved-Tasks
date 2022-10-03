function main(input) {
    let first = Number(input.shift());
    let last = Number(input.pop());
    return first + last;
}
console.log(main(['20', '30', '40']));