function reversed(n, numbers) {
  let result = [];
  for (let i = n - 1; i >= 0; i--) {
    result.push(numbers[i]);
  }
  console.log(result.join(" "));
}
reversed(3, [10, 20, 30, 40, 50]);
