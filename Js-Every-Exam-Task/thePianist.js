function main(input) {
    let catalog = {};
    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let [name, composer, key] = input.shift().split("|");
        catalog[name] = {
            composer,
            key
        };
    }

    while (input[0] !== "Stop") {
        let tokens = input.shift().split("|");
        let command = tokens[0];
        let name = tokens[1];

        if (command === "Add") {
            if (catalog[name] === undefined) {
                catalog[name] = {
                    composer: tokens[2],
                    key: tokens[3],
                };
                console.log(
                    `${name} by ${tokens[2]} in ${tokens[3]} added to the collection!`
                );
            } else {
                console.log(`${name} is already in the collection!`);
            }
        } else if (command === "Remove") {
            if (catalog[name] === undefined) {
                console.log(
                    `Invalid operation! ${name} does not exist in the collection.`
                );
            } else {
                delete catalog[name];
                console.log(`Successfully removed ${name}!`);
            }
        } else if (command === "ChangeKey") {
            if (catalog[name] === undefined) {
                console.log(
                    `Invalid operation! ${name} does not exist in the collection.`
                );
            } else {
                catalog[name].key = tokens[2]
                console.log(`Changed the key of ${name} to ${tokens[2]}!`);
            }
        }
    }
    //SoftUni has removed the sorting from this task but not in the pdf file!
    //   let sorted = Object.entries(catalog).sort((a, b) => {
    //     let nameA = a[0];
    //     let nameB = b[0];

    //     let composerA = a[1].composer;
    //     let composerB = b[1].composer;

    //     return nameA.localeCompare(nameB) || composerA.localeCompare(composerB);
    //   });

    for (let [name, piece] of Object.entries(catalog)) {
        console.log(`${name} -> Composer: ${piece.composer}, Key: ${piece.key}`);
    }
}
main([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'])