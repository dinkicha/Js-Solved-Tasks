function sumSeconds(input) {

   let firstSport = Number(input[0]);
   let secondSport = Number(input[1]);
   let thirdSport = Number(input[2]);

    let totalTime = firstSport + secondSport + thirdSport;

    let timeInMin = Math.floor(totalTime / 60);
    let timeInSec = totalTime % 60;

    if(timeInSec < 10){
   console.log(`${timeInMin}:0${timeInSec}`);
    }else{
        console.log(`${timeInMin}:${timeInSec}`);
    }


  

}
sumSeconds(["35",

"45",

"44"])