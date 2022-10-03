function main(steps, footStepLength, speed) {
    const dist = steps * footStepLength;
    let time = Math.round(dist / speed * 3.6);
    time += Math.floor(dist / 500) * 60;

    const seconds = time % 60;
    time -= seconds;
    const minutes = (time / 60) % 60;
    time -= minutes * 60;
    const hours = time / 3600;

    console.log(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);

    function pad(num) {
        if (num < 10) {
            return '0' + num;
        } else {
           return num;
        }
    }
}
main(4000, 0.60, 5)