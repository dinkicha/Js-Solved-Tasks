function main(input) {
    let numberOfStudents = Number(input.shift());
    let numberOfLectures = Number(input.shift());
    let additinalBonus = Number(input.shift());
    let highest = 0;
    let attendedLecture = 0;
    for (let i = 0; i < numberOfStudents; i++) {
      let attendancy = input[i];
      let totalBonus = (attendancy / numberOfLectures) * (5 + additinalBonus);
      if (totalBonus >= highest) {
        highest = totalBonus;
        attendedLecture = attendancy;
      }
    }
    console.log(`Max Bonus: ${Math.ceil(highest)}.`);
    console.log(`The student has attended ${attendedLecture} lectures.`);
  }
  main(["5", "25", "30", "12", "19", "24", "16", "20"]);