function counterStrike(input) {
  let index = 0;
  let initialEnergy = Number(input[index]);
  index++;
  let command = input[index];
  index++;

  let countWin = 0;
  while (command !== "End of battle") {
    let distance = Number(command);
    if (initialEnergy < distance) {
      console.log(
        `Not enough energy! Game ends with ${countWin} won battles and ${initialEnergy} energy`
      );
      break;
    }

    initialEnergy -= distance;
    if (initialEnergy >= 0) {
      countWin++;
    }

    if (countWin % 3 === 0) {
      initialEnergy += countWin;
    }
    command = input[index];
    index++;
  }
  if (command === "End of battle") {
    console.log(`Won battles: ${countWin}. Energy left: ${initialEnergy}`);
  }
}
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
