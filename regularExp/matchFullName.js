function matchFullName(input) {
  let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
  console.log(input.match(pattern).join(" "));
}
matchFullName(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
);
