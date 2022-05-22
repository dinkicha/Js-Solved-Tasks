function liceNaKrug(input) {
   let r = Number(input[0]);
   
   let perimeterOfcircle = 2 * Math.PI * r;
   let area = Math.PI * r * r;

   console.log(area.toFixed(2));
   console.log(perimeterOfcircle.toFixed(2));

}
liceNaKrug([3]);