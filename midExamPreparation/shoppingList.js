// function shoppingList(input) {
//     let list = input.shift().split("!");

//     let tokens = input.shift().split(" ");

//     let command = tokens[0];
//     let i = 1;

//     while (tokens !== "Go Shopping!") {
//         console.log(command + 'asd');
//         switch (command) {
//             case "Urgent":
//                 // if (list.includes(tokens[1]) === true) {

//                 // } else {
//                 //     list.unshift(tokens[1]);
//                 //     break;
//                 // }
//                 break;
//             case "Unnecessary":
//                 //
//                 break;
//             case "Correct":
//                 //
//                 break;
//             case "Rearrange":
//                 //
//                 break;
//             default:
//                 console.log('kris e pedal');
//                 break;
//         }

//         tokens = input[0].split(' ')
//         i++;
//         command = tokens[0];
//     }
//     console.log();
// }
function shoppingList(input) {
  let innitialList = input.shift().split("!");

  let arr = [];
  for (let el of input) {
    arr.push(el);
  }

  let i = 0;
  let command = arr[i];

  while (command !== "Go Shopping!") {
    let commandArr = command.split(" ");
    let order = commandArr[0];

    let item = commandArr[1];

    switch (order) {
      case "Urgent":
        if (!innitialList.includes(item)) {
          innitialList.unshift(item);
        }
        break;
      case "Unnecessary":
        if (innitialList.includes(item)) {
          let indexToBeRemoved = innitialList.indexOf(item);
          innitialList.slice(indexToBeRemoved, 1);
        }
        break;
      case "Correct":
        let oldItem = item;
        let newItem = commandArr[2];

        if (innitialList.includes(oldItem)) {
          let indexToBeRemovedItem = innitialList.indexOf(oldItem);
          innitialList.splice(indexToBeRemovedItem, 1, newItem);
        }
        break;
      case "Rearrange":
        if (innitialList.includes(item)) {
          let indexToBeRearranged = innitialList.indexOf(item);
          innitialList.slice(indexToBeRearranged, 1);
          innitialList.push(item);
        }
        break;
    }
    i++;
    command = arr[i];
  }
  console.log(innitialList.join(", "));
}

shoppingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);
