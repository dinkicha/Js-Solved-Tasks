function main(firstNumber, secondNumber) {
    let smaller = Math.min(firstNumber, secondNumber);
    let commonDivisor = 1;
    for (let i = 1; i <= smaller; i++) {
        if (firstNumber % i == 0 && secondNumber % i == 0) {
            commonDivisor = i;
        }
    }
    console.log(commonDivisor);
}
main(2154, 458)