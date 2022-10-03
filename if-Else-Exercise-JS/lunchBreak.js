function lunchBreak(input) {

    let nameSeries = input[0];
    let lenghtEpisode = Number(input[1]);
    let lenghtVacation = Number(input[2]);

    let timeForLunch = lenghtVacation * (1 / 8);
    let timeOtdih = lenghtVacation * (1 / 4);

    let totalTime = lenghtVacation - (timeForLunch + timeOtdih);

    if (totalTime >= lenghtEpisode) {
        console.log(`You have enough time to watch ${nameSeries} and left with ${Math.ceil(totalTime - lenghtEpisode)} minutes free time.`);
    }else {
        console.log(`You don't have enough time to watch ${nameSeries}, you need ${Math.ceil(lenghtEpisode - totalTime)} more minutes.`);
    }



}
lunchBreak(["Teen Wolf",

"48",

"60"])