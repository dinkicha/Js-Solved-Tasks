function equalSums(array) {
  let foundIndex = "no";
  let arrayL = array.length;
  for (let i = 0; i < arrayL; i++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = 0; j < i; j++) {
      leftSum = leftSum + array[j];
    }
    for (let r = i + 1; r < arrayL; r++) {
      rightSum = rightSum + array[r];
    }
    if (leftSum === rightSum) {
      foundIndex = i;
    }
  }
  console.log(foundIndex);
}
equalSums([1, 2, 3, 3]);
