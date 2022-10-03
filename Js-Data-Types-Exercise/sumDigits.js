function sumDigits(n) {
  let nAsString = String(n);
  let num = 0;

  for (let i = 0; i < nAsString.length; i++) {
    n = Number(nAsString[i]);
    num += n;
  }

  console.log(num);
}
sumDigits(245678);
