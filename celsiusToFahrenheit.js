function convertor(input) {
   let celsium = Number(input[0]);

   let farenheit = celsium * 1.8 + 32;
   
   console.log(farenheit.toFixed(2));


}

convertor([25]);