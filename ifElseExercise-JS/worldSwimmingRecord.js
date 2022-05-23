function worldSwimmingRecord(input) {
      let recordInSec = Number(input[0]);
      let distanceInMeters = Number(input[1]);
      let timeInSecForSwimming1Meter = Number(input[2]);

      let timeForSwimming = distanceInMeters * timeInSecForSwimming1Meter;
      let delay = Math.floor(distanceInMeters / 15) * 12.5 ;
      let totalTime = timeForSwimming + delay;

      if(totalTime < recordInSec){
          console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);

      }else{
          console.log(`No, he failed! He was ${(totalTime-recordInSec).toFixed(2)} seconds slower.`);
      }



}
worldSwimmingRecord(["10464",

"1500",

"20"])