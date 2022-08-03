function equalArrays(firstArr, secondArr) {
    let areEqual = true;
    let sum = 0;
    for (let i = 0; i < firstArr.length; i++) {
        firstArr[i] = Number(firstArr[i]);
        for (let z = 0; z < secondArr.length; z++) {
            secondArr[z] = Number(secondArr[z]);
        }
        if (firstArr[i] !== secondArr[z]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        } else {
            for (let h = 0; h < firstArr.length; h++) {
                firstArr[h] = Number(firstArr[h]);
                sum += Number(firstArr[h]);
            }
            console.log(`Arrays are identical. Sum: ${sum}`);
            areEqual = true;
            break;
        }
    }
}

equalArrays(
    ['1', '2', '3', '4', '5'],

    ['1', '2', '4', '4', '5']
);
