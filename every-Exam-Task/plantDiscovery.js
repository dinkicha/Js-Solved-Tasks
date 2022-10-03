function main(input) {
  let n = Number(input.shift());
  let catalog = {};
  let actions = {
    Rate: rate,
    Update: update,
    Reset: reset,
  };

  for (let i = 0; i < n; i++) {
    let [name, rarity] = input.shift().split("<->");
    catalog[name] = {
      rarity: Number(rarity),
      ratings: [],
      avgRating: 0,
    };
  }

  while (input[0] !== "Exhibition") {
    let [command, params] = input.shift().split(": ");
    let action = actions[command];
    action(params);
  }

  let sorted = Object.entries(catalog);

  console.log("Plants for the exhibition:");
  for (let [name, plant] of sorted) {
    console.log(
      `- ${name}; Rarity: ${plant.rarity}; Rating: ${plant.avgRating.toFixed(
        2
      )}`
    );
  }

  function rate(line) {
    let [name, rating] = line.split(" - ");
    if (catalog[name] !== undefined) {
      let plant = catalog[name];
      plant.ratings.push(Number(rating));
      let total = 0;
      for (let rating of plant.ratings) {
        total += rating;
      }
      plant.avgRating = total / plant.ratings.length;
    } else {
      console.log("error");
    }
  }

  function update(line) {
    let [name, rarity] = line.split(" - ");
    if (catalog[name] !== undefined) {
      let plant = catalog[name];
      plant.rarity = Number(rarity);
    } else {
      console.log("error");
    }
  }

  function reset(name) {
    if (catalog[name] !== undefined) {
      let plant = catalog[name];
      plant.ratings.length = 0;
      plant.avgRating = 0;
    } else {
      console.log("error");
    }
  }

  function comparePlants(a, b) {
    let rarityA = a[1].rarity;
    let rarityB = b[1].rarity;

    let ratingA = a[1].avgRating;
    let ratingB = b[1].avgRating;

    return rarityB - rarityA || ratingB - ratingA;
  }
}
main([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
