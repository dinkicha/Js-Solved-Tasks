function main(input) {
  let pattern = /(=|\/)([A-Z][A-Za-z]{2,})\1/g;
  let match = pattern.exec(input);
  let sumOfLength = 0;
  let destinations = [];

  while (match !== null) {
    destinations.push(match[2]);
    sumOfLength += match[2].length;

    match = pattern.exec(input);
  }

  console.log(`Destinations: ${destinations.join(", ")}`);
  console.log(`Travel Points: ${sumOfLength}`);
}
main("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
