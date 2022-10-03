function main(input) {
    let people = Number(input.shift());
    let wagons = input.shift().split(' ').map(Number);
    
    while (people !== 0 && isFreeSpots(wagons)) {
        wagons = wagons.map(w => {
            let n = 4 - w;
            if(n > people) {
                n = people;
            }
            people -= n;
            w += n;
            return w;
        })
    }

    if(isFreeSpots(wagons)) {
        console.log(`The lift has empty spots!`);
    } 

    if(people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
    }

    console.log(wagons.join(' '));

    function isFreeSpots(array) {
        let filtered = array.filter(x => x < 4);
        return filtered.length > 0;
    }
}
main([
    "15",
    "0 0 0 0 0"
])