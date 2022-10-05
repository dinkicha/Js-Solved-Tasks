function oddOccurrences(input) {
    let words = input.split(' ');
    let result = {};

    for (let element of words) {
        element = element.toLocaleLowerCase();
        if (result.hasOwnProperty(element)) {
            result[element]++;
        } else {
            result[element] = 1;
        }
    }
    let filtered = Object.entries(result).filter(([word, count]) => {
        if (count % 2 == 1) {
            return true;
        } else {
            return false;
        }
    })
    console.log(filtered.map(entry => entry[0]).join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')