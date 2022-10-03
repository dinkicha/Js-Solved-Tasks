function walking(input) {

    let index = 0;

    let command = input[index];
    index++;

    let target = 10000;
    let steps = 0;

    while (command !== 'Going home') {
        let currentSteps = Number(command);
        steps += currentSteps;

        if (steps >= target) {
            break;
        }
        command = input[index];
        index++;
    }

    if (command === 'Going home') {
        let currentSteps = Number(input[index]);
        index++;
        steps += currentSteps
    }
    let diff = Math.abs(target - steps);
    if (steps >= target) {
        console.log(`Goal reached! Good job!`);
        console.log(`${diff} steps over the goal!`);
    } else {
        console.log(`${diff} more steps to reach goal.`);
    }

}
walking(["1000",

    "1500",

    "2000",

    "6500"])