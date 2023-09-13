function main(firstNumber, secondNumber, thirdNumber) {
    let result;
    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        result = firstNumber
    } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        result = secondNumber;
    } else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
        result = thirdNumber;
    }
    console.log(`The largest number is ${result}.`);
}
main(5, -3, 16)