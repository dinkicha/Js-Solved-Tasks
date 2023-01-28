function getFibonator() {
  let previousNum = 0;
  let currentNum = 1;

  return () => {
    let tempNum = currentNum;
    currentNum += previousNum;
    previousNum = tempNum;

    return tempNum;
  };
}
let fib = getFibonator();

console.log(fib()); // 1

console.log(fib()); // 1

console.log(fib()); // 2

console.log(fib()); // 3

console.log(fib()); // 5

console.log(fib()); // 8

console.log(fib()); // 13
