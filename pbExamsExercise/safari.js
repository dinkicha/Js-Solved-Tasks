function safari(input) {
    let budget = Number(input[0]);
    let neededGas = Number(input[1]);
    let dayOfTheWeek = input[2];

    let priceGas = neededGas * 2.10;
    let total = priceGas + 100;

    if(dayOfTheWeek === 'Sunday'){
        total = total - (total * 0.20);
    }else{
        total = total - (total * 0.10);
    }

    if(budget >= total){
        console.log(`Safari time! Money left: ${(budget - total).toFixed(2)} lv. `)
    }else {
        console.log(`Not enough money! Money needed: ${(total - budget).toFixed(2)} lv.`);
    }

}
safari([1000,10,'Sunday'])