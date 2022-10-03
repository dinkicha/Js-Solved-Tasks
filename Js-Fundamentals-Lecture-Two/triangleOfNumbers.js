function triangleOfNumbers(n) {
  for (let row = 1; row <= n; row++) {
    let printLine = "";

    for (let col = 1; col <= row; col++) {
      printLine += `${row} `;
    }
    console.log(printLine);
  }
}
triangleOfNumbers(3);
