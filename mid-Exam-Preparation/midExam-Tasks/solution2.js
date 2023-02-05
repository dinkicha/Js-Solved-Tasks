function main(input) {
  let array = input.shift().split(", ");
  let n = Number(input.shift());
  let startingL = input.length;

  for (let i = 0; i < startingL; i++) {
    let command = input.shift().split(", ");
    if (command[0] === "Add") {
      if (array.includes(command[1])) {
        console.log(`Card is already in the deck`);
      } else {
        array.push(command[1]);
        console.log(`Card successfully added`);
      }
    } else if (command[0] === "Remove") {
      if (array.includes(command[1])) {
        let card = array.indexOf(command[1]);
        array.splice(card, 1);
        console.log(`Card successfully removed`);
      } else {
        console.log(`Card not found`);
      }
    } else if (command[0] === "Remove At") {
      if (command[1] < 0 || command[1] > array.length) {
        console.log(`Index out of range`);
      } else {
        array.splice(command[1], 1);
        console.log(`Card successfully removed`);
      }
    } else if (command[0] === "Insert") {
      if (command[1] < 0 || command[1] > array.length) {
        console.log(`Index out of range`);
      } else {
        if (array.includes(command[2])) {
          console.log(`Card is already added`);
        } else {
          array.splice(command[1], 0, command[2]);
          console.log(`Card successfully added`);
        }
      }
    }
  }
  console.log(array.join(", "));
}
main([
  "Two of Clubs, King of Spades, Five of Spades, Jack of Hearts",
  "2",
  "Add, Two of Clubs",
  "Remove, Five of Hearts",
]);
