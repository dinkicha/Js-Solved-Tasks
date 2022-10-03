function sumPrimeNonPrime(input) {

    let index = 0;

    let command = input[index];
    index++;

    let sumPrimeNumber = 0;
    let sumNoPrimeNumber = 0;

    while (command !== 'stop') {
        let num = Number(command);

        if (num < 0) {
            console.log('Number is negative.');
            command = input[index];
            index++;
            continue;
        }
        if (num === 1) {
            sumPrimeNumber = sumPrimeNumber + 1;
            command = input[index];
            index++;
            continue;
        }
        let isPrime = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                sumNoPrimeNumber = sumNoPrimeNumber + num;
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            sumPrimeNumber = sumPrimeNumber + num;
        }
        command = input[index];
        index++;
    }

    console.log(`Sum of all prime numbers is: ${sumPrimeNumber}`);
    console.log(`Sum of all non prime numbers is: ${sumNoPrimeNumber}`);
}


sumPrimeNonPrime(["30",

"83",

"33",

"-1",

"20",

"stop"])