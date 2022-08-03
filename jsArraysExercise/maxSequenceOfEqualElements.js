function maxSequenceOfEqualElements(array) {
  let maxSequence = [];

  for (let i = 0; i < array.length; i++) {
    let currentSequence = [];
    for (let j = i; j < array.length; j++) {
      if (array[i] === array[j]) {
        currentSequence.push(array[i]);
      } else {
        break;
      }
    }
    if (currentSequence.length > maxSequence.length) {
      maxSequence = currentSequence;
    }
  }
  console.log(maxSequence.join(" "));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
