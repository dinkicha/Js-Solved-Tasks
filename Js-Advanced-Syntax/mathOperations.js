function main(firstNumber, secondNumber, operator) {
    let result = 0;
    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        case '%':
            result = firstNumber % secondNumber;
            break;
        case '**':
            result = firstNumber ** secondNumber;
            break;
    }
    console.log(result);
}
main(5, 6, '+')