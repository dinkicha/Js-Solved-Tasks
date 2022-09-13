function main(input) {
  let arr = input.shift().split(", ");
  while (input[0] !== "Craft!") {
      let tokens = input.shift().split(" - ");
      let command = tokens[0];
      let item = tokens[1];
      switch (command) {
          case "Collect":
              if (!arr.includes(item)) {
                  arr.push(item);
              }
              break;
          case "Drop":
              if (arr.includes(item)) {
                  let indexToBeRemoved = arr.indexOf(item);
                  arr.splice(indexToBeRemoved, 1);
              }
              break;
          case "Combine Items":
              let items = item.split(":");
              if (arr.includes(items[0])) {
                  arr.pop(items[0]);
                  arr.unshift(items[0], items[1]);
              }
              break;
          case "Renew":
              if (arr.includes(item)) {
                  let indexToChange = arr.indexOf(item);
                  arr.splice(indexToChange, 1);
                  arr.push(item);
              }
              break;
      }
  }
  if (input[0] === 'Craft!') {
      console.log(arr.join(', '));
  }
}
main([
  "Iron, Sword",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);
