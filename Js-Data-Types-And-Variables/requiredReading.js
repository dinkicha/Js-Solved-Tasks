function requiredReading(pages, pagesReadForOneHour, DaysGivenToRead) {
  let totalHoursReading = pages / pagesReadForOneHour;
  let neededHours = totalHoursReading / DaysGivenToRead;
  console.log(neededHours);
}
requiredReading(212, 20, 2);
