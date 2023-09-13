function borsa(input) {
   let purviRed = Number(input[0]);
   let vtorired = Number(input[1]);
   let tretiRed = Number(input[2]);
   let chetvurtiRed = Number(input[3]);

   let priceZelenchuci = purviRed * tretiRed;
   let pricePlodove = vtorired * chetvurtiRed;
   let obshtaCena = priceZelenchuci + pricePlodove;
     obshtaCena =  obshtaCena / 1.94;

   console.log(obshtaCena.toFixed(2));

   
}
borsa([0.194,19.4,10,10]);