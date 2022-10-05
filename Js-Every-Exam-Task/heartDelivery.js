function main(input) {
  let text = input.shift().split("@").map(Number);
  let cupid = 0;

  while (input[0] !== "Love!") {
    let tokens = input.shift().split(" ");
    let jump = Number(tokens[1]);

    cupid += jump;

    if (cupid >= text.length) {
      cupid = 0;
    }

    if (text[cupid] === 0) {
      console.log(`Place ${cupid} already had Valentine's day.`);
    } else {
      text[cupid] -= 2;
      if (text[cupid] === 0) {
        console.log(`Place ${cupid} has Valentine's day.`);
      }
    }
  }
  let missed = 0;
  for (let house of text) {
    if (house > 0) {
      missed++;
    }
  }
  console.log(`Cupid's last position was ${cupid}.`);
  if (missed > 0) {
    console.log(`Cupid has failed ${missed} places.`);
  } else {
    console.log("Mission was successful.");
  }
}
main(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"]);
