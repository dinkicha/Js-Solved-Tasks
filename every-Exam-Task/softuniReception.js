function softUni(input) {
    let index = 0;
    let first = Number(input[index]);
    index++;
    let second = Number(input[index]);
    index++
    let third = Number(input[index]);
    index++
    let total = Number(input[index]);
    let hours = 0;
    let workDone = first + second + third;
    while (total > 0) {
        hours++;
        total -= workDone;
        if (hours % 4 === 0) {
            hours++;
            continue;
        }
    }
    console.log(`Time needed: ${hours}h.`);
}
softUni(["5", "6", "4", "20"]);