function sumLastKNumbers(n, k) {
  let arr = [1];
  for (let i = 0; i < n - 1; i++) {
    let sequence = arr.slice(-k);
    let sum = 0;
    for (let el of sequence) {
      sum += el;
    }
    arr.push(sum);
  }
  console.log(arr.join(" "));
}
sumLastKNumbers(6, 3);
