function nationalCourt(input) {
  //parse input
  let guy1 = Number(input[0]);
  let guy2 = Number(input[1]);
  let guy3 = Number(input[2]);
  let doneWork = guy1 + guy2 + guy3;
  let studentsCount = Number(input[3]);
  let hours = 0;
//repeat until all the students are answered
  while (studentsCount > 0) {
    studentsCount -= doneWork;
    hours++;
//if hours === 4 start again and increase the hours with 1
    if (hours % 4 === 0) {
      hours++;
      continue;
    }
  }
  console.log(`Time needed: ${hours}h.`);
}
nationalCourt(["5", "6", "4", "20"]);
