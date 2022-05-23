function birthdayParty(input) {
    let rent = Number(input[0]);
    let cake = rent * 0.20;
    let drink = cake * 0.55;
    let animator = rent / 3;
    
    let budget = rent + cake + drink + animator;
    console.log(budget);
}
birthdayParty(['3720']);