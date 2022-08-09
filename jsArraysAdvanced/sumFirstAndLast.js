function sumFirstAndLast(array) {
  let firstElement = array[0];
  let lastElement = array[array.length - 1];
  return Number(firstElement) + Number(lastElement);
}
console.log(sumFirstAndLast(["20", "30", "40"]));
