function schoolGrades(input) {
  let result = new Map();

  for (const line of input) {
    let tokens = line.split(" ");
    let names = tokens.shift();
    let grades = tokens.map(Number);
    if (result.has(names) == false) {
      result.set(names, []);
    }
    let existing = result.get(names);
    for (const grade of grades) {
      existing.push(grade);
    }
  }

  let sorted = Array.from(result);
  sorted.sort((a, b) => {
    return a[0].localeCompare(b[0]);
  });

  for (const [name, grades] of sorted) {
    let average = 0;
    for (const grade of grades) {
      average += grade;
    }
    average /= grades.length;
    console.log(`${name}: ${average.toFixed(2)}`);
  }
}
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
