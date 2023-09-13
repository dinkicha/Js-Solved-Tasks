function shopping(input) {
    let budgetPetio = Number(input[0]);
    let countVideoCards = Number(input[1]);
    let countprocesor = Number(input[2]);
    let countRam = Number(input[3]);

    let priceVideoCards = countVideoCards * 250;
    let priceProcesor = priceVideoCards * 0.35;
    let priceProcesori2 = countprocesor * priceProcesor;
    let priceRam = priceVideoCards * 0.1;
    let priceRam2 = countRam * priceRam;

    let totalSum = priceVideoCards + priceProcesori2 + priceRam2;

    if (countVideoCards > countprocesor) {
        totalSum = totalSum - totalSum * 0.15

    }
    if(totalSum <= budgetPetio){
        console.log(`You have ${(budgetPetio - totalSum).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalSum - budgetPetio).toFixed(2)} leva more!`);
    }


    
}
shopping(["900",

"2",

"1",

"3"])