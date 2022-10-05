function Main(Input) {
    let number1 = Number(Input[0]);
    let number2 = Number(Input[1]);

    let sum = 0;

    let numberForOutput = [];

    for (let i = number1; i <= number2; i++) {
        if (i % 9 === 0)
        {
            sum += i;
            numberForOutput[numberForOutput.length] = i
        }
    }

    console.log(`The sum: ${sum}`);
    for (let i = 0; i < numberForOutput.length; i++) {
        console.log(numberForOutput[i]);
    }
}
Main(["100", "200"])