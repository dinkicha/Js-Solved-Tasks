function main(input) {
    let result = [];

    for (let i = 0; i < input.length; i += 2) {
        result.push(input[i])
    }
    console.log(result.join(' '));
}
main(['20', '30', '40', '50', '60'])