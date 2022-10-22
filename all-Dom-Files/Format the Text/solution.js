function solve() {
 let textAreaElement = document.getElementById('input');

 let text = textAreaElement.value;

 let sentences = text.split('.').filter(x => x !== '').map(x => x + '.');

 
 let nums = Math.ceil(sentences.length / 3); // because it is array we write .length;

 let resultDiv = document.getElementById('output');
 
 for (let i = 0; i < nums; i++) {
    resultDiv.innerHTML += `<p>${sentences.splice(0,3).join('')}</p>`;
 }
}