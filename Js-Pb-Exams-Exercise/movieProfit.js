function movieProfit(input) {
    let movieName = input[0];
    let countDays = Number(input[1]);
    let countBilet = Number(input[2]);
    let priceBilet = Number(input[3]);
    let percentForKino = Number(input[4]);

    let biletForDay = countBilet * priceBilet;
    let budget = countDays * biletForDay;
    let percernt = (budget * percentForKino) / 100;
    let profit = Math.abs(budget - percernt);

    console.log(`The profit from the movie ${movieName} is ${profit.toFixed(2)} lv.`);

}
movieProfit(["Python Basics",
"40",
"34785",
"10.45",
"14"])