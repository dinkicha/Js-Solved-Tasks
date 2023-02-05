function main(input) {
  let array = input.shift().split("||");
  let fuel = Number(input.shift());
  let ammunition = Number(input.shift());

  for (let i = 0; i < array.length; i++) {
    let tempArr = array[i].split(" ");
    let command = tempArr[0];
    let p1 = tempArr[1];

    if (command === "Travel") {
      if (fuel >= p1) {
        console.log(`The spaceship travelled ${p1} light-years.`);
        fuel -= p1;
      } else {
        console.log(`Mission failed.`);
        break;
      }
    } else if (command === "Enemy") {
      if (ammunition >= p1) {
        console.log(`An enemy with ${p1} armour is defeated.`);
        ammunition -= p1;
      } else {
        if (fuel >= p1 * 2) {
          console.log(`An enemy with ${p1} armour is outmaneuvered.`);
          fuel -= p1 * 2;
        } else {
          console.log(`Mission failed.`);
          break;
        }
      }
    } else if (command === "Repair") {
      fuel += Number(p1);
      ammunition += p1 * 2;
      console.log(`Ammunitions added: ${p1 * 2}.`);
      console.log(`Fuel added: ${p1}.`);
    } else if (command === "Titan") {
      console.log(`You have reached Titan, all passengers are safe.`);
      break;
    }
  }
}
main(["Travel 10||Enemy 30||Repair 15||Titan", "50", "80"]);
