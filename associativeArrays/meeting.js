function meeting(arr) {
  let obj = {};
  for (const element of arr) {
    let [day, name] = element.split(" ");

    if (obj.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      obj[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  }

  for (const key in obj) {
    console.log(`${key} -> ${obj[key]}`);
  }
}
meeting(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
