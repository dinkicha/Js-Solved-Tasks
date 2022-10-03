function Main(Input) {
  let i = 0;
  let totaltickets = 0;
  let studentTickets = 0;
  let standardTickets = 0;
  let kidsTickets = 0;

  while (Input[i] !== "Finish") {
    let movieName = Input[i];
    i++;
    let seats = Number(Input[i]);
    i++;
    let takenSeats = 0;

    while (Input[i] !== "Finish") {
      if (Input[i] === "End" || takenSeats > seats) {
        i++;
        break;
      } else if (takenSeats == seats) {
        break;
      }
      takenSeats++;
      switch (Input[i]) {
        case "standard":
          standardTickets++;
          break;
        case "student":
          studentTickets++;
          break;
        case "kid":
          kidsTickets++;
          break;
        default:
          break;
      }
      i++;
    }

    let howFull = (takenSeats / seats) * 100;
    console.log(`${movieName} - ${howFull.toFixed(2)}% full.`);
  }
  totaltickets = studentTickets + standardTickets + kidsTickets;
  console.log(`Total tickets: ${totaltickets}`);
  console.log(
    `${((studentTickets / totaltickets) * 100).toFixed(2)}% student tickets.`
  );
  console.log(
    `${((standardTickets / totaltickets) * 100).toFixed(2)}% standard tickets.`
  );
  console.log(
    `${((kidsTickets / totaltickets) * 100).toFixed(2)}% kids tickets.`
  );
}

Main([
  "Shutter Island",
  "9",
  "standard",
  "standard",
  "standard",
  "student",
  "student",
  "student",
  "kid",
  "kid",
  "kid",
  "Rush",
  "9",
  "standard",
  "standard",
  "standard",
  "student",
  "student",
  "student",
  "kid",
  "kid",
  "kid",
  "Deadpool",
  "9",
  "standard",
  "standard",
  "standard",
  "student",
  "student",
  "student",
  "kid",
  "kid",
  "kid",
  "Finish",
]);
