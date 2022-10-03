// function main(input) {
//   let commands = {
//     "Add Stop": add,
//     "Remove Stop": remove,
//     'Switch': swap,
//   };

//   let stops = input.shift();

//   while (input[0] !== "Travel") {
//     let tokens = input.shift().split(":");
//     let command = tokens[0];
//     let action = commands[command];
//     action(tokens[1], tokens[2]);
//     console.log(stops);
//   }

//   console.log(`Ready for world tour! Planned stops: ${stops}`);

//   function add(index, word) {
//     index = Number(index);
//     if (validate(index)) {
//       let left = stops.substring(0, index);
//       let right = stops.substring(index);
//       stops = left + word + right;
//     }
//   }

//   function remove(start, end) {
//     start = Number(start);
//     end = Number(end);
//     if (validate(start) && validate(end)) {
//       let left = stops.substring(0, Number(start));
//       let right = stops.substring(end + 1);
//       stops = left + right;
//     }
//   }

//   function swap(old, newString) {
//     let pattern = new RegExp(old);
//     stops = stops.replace(pattern, newString);
//   }

//   function validate(index) {
//     return index >= 0 && index < stops.length;
//   }
// }
// main([
//   "Hawai::Cyprys-Greece",
//   "Add Stop:7:Rome",
//   "Remove Stop:11:16",
//   "Switch:Hawai:Bulgaria",
//   "Travel",
// ]);





































function main(input) {
  let actions = {
    'Add Stop': add,
    'Remove Stop': remove,
    'Switch': swap
  }

  let text = input.shift();

  while (input[0] !== 'Travel') {
    let tokens = input.shift().split(':');
    let command = tokens[0];
    let first = tokens[1];
    let second = tokens[2];
    let action = actions[command];
    action(first, second)
    console.log(text);
  }

  console.log(`Ready for world tour! Planned stops: ${text}`);

  function add(index, word) {
    let left = text.substring(0, index);
    let right = text.substring(index);
    text = left + word + right;
  }

  function remove(start, end) {
    start = Number(start);
    end = Number(end);
    if (validate(start) && validate(end)) {
      let left = text.substring(0, start);
      let right = text.substring(end + 1);
      text = left + right;
    }
  }

  function swap(oldString,newString) {
    let pattern = new RegExp(oldString);
    text = text.replace(pattern,newString);

  }

  function validate(index) {
    return index >= 0 && index < text.length;
  }

}
main(["Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel"])
