function main(input) {
    let sequence = input.shift().split(' ');
    while (input[0] !== 'End') {
        let command = input.shift().split(' ');
        switch (command[0]) {
            case 'Shoot':
                let index1 = Number(command[1])
                let damage = Number(command[2])
                if (sequence[index1]) {
                    sequence[index1] -= damage;
                    if (sequence[index1] <= 0) {
                        sequence.splice(sequence[index1], 0)
                    }
                }
                break;
            case 'Add':
                if (sequence[index1]) {
                    sequence.substring(0, sequence[index1])
                } else {
                    console.log(`Invalid placement!`);
                }
                break;
            case 'Strike':
                if (sequence.length < sequence[index1] && sequence[index1] > sequence.length) {
                    console.log(`Strike missed!`);
                } else {
                    sequence.splice(sequence[index1], 1);
                }
                break;
        }
    }
}
main((["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]))