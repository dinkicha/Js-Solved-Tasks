function treasureHunt(input) {
  let state = input.shift().split("|");
  let index = 0;
  let command = input[index];
  index++;
  let i;
  while (command !== "Yohoho!") {
    let tokens = command.split(" ");
    let operation = tokens.shift();

    switch (operation) {
      case "Loot":
        for (let el of tokens) {
          if (!state.includes(el)) {
            state.unshift(el);
          }
        }
        break;
      case "Drop":
        i = Number(tokens[0]);
        if (i < 0 || i > state.length) {
          command = input[index];
          index++;
          continue;
        }
        let element = state.splice(i, 1);
        state.push(element[0]);
        break;
      case "Steal":
        let count = Number(tokens[0]);
        let items = state.splice(-count);
        console.log(items.join(", "));
        break;
    }
    command = input[index];
    index++;
  }

  if (state.length > 0) {
    let average = 0;
    for (let el of state) {
      average += el.length;
    }
    let sum = average / state.length;
    console.log(`Average treasure gain: ${sum.toFixed(2)} pirate credits.`);
  } else {
    console.log("Failed treasure hunt.");
  }
}
treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",

  "Loot Wood Gold Coins",

  "Loot Silver Pistol",

  "Drop 3",

  "Steal 3",

  "Yohoho!",
]);
