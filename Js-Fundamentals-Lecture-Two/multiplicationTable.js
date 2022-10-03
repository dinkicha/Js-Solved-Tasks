function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    let total = num * i;
    console.log(`${num} X ${i} = ${total}`);
  }
}
multiplicationTable(5);
