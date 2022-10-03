function repainting(input) {

    let nylon = 1.50;
    let paint = 14.50;
    let thinnerPaint = 5.0;
    let bags = 0.40;

    let necessaryNylon = Number(input[0]);
    let necessaryPaint = Number(input[1]);
    let countThinner = Number(input[2]);
    let hoursWorking = Number(input[3]);

    let priceNylon = (necessaryNylon + 2) * nylon;
    let pricePaint = (necessaryPaint * 0.1 + necessaryPaint) * paint;
    let priceThinner = countThinner * thinnerPaint;
    let priceMaterials = priceNylon + pricePaint + priceThinner + bags;
    let priceWorkers = (priceMaterials * 0.30) * hoursWorking;
    let lastSuma = priceMaterials + priceWorkers;

   console.log(lastSuma);

}
repainting(["10 ",

"11 ",

"4 ",

"8 "]);