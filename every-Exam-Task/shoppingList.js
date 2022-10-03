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
shoppingList(["Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!"])