function palindromIntegers(array) {
  for (const el of array) {
    let current = String(el);
    let reversed = String(el).split("").reverse().join("");

    if (current === reversed) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
palindromIntegers([123, 323, 421, 121]);
