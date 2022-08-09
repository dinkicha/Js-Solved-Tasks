function perfectNumber(number) {
  let sumOfDivisors = 1;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      sumOfDivisors += i;
    }
  }

  let result =
    sumOfDivisors === number
      ? "We have a perfect number!"
      : "It's not so perfect.";
  console.log(result);
}
perfectNumber(6);
