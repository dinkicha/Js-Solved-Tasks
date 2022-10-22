function extractText() {
    const collection = [...document.getElementsByTagName('li')];
    const elementText = collection.map(e => e.textContent);
    document.getElementById('result').value = elementText.join('\n');
}