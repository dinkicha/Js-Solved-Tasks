function main(input) {
    if (typeof input === 'number') {
        let result = (input * input) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    }
}
main(5)