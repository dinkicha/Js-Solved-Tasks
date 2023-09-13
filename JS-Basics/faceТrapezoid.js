function squareTpapec (input) {
   let b1 = Number(input[0]);
   let b2 = Number(input[1]);
   let h = Number(input[2]);

   let formula = (b1 + b2) * h / 2;

   console.log(formula.toFixed(2));



}
squareTpapec([8.0,13.0,7.0]);
