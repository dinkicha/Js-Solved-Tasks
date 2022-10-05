function agencyProfit(input) {
    let nameCompany = input[0];
    let countBiletOld = Number(input[1]);
    let countKidsBilet = Number(input[2]);
    let netPriceBilerOld = Number(input[3]);
    let priceTax = Number(input[4]);

    let netPriceKidsBilet = netPriceBilerOld * 0.30;
    let priceOldBiletWithTax = netPriceBilerOld + priceTax;
    let netPriceKidsBilerWithTax = netPriceKidsBilet + priceTax;
    let totalPriceBilets = (countKidsBilet * netPriceKidsBilerWithTax)   + (countBiletOld * priceOldBiletWithTax);
    let profit = totalPriceBilets * 0.20;

    console.log(`The profit of your agency from ${nameCompany} tickets is ${profit.toFixed(2)} lv.`);

}
agencyProfit(["WizzAir",
"15",
"5",
"120",
"40"])