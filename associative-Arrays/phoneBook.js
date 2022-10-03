function phoneBook(arr) {
  let object = {};
  for (const element of arr) {
    let tokens = element.split(" ");
    let name = tokens[0];
    let phoneNumber = tokens[1];
    object[name] = phoneNumber;
  }

  for (const key in object) {
    console.log(`${key} -> ${object[key]}`);
  }
}
phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
