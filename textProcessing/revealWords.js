function reveralWords(word, text) {
      text = ` ${text} `;
      let words = word.split(", ");
      for (let word of words) {
        let match = ` ${"*".repeat(word.length)} `;
        word = ` ${word} `;
        text = text.replace(match, word);
      }
      console.log(text.trim());
}
reveralWords(
    "great",
    "softuni is ***** place for learning new programming languages"
);
