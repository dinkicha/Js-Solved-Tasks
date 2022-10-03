function phoneNumber(input) {
    let validPhone = [];
    let pattern = /\+359([ ||-])2\1[1-9]{3}\1[1-9]{4}\b/gm
    while ((validPhone = pattern.exec(input) !== null)) {
        validPhone.push(validPhone[0]);
        pattern.exec(input)
    }
    console.log(validPhone.join(', '));
}
phoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])