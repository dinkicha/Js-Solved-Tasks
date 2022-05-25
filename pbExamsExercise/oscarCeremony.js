function oscarCeremony(input) {
    let rent = Number(input[0]);
    let statuette = rent * 0.70;
    let catering = statuette * 0.85;
    let sound = catering / 2;
    let totalPrice = rent + statuette + catering + sound;
    console.log(totalPrice.toFixed(2));
}
oscarCeremony(["3500"])