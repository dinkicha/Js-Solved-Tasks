function fruitMarket(input) {
    let  priceStrawberriesKg = Number(input[0]);
    let countBananasKg = Number(input[1]);
    let countOrangesKg = Number(input[2]);
    let countRaspberryKg = Number(input[3]);
    let countStrawberriesKg = Number(input[4]);

    let priceRaspberry = priceStrawberriesKg / 2;
    let priceOranges = priceRaspberry * 0.6;
    let priceBananas = priceRaspberry - (0.8. * priceRaspberry);

    let totalPriceRaspberry = countRaspberryKg * priceRaspberry;
    let totalPriceOranges = countOrangesKg * priceOranges;
    let totalPriceBananas = priceBananas * countBananasKg;
    let totalPriceStrawberries = countStrawberriesKg * priceStrawberriesKg;
    let finalPrice = totalPriceRaspberry + totalPriceOranges + totalPriceBananas + totalPriceStrawberries;

    console.log(finalPrice.toFixed(2));
}
fruitMarket(['48', '10', '3.3', '6.5', '1.7'])
