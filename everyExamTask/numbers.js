function numbers(input) {
  let parsed = input.split(" ").map(Number);
  let avg = 0;
  let sum = 0;
  let output = [];

  if (parsed.length < 5) {
    console.log("No");
  } else {
    for (let i = 0; i < parsed.length; i++) {
      sum += Number(parsed[i]);
    }
    avg = sum / parsed.length;
    for (let i = 0; i < parsed.length; i++) {
      if (parsed[i] > avg) {
        output[output.length] = parsed[i];
      }
    }
    console.log(output.sort((a, b) => b - a).join(" "));
  }
}
numbers("10 20 30 40 50");
