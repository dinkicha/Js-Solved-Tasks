function calculator(firstNumber,operator,secondNumber) {

    let result = 0;
    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
            case '-':
            result = firstNumber - secondNumber;
            break;
            case '/':
            result = firstNumber / secondNumber;
            break;
            case '*':
            result = firstNumber * secondNumber;
            break;
    }
    console.log(result.toFixed(2));
}
calculator(5,

    '+',
    
    10)