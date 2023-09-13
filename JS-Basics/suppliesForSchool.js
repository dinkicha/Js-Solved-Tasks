function supplies(input) {
    let countPens = Number(input[0]);
    let countMarkers = Number(input[1]);
    let litresPreparat = Number(input[2]);
    let percDiscount = Number(input[3]);

    let priceHimikali = countPens * 5.80;
    let priceMarkers = countMarkers * 7.20;
    let pricePreparat = litresPreparat * 1.20;
    let priceMateriali = priceHimikali + priceMarkers + pricePreparat;

    let priceDiscount = priceMateriali - (priceMateriali * percDiscount / 100);

    console.log(priceDiscount);

}

supplies(["2 ",

"3 ",

"4 ",

"25 "]);