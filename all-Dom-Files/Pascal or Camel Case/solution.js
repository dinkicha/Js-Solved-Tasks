function solve() {
  const text = document.getElementById('text').value;
  const convention = document.getElementById('naming-convention').value;
  const resultContainer = document.getElementById("result");

  const splitted = text.split(' ');

  let resultString = '';

  if(convention === 'Camel Case') {
    resultString += splitted[0][0].toLowerCase()
      + splitted[0].slice(1, splitted[0].length).toLowerCase();
    for (let i = 1; i < splitted.length; i++) {
      resultString += splitted[i][0].toUpperCase() +
        splitted[i].slice(1, splitted[i].length).toLowerCase();
    }
    resultContainer.textContent = resultString;
  } else if(convention === 'Pascal Case') {
    for (let i = 0; i < splitted.length; i++) {
      resultString += splitted[i][0].toUpperCase() +
        splitted[i].slice(1, splitted[i].length).toLowerCase();
    }
    resultContainer.textContent = resultString;
  } else {
    resultContainer.textContent = 'Error!';
  }
}