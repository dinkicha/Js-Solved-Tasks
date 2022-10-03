function arrayModifier(input) {
  //parse input
  let nums = input.shift().split(" ").map(Number);
  while (input[0] !== "end") {
    let tokens = input.shift().split(" ");
    let command = tokens[0];
    let index1 = Number(tokens[1]);
    let index2 = Number(tokens[2]);

    switch (command) {
      case "swap": //swap the elements
        let temp = nums[index1];
        nums[index1] = nums[index2];
        nums[index2] = temp;
        break;
      case "multiply": //multiply the elements
        nums[index1] *= nums[index2];
        break;
      case "decrease": //decrease all elements by 1
        nums = nums.map((x) => x - 1);
        break;
    }
  }

  //print the output
  console.log(nums.join(', '));
}
arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
