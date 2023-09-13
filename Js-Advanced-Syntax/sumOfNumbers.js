function main(firstNumber, secondNumber) {
    let result = 0;
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);
    for (let i = num1; i <= num2; i++) {
        result += i;
    }
    return result
}
console.log(main('1', '5'))