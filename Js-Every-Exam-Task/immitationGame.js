function main(input) {
    let message = input.shift();
    let commands = {
        ChangeAll,
        Insert,
        Move
    }
    while (input[0] !== 'Decode') {
        let command = input.shift().split('|');
        let name = command[0]
        let p1 = command[1];
        let p2 = command[2];
        let thing = commands[name];
        message = thing(message, p1, p2);
    }
    console.log(`The decrypted message is: ${message}`);

    function ChangeAll(text, p1, p2) {
        let changed = text.split(p1).join(p2);
        return changed;
    }

    function Insert(text, index, value) {
        let leftSide = text.slice(0, Number(index));
        let rightSide = text.slice(Number(index));
        let result = leftSide + value + rightSide
        return result;
    }

    function Move(text, n) {
        let char = text.slice(0, String(n));
        text = text.slice(String(n));
        let result = text + char;
        return result;
    }
}
main([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
])