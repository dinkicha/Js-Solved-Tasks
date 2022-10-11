function main(input) {
    let calories = {};
    for (let i = 0; i < input.length; i += 2) {
        let name = input[i];
        let grams = Number(input[i + 1]);
        calories[name] = grams;
    }
    console.log(calories);
}
main(['Yoghurt', '48', 'Rise', '138',

    'Apple', '52'])