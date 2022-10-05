function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let countFisherman = Number(input[2]);
    let rent = 0;
    switch (season) {
        case 'Spring':
            rent = 3000;
            break;
        case 'Summer':
        case 'Autumn':
            rent = 4200;
            break;
        case 'Winter':
            rent = 2600;
            break;

    }
    if (countFisherman <= 6) {
        rent = rent * 0.90;
    } else if (countFisherman >= 7 && countFisherman <= 11) {
        rent = rent * 0.85;
    } else {
        rent = rent * 0.75;
    }


    if (countFisherman % 2 === 0 && season !== 'Autumn') {
        rent = rent * 0.95;
    }
    let diff = Math.abs(budget - rent)
    if (budget >= rent) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}
fishingBoat(["2000", "Winter", "13"])