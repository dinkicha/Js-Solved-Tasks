function main(input) {
    let pirateShip = input.shift().split('>').map(Number);
    let warShip = input.shift().split('>').map(Number);
    let maxHealth = Number(input.shift())

    for (let line of input) {
        if (line === 'Retire') {
            break;
        }
        let tokens = line.split(' ');
        let command = tokens.shift();
        if (command === 'Fire') {
            let index = Number(tokens[0]);
            let damage = Number(tokens[1]);
            if (index < 0 || index >= warShip.length) {
                break;
            }
            warShip[index] -= damage;
            if (warShip[index] <= 0) {
                console.log('You won! The enemy ship has sunken.');
            }
        } else if (command === 'Defend') {
            let start = Number(tokens[0]);
            let end = Number(tokens[1]);
            let dmg = Number(tokens[2]);
            if (start < 0 || start >= pirateShip.length || end < 0 || end >= pirateShip.length) {
                break;
            }
            for (let i = start; i <= end; i++) {
                pirateShip[i] -= dmg;
                if (pirateShip[i] <= 0) {
                    console.log('You lost! The pirate ship has sunken.');
                }
            }
        } else if (command === 'Repair') {
            let index2 = Number(tokens[0]);
            let health = Number(tokens[1]);
            if (index2 < 0 || index2 >= pirateShip.length) {
                break;
            }
            let currentHealth = pirateShip[index2] + health;
            if (currentHealth > maxHealth) {
                currentHealth = maxHealth;
            }
            pirateShip[index2] = currentHealth;
        } else if (command === 'Status') {
            let count = 0;
            pirateShip.forEach(section => {
                if(section < maxHealth* 0.2) {
                    count++;
                }
            })
            console.log(`${count} sections need repair.`);
        }
    }
    let pirateShipSum = pirateShip.reduce((acc, curr) => acc + curr, 0);
    let warShipSum = warShip.reduce((a, b) => a + b);
    console.log(`Pirate ship status: ${pirateShipSum}\nWarship status: ${warShipSum}`);
}
main(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])