function pascalSplitter(text) {
  let result = text[0];
  let lower = text.toLocaleLowerCase();

  for (let i = 1; i < text.length; i++) {
    if (text[i] !== lower[i]) {
      result += ", ";
    }
    result += text[i];
  }
  console.log(result);
}
pascalSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
