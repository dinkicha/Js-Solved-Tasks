function equipment(input) {
    let yearTaxBasketball = Number(input[0]);

    let priceYearTraining = yearTaxBasketball;
    let priceBasketballShoes = priceYearTraining - 0.4 * priceYearTraining;
    let priceBasketballOutfit = priceBasketballShoes - 0.2 * priceBasketballShoes;
    let priceBasketballBall = priceBasketballOutfit / 4;
    let priceBasketballAccesories = priceBasketballBall / 5;
    let totalPriceEquipment = priceYearTraining + priceBasketballShoes + priceBasketballOutfit + priceBasketballBall + priceBasketballAccesories;

    console.log(totalPriceEquipment);
}
equipment(["365"]);