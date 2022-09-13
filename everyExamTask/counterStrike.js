function main(input) {
    let index = 0;
    let initialEnergy = Number(input[index]);
    index++
    let tokens = Number(input[index]);
    index++
    let winCounter = 0;

    while (tokens !== 'End of battle') {
        let distance = Number(tokens);
        if (initialEnergy < distance) {
            console.log(`Not enough energy! Game ends with ${winCounter} won battles and ${Math.trunc(initialEnergy)} energy`);
            break;
        }

        initialEnergy -= distance;
        if(initialEnergy >= 0) {
            winCounter++;
        }
        if (winCounter % 3 === 0) {
            initialEnergy += winCounter;
        }
        tokens = input[index];
        index++;

    }

    if (tokens === 'End of battle') {
        console.log(`Won battles: ${winCounter}. Energy left: ${initialEnergy}`);
    }
}
main((["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]))