function simpleCalculator(num1, num2, operator) {
  let res;

  switch (operator) {
    case "multiply":
      res = num1 * num2;
      break;
    case "divide":
      res = num1 / num2;
      break;
    case "add":
      res = num1 + num2;
      break;
    case "subtract":
      res = num1 - num2;
      break;
  }
  console.log(res);
}
simpleCalculator(5, 5, "multiply");
