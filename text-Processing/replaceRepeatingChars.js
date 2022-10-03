function replaceRepeatingChars(chars) {
  let result = chars[0];
  for (let i = 1; i < chars.length; i++) {
    if (chars[i] !== chars[i - 1]) {
      result += chars[i];
    }
  }
  console.log(result);
}
replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
