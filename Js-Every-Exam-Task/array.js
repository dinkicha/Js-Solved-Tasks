function main(input) {
    let array = input.shift().split(' ').map(Number);

    while (input[0] !== 'end') {
        let tokens = input.shift().split(' ');
        let command = tokens[0];
        let index1 = tokens[1];
        let index2 = tokens[2];
        switch (command) {
            case 'swap':
                let temp = array[index1];
                array[index1] = array[index2];
                array[index2] = temp;
                break;
            case 'multiply':
                array[index1] *= array[index2];
                break;
            case 'decrease':
                array = array.map((x) => x - 1)
                break;
        }
    }
    console.log(array.join(', '));
}
main([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'])

