function arrayRotation(arr, rotations) {
  while (rotations > 0) {
    let elementToMove = arr.shift();
    arr.push(elementToMove);
    rotations--;
  }
  console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);
