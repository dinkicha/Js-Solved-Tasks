function loadingBar(number) {
  let completed = "%".repeat(number / 10);
  let incompleted = ".".repeat(10 - completed.length);

  if (incompleted.length === 0) {
    console.log("100% complete");
  } else {
    console.log(`${number}% [${completed}${incompleted}]`);
    console.log("Still loading...");
  }
}
loadingBar(30);
