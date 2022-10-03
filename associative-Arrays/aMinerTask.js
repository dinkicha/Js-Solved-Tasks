function minerTask(input) {
  let collection = {};

  for (let i = 0; i < input.length; i += 2) {
    let resource = input[i];
    let quantity = Number(input[i + 1]);
    if (!collection.hasOwnProperty(resource)) {
      collection[resource] = 0;
    }
    collection[resource] += quantity;
  }

  for (let item in collection) {
    console.log(`${item} -> ${collection[item]}`);
  }
}
minerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
