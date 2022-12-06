function main(input) {
    let spellBook = {};
    let command = input.shift().split(' ');

    while (command[0] !== 'End') {
        if (command[0] === 'Enroll') {
            if (spellBook.hasOwnProperty(command[1])) {
                console.log(`${command[1]} is already enrolled.`);
            } else {
                spellBook[command[1]] = { spells: [] }
            }
        } else if (command[0] === 'Learn') {

            if (spellBook.hasOwnProperty(command[1])) {
                if (spellBook[command[1]].spells.includes(command[2])) {
                    console.log(`${command[1]} has already learnt ${command[2]}.`);

                } else {
                    spellBook[command[1]].spells.push(command[2])
                }
            } else {
                console.log(`${command[1]} doesn't exist.`);
            }
        } else if (command[0] === 'Unlearn') {
            if (spellBook.hasOwnProperty(command[1])) {
                if (!spellBook[command[1]].spells.includes(command[2])) {
                    console.log(`${command[1]} doesn't know ${command[2]}.`);
                } else {
                    spellBook[command[1]].spells.splice(spellBook[command[1]].spells.indexOf(command[2]), 1)
                }
            } else {
                console.log(`${command[1]} doesn't exist.`);
            }
        }
        command = input.shift().split(' ')
    }
    console.log('Heroes:');
    for (const key in spellBook) {
        console.log(`== ${key}: ${spellBook[key].spells.join(', ')}`);
    }
}
main((["Enroll Stefan",
"Learn Stefan ItShouldWork",
"Learn Stefan ItShouldWork",
"Unlearn Stefan NotFound",
"End"]))