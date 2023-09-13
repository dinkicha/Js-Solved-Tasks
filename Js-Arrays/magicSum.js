function magicSum(array, sum) {
  let arrayOfValid = [];
  let validPair = "";

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        validPair = `${array[i]} ${array[j]}`;
        arrayOfValid.push(validPair);
      }
    }
  }
  console.log(arrayOfValid.join("\n"));
}
magicSum([1, 7, 6, 2, 19, 23], 8);
