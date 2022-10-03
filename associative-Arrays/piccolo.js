function piccolo(input) {
  let parking = new Set();

  for (const line of input) {
    let [command, number] = line.split(", ");
    if (command === "IN") {
      parking.add(number);
    } else {
      parking.delete(number);
    }
  }
  if (parking.size === 0) {
    console.log(`Parking lot is empty`);
  } else {
    let array = Array.from(parking);
    array.sort();

    for (const car of array) {
      console.log(`${car}`);
    }
  }
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
