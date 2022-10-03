function rounding(number, precision) {

    if (precision > 15) {
        precision = 15;
    }

    let roundedNumber = number.toFixed(precision);

    console.log(parseFloat(roundedNumber));

}
rounding(3.1415926535897932384626433832795, 2)