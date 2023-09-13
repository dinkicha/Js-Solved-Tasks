function train(array) {
    let passengersInTrainArray = array.shift().split(" ").map(Number);
    let maxCapacity = Number(array.shift());
    for (let i = 0; i < array.length; i++) {
        let commandNum = array[i].split(" ");
        if (commandNum[0] === "Add") {
            passengersInTrainArray.push(Number(commandNum[1]));
        } else {
            for (let k = 0; k < passengersInTrainArray.length; k++) {
                if (Number(commandNum[0]) + passengersInTrainArray[k] <= maxCapacity) {
                    passengersInTrainArray[k] += Number(commandNum[0]);
                    break;
                }
            }
        }
    }
    console.log(passengersInTrainArray.join(' '));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
