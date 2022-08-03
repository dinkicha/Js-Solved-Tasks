function evenAndOddSubtraction(arr) {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
    if (arr[i] % 2 === 0) {
      evenSum += arr[i];
    }
    if (arr[i] % 2 !== 0) {
      oddSum += arr[i];
    }
  }
  let diff = evenSum - oddSum;
  console.log(diff);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
