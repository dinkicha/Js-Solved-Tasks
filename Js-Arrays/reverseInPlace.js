function reverseInPlace(arr) {
  let buff = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    buff += arr[i];
    buff += " ";
  }
  console.log(buff);
}
reverseInPlace(["33", "123", "0", "dd"]);
console.log("----------------------");
reverseInPlace(["abc", "def", "hig", "klm", "nop"]);
