function bonusScore(input) {

   let primeNumber = Number(input[0]);

   let bonus = 0.0;

   if(primeNumber <= 100){
bonus = 5
   }else if(primeNumber > 1000){
       bonus = 0.20 * primeNumber
   }else{
       bonus = 0.10 * primeNumber
   }

   if(primeNumber % 2 == 0){
     bonus +=1;
   }else if(primeNumber % 10 == 5){
       bonus += 2;
   }

console.log(bonus);
console.log(primeNumber + bonus);

}
bonusScore(["20"])