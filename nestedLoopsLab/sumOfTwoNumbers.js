function sumOfTwoNumbers(input) {

    let start = Number(input[0]);

    let ending = Number(input[1]);

    let specialNumber = Number(input[2]);

    let combinations = 0;

    let found = false;


    for (let i = start; i <= ending; i++) {
        for (let j = start; j <= ending; j++) {
            let res = i + j;
            combinations++;
            if (res === specialNumber) {
                console.log(`Combination N:${combinations} (${i} + ${j} = ${specialNumber})`);
                found = true;
            break;
            }
            

        }
        if(found){
            break;
        }
    }

    if(!found){
        console.log(`${combinations} combinations - neither equals ${specialNumber}`);
    }

}
sumOfTwoNumbers(["88", "888", "2000"])