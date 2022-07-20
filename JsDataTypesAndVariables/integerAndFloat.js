function integerAndFloat(num1, num2, num3) {
  let total = num1 + num2 + num3;
  let resToString = String(total);
  let isFloat = false;
  for (let i = 0; i < resToString.length; i++) {
    if (resToString[i] === ".") {
      isFloat = true;
    }
  }
  console.log(`${total} - ${isFloat ? "Float" : "Integer"}`);
}
integerAndFloat(9, 100, 1.1);
