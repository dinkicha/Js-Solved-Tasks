function convertToObj(json) {
  let converted = JSON.parse(json);
  for (let items of Object.keys(converted)) {
    console.log(`${items}: ${converted[items]}`);
  }
}
convertToObj('{"name": "George", "age": 40, "town": "Sofia"}');
