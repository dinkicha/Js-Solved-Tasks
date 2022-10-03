function main(input) {
    let sequence = input.shift().split(' ');
    let move = input.shift()
    let moves = 0;
    while (move !== 'end') {
        moves++;
        let [x, y] = move.split(' ').map(Number);
        if (x == y || x < 0 || y < 0 || x >= sequence.length || y >= sequence.length) {
            let element = `-${moves}a`;
            sequence.splice(sequence.length / 2, 0, element, element)
            console.log(`Invalid input! Adding additional elements to the board`);
            move = input.shift()
            continue;
        }

        if (sequence[x] === sequence[y]) {
            let element = sequence[x];
            sequence.splice(x, 1);
            let index = sequence.indexOf(element);
            sequence.splice(index, 1);
            console.log(`Congrats! You have found matching elements - ${element}!`);
        } else {
            console.log('Try again!');
        }
        if (sequence.length == 0) {
            console.log(`You have won in ${moves} turns!`);
            break;
        }
        move = input.shift()
        
    }
    if (sequence.length > 0) {
        console.log(`Sorry you lose :(\n${sequence.join(' ')}`);
    }
}
main([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
])