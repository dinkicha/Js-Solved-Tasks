function echo(diff) {
  if (typeof diff === "string") {
    console.log(typeof(diff));
    console.log(diff);
  } else if (typeof diff === "number") {
    console.log(typeof(diff));
    console.log(diff);
  } else {
    console.log(typeof(null));
    console.log("Parameter is not suitable for printing");
  }
}
echo(null);
