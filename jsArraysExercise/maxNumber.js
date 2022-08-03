function maxNumber(array) {
  let newArray = [];
  let arrayL = array.length;
  for (let i = 0; i < arrayL; i++) {
    let number1 = array[i];
    let isLargets = true;
    for (let j = i + 1; j < arrayL; j++) {
      let number2 = array[j];

      if (number1 <= number2) {
        isLargets = false;
      }
    }
    if (isLargets) {
      newArray.push(number1);
    }
  }
  console.log(newArray.join(' '));
}
maxNumber([1, 4, 3, 2]);
