function spiceMustFlow(spices) {
  let daysCounter = 0;
  let extractedSpices = 0;

  while (spices >= 100) {
    daysCounter++;
    extractedSpices = extractedSpices + spices - 26;
    spices = spices - 10;
  }
  console.log(daysCounter);
  if (daysCounter !== 0) {
    console.log(extractedSpices - 26);
  } else {
    console.log(extractedSpices);
  }
}
spiceMustFlow(111);
