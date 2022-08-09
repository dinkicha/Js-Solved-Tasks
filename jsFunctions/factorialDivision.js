function factorialDivision(num1, num2) {
  let fact = 1;
  let fact2 = 1;
  for (let i = num1; i >= 1; i--) {
    fact = fact * i;
  }
  for (let j = num2; j >= 1; j--) {
    fact2 = fact2 * j;
  }
  let divide = fact / fact2;
  console.log(divide.toFixed(2));
}
factorialDivision(5, 2);
