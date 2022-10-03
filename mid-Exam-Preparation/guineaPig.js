function guineaPig(input) {
    let index = 0;
    let foodInKg = Number(input[index]);
    index++;
    let hayInKg = Number(input[index]);
    index++;
    let coverInKg = Number(input[index]);
    index++;
    let puppyKg = Number(input[index]);
    index++;
    let isLower = true;
    let dayCount = 0;

    for (let i = 0; i < 30; i++) {
        dayCount++;
        foodInKg -= 0.3;
        if (dayCount % 2 === 0) {
            hayInKg -= Math.abs(foodInKg * 0.95 - foodInKg);
        }
        if (dayCount % 3 === 0) {
            coverInKg -= puppyKg * (1 / 3)
        }
        if (foodInKg < 0) {
            console.log("Merry must go to the pet store!");
            isLower = false;
            break;
        }
        if (hayInKg < 0) {
            console.log("Merry must go to the pet store!");
            isLower = false;
            break;
        }
        if (coverInKg < 0) {
            console.log("Merry must go to the pet store!");
            isLower = false;
            break;
        }
    }

    if (isLower) {
        console.log(
            `Everything is fine! Puppy is happy! Food: ${foodInKg.toFixed(
                2
            )}, Hay: ${hayInKg.toFixed(2)}, Cover: ${coverInKg.toFixed(2)}.`
        );
    }

}
guineaPig(["10", "5", "5.2", "1"]);
