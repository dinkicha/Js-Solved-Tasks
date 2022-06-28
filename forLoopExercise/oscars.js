function oscars(input) {
    let index = 0;
    let name = input[index];
    index++;

    let pointsFromAcademy = Number(input[index]);
    index++;
    let n = Number(input[index]);
    index++;

    let hasNominee = false;

    for (let i = 0; i < n; i++) {
        let currentName = input[index];
        index++;
        let currentPoint = Number(input[index]);
        index++;

        let totalPoints = currentName.length * currentPoint / 2;
        pointsFromAcademy += totalPoints;
        if(pointsFromAcademy > 1250.5){
            hasNominee = true
            console.log(`Congratulations, ${name} got a nominee for leading role with ${pointsFromAcademy.toFixed(1)}!`);
            break;
        }
    }

    if(!hasNominee){
        let diff = Math.abs(pointsFromAcademy - 1250.5)
    console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`);
    }

}
oscars(["Zahari Baharov",

    "205",

    "4",

    "Johnny Depp",

    "45",

    "Will Smith",

    "29",

    "Jet Lee",

    "10",

    "Matthew Mcconaughey",

    "39"]) 