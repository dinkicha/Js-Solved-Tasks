function main(input) {
    let targets = input.shift().split(' ').map(Number);
    input.pop();
    shots = input.map(Number);
    let numberOfShots = 0;

    for (let i = 0; i < shots.length; i++) {
        let currentShot = shots[i];
        let currentTarget = targets[currentShot];

        if (currentTarget >= 0) {
            targets[currentShot] = -1;
            numberOfShots++;
            for (let j = 0; j < targets.length; j++) {
                if (targets[j] > -1) {
                    if (targets[j] > currentTarget) {
                        targets[j] -= currentTarget;
                    } else {
                        targets[j] += currentTarget;
                    }
                }
            }
        }
    }
    console.log(`Shot targets: ${numberOfShots} -> ${targets.join(' ')}`);
}
main(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])