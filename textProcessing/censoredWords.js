function censoredWords(sentence, word) {
  let tokens = sentence.split(word);
  console.log(tokens.join("*".repeat(word.length)));
}
censoredWords("A small sentence with some words", "small");
