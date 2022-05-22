function godzillaVsKong(input) {

    let movieBudget = Number(input[0]);
    let countExtra = Number(input[1]);
    let moneyOutfit = Number(input[2]);

    let decorMovie = movieBudget * 0.1;

    if (countExtra > 150) {
        moneyOutfit = moneyOutfit - moneyOutfit * 0.1
    }

    let outfitSum = moneyOutfit * countExtra;

    let totalPrice = outfitSum + decorMovie;

    if (totalPrice > movieBudget) {
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${(totalPrice - movieBudget).toFixed(2)} leva more.`)
    }
    else {
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${(movieBudget - totalPrice).toFixed(2)} leva left.`)
    }

}
godzillaVsKong(["20000",

"120",

"55.5"])