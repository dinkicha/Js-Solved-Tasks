function matrix(n) {
  let matrix = [];
  for (let row = 0; row < n; row++) {
    let row = [];
    for (let column = 0; column < n; column++) {
      row.push(n);
    }
    matrix.push(row.join(" "));
  }
  console.log(matrix.join("\n"));
}
matrix(3);
