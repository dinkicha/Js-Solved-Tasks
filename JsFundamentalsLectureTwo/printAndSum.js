function printAndSum(num1, num2) {
  let sum = 0;
  let printLine = "";

  for (let i = num1; i <= num2; i++) {
    sum += i;

    if (i === num2) {
      printLine += `${i}`;
    } else {
      printLine += `${i} `;
    }
  }
  console.log(printLine);
  console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
