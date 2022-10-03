function dayOfWeek(day) {
  if (day < 1 || day > 7) {
    console.log("Invalid day!");
  } else {
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    console.log(days[day - 1]);
  }
}
dayOfWeek(3);
