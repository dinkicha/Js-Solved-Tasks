function main(input) {
    let tokens = input.split(' <-> ');
    for (let i = 0; i < input.length; i++) {
        let name = tokens[0];
        let population = tokens[1];

        if (name === name) {
            population += population;
        }
    }
    for (let name of Object.entries(input)) {
        console.log(`${name}:${tokens[1]}`);
    }
}
main(['Istanbul <-> 100000',

    'Honk Kong <-> 2100004',

    'Jerusalem <-> 2352344',

    'Mexico City <-> 23401925',

    'Istanbul <-> 1000'])