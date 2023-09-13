function skorost(input) {

   let km = Number(input[0]);

   if(km <= 10){
       console.log('slow');

   }else if(km > 10 && km <= 50){

       console.log('average');
   }else if(km > 50 && km <= 150){
       console.log('fast')
   }else if(km > 150 && km <= 1000){
       console.log('ultra fast');
   }else if(km > 1000){
       console.log('extremely fast');
   }

   
 }
skorost(["49.5"]);

//input kato ne e chislo se pishe input[0];