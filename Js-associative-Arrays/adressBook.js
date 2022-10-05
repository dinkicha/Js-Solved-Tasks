function adressBook(array) {
  let object = {};
  for (const element of array) {
    let [name, street] = element.split(":");

    object[name] = street;
  }

  let converted = Object.entries(object);
  converted.sort((a, b) => {
    let nameA = a[0];
    let nameB = b[0];
    return nameA.localeCompare(nameB);
  });

  for (const [name, street] of converted) {
    console.log(`${name} -> ${street}`);
  }
}
adressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
