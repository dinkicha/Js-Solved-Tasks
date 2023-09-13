function tennisRanklist(input) {
    let index = 0;
    let countTournaments = Number(input[index]);
    index++;

    let startPoints = Number(input[index]);
    index++;



    let currentPoint = 0;
    let winCounter = 0;
    for (let i = 0; i < countTournaments; i++) {
        let res = input[index];
        index++;

        switch (res) {
            case 'W':
                winCounter++;
                currentPoint += 2000;
                break;
            case 'F':
                currentPoint += 1200;
                break;
            case 'SF':
                currentPoint += 720;
                break;

        }
    }

        let finalPoints = startPoints + currentPoint;
        let averagePoints = Math.floor(currentPoint / countTournaments);
        let percentageWinTournaments = winCounter / countTournaments * 100;

        console.log(`Final points: ${finalPoints}`);
        console.log(`Average points: ${averagePoints}`);
        console.log(percentageWinTournaments.toFixed(2)+ '%');

}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"])