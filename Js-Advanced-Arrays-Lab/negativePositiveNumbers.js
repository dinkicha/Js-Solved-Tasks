function main(input) {
    let result = [];

    for (let num of input) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }
    
    for (let num of result) {
        console.log(num);
    }

    // console.log(result.join('\n'));
}
main([7, -2, 8, 9]);