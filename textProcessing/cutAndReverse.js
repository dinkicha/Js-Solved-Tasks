function cutAndReverse(text) {
  let middle = text.length / 2;
  let first = text
    .substring(0, middle)
    .split("")
    .reverse()
    .join("");
  let second = text
    .substring(middle)
    .split("")
    .reverse()
    .join("");

  console.log(first);
  console.log(second);
}
cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
