function formatGrade(grade) {
  let disc;
  let formattedGrade = grade.toFixed(2);

  if (grade < 3) {
    disc = "Fail";
    formattedGrade = 2;
  } else if (grade < 3.5) {
    disc = "Poor";
  } else if (grade < 4.5) {
    disc = "Good";
  } else if (grade < 5.5) {
    disc = "Very good";
  } else {
    disc = "Excellent";
  }
  console.log(`${disc} (${formattedGrade})`);
}
formatGrade(3.33);
