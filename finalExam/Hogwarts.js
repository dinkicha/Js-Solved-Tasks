function main(input) {
    let depricatedText = input.shift();

    while (input[0] !== "Abracadabra") {
        let command = input.shift().split(" ");

        let p1 = command[1];
        let p2 = command[2];

        if (command[0] === "Abjuration") {
            depricatedText = depricatedText.toUpperCase();
            console.log(depricatedText);

        } else if (command[0] === "Necromancy") {
            depricatedText = depricatedText.toLowerCase();
            console.log(depricatedText);

        } else if (command[0] === "Illusion") {
            
            if (Number(p1) >= 0 && Number(p1) < depricatedText.length) {
                depricatedText = depricatedText.replace(depricatedText[p1], p2);
                console.log('Done!');
                
            } else {
                console.log("The spell was too weak.");
            }

        } else if (command[0] === 'Divination') {
            let hasSubstring = false;
            while (depricatedText.includes(p1)) {
                depricatedText = depricatedText.replace(p1, p2)
                hasSubstring = true;
            }
            if (hasSubstring) {
                console.log(depricatedText);
            }

        } else if (command[0] === 'Alteration') {

            if (depricatedText.includes(p1)) {
                let index = depricatedText.indexOf(p1);
                let startingLength = depricatedText.length
                depricatedText = depricatedText.slice(0, index) + depricatedText.slice(index + p1.length, startingLength);
                console.log(depricatedText);
            }
        } else {
            console.log('The spell did not work!');
        }
    }
}
main((["A7ci0",
    "Illusion 1 c",
    "Illusion 4 o",
    "Abjuration",
    "Abracadabra"]));
