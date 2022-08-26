function towns(input) {
  let result = {};
  for (let line of input) {
    let splitedLine = line.split(" | ");

    result.town = splitedLine[0];

    result.latitude = Number(splitedLine[1]).toFixed(2);
    result.longitude = Number(splitedLine[2]).toFixed(2);

    console.log(result);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
