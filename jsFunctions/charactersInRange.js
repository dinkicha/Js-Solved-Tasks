function charactersInRange(firstChar, secondChar) {
  let startChar = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
  let endChar = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));

  let charsInRangeArray = [];
  for (let i = startChar + 1; i < endChar; i++) {
    let currentChar = String.fromCharCode(i);
    charsInRangeArray.push(currentChar);
  }
  console.log(charsInRangeArray.join(' '));
}
charactersInRange("c", "#");
