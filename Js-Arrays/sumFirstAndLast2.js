function sumFirstAndLast(array) {
  let firstElement = array[0];
  let lastElement = array[array.length - 1];
  console.log(Number(firstElement) + Number(lastElement));
} 
sumFirstAndLast(["20", "30", "40"]);
