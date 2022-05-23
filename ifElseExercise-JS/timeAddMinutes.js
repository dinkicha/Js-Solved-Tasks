function timeAddMinutes(input) {

    let h = Number(input[0]);
    let m = Number(input[1]);

    let time = h * 60 + m + 15;

    let calcH = Math.floor(time / 60);
    let calcM = time % 60;

    if (calcH > 23) {
        calcH = 0
    }

    if (calcM < 10) {
        console.log(`${calcH}:0${calcM}`);
    } else {
        console.log(`${calcH}:${calcM}`);
    }

}
timeAddMinutes(["1",

    "46"])