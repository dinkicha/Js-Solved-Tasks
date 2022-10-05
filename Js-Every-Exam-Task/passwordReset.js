function main(input) {
    let text = input.shift().split('').join('');
    let odd = []
    while (input[0] !== 'Done') {
        let tokens = input.shift().split(' ');
        let [command, firstArgument, secondArgument] = tokens;

        if (command === 'TakeOdd') {
            for (let i = 0; i < text.length; i++) {
                if (i % 2 !== 0) {
                    odd.push(text[i]);
                }
            }
            console.log(odd.join(''));

        } else if (command === 'Cut') {
            let index = Number(firstArgument);
            let pattern = Number(secondArgument);
            let string = text.substring(index, index + pattern);
            text = text.replace(string, '');
            console.log(text);

        } else if (command === 'Substitute') {
            text.split(firstArgument).join(secondArgument);
            console.log(text);
        }
    }
}
main(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
