function delivery(input) {
    let chickenMenu = 10.35;
    let fishMenu = 12.40;
    let vegeterianMenu = 8.15;

    let countChickenMenu = Number(input[0]);
    let countFishMenu = Number(input[1]);
    let countVegeterianMenu = Number(input[2]);

    let priceChickenMenu = countChickenMenu * chickenMenu;
    let priceFishMenu = countFishMenu * fishMenu;
    let priceCountVegeterian = countVegeterianMenu * vegeterianMenu;
    let obshtaCenaMenuta = priceChickenMenu + priceFishMenu + priceCountVegeterian;
    let priceDesert = obshtaCenaMenuta * 0.20;
    let priceDelivery = 2.50;
    let totalPriceDelivery = obshtaCenaMenuta + priceDesert + priceDelivery;

    console.log(totalPriceDelivery);
 

}

delivery(["2 ",

"4 ",

"3 "]);