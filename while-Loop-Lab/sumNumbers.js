function sumOfNumbers(input){

    let totalNumber = Number(input[0]);
    let sumOfNumbers = 0;
    let index = 1;
    let currentNumber = input[index];
    

    while (sumOfNumbers < totalNumber) {
        sumOfNumbers = sumOfNumbers + Number(currentNumber);
        index++;
        currentNumber = input[index];
    }

    console.log(sumOfNumbers);

}
sumOfNumbers(["100", "10", "20", "30", "40"])