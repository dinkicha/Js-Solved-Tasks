function password(word) {
  let wordL = word.length;
  let array = [];
  let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  array.push(word);
  let something = word.replace(/[^0-9]/g, "").length;
  let isValid = true;

  for (let i = 0; i < wordL; i++) {
    if (wordL < 6 || wordL > 10) {
      console.log("Password must be between 6 and 10 characters");
      isValid = false;
    }
    if (format.test(array)) {
      console.log("Password must consist only of letters and digits");
      isValid = false;
    }
    if (something < 2) {
      console.log("Password must have at least 2 digits");
      isValid = false;
    }
    break;
  }
  if (isValid) {
    console.log("Password is valid");
  }
}
password("MyPass123");
