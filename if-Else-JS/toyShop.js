function toyShop(input)  {

let priceVacation = Number(input[0]);
let countPuzzles = Number(input[1]);
let countTalkingDolls = Number(input[2]);
let countBears = Number(input[3]);
let countMinions = Number(input[4]);
let countTrucks = Number(input[5]);

let toyCount = countPuzzles + countTalkingDolls + countBears + countMinions + countTrucks;

let money = countPuzzles * 2.60 + countTalkingDolls * 3 + countBears * 4.10 + countMinions * 8.20 + countTrucks * 2;

if(toyCount >= 50){
money = money * 0.75;
}

money = money * 0.90;

let diff = Math.abs(money - priceVacation);

if(money >= priceVacation){
console.log(`Yes! ${diff.toFixed(2)} lv left.`);
}else {
    console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
}

}
toyShop(["40.8",

"20",

"25",

"30",

"50",

"10"])