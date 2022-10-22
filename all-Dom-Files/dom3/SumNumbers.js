function calc() {
   const num1 = document.getElementById('num1').value;
   const num2 = document.getElementById('num2').value;
   let sum = Number(num1) + Number(num2);
   document.getElementById('sum').value = sum;
}
