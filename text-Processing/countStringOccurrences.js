function countStringOccurrences(text, word) {
  let tokens = text.split(" ");
  let counter = 0;
  for (const token of tokens) {
    if (token === word) {
      counter++;
    }
  }
  console.log(counter);
}
countStringOccurrences("This is a word and it also is a sentence", "is");
