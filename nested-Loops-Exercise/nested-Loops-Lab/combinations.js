function combinations(input) {

    let n = Number(input[0]);

    let validCombinations = 0;

    for (let i = 0; i <= n; i++) {

        for (let k = 0; k <= n; k++) {

            for (let b = 0; b <= n; b++) {
                if (i + k + b === n) {
                    validCombinations++;
                } 

            }

        }
       
    }
    
    console.log(validCombinations);
}
combinations(['20'])