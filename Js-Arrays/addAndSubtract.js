function addAndSubtract(array) {
  let originalArraySum = 0;
  let newArraySum = 0;
  let arrayL = array.length;

  for (let i = 0; i < arrayL; i++) {
    originalArraySum = originalArraySum + array[i];
    if (array[i] % 2 === 0) {
      array[i] = array[i] + i;
    } else {
      array[i] = array[i] - i;
    }
    newArraySum = newArraySum + array[i];
  }
  console.log(array);
  console.log(originalArraySum);
  console.log(newArraySum);
}
addAndSubtract([5, 15, 23, 56, 35]);
