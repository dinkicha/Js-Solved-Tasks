function main(speed, town) {
    let overLimit = 0;
    switch (town) {
        case "city":
            overLimit = speed - 50
            if (overLimit > 40) {
                console.log(`The speed is ${overLimit} km/h faster than the allowed speed of 50 - reckless driving`);
            } else if (overLimit > 20) {
                console.log(`The speed is ${overLimit} km/h faster than the allowed speed of 50 - excessive speeding`);
            } else if (overLimit > 0) {
                console.log(`The speed is ${overLimit} km/h faster than the allowed speed of 50 - speeding`);
            } else {
                console.log(`Driving ${speed} km/h in a 50 zone`);
            }
            break;
        case "residential":
            overLimit = speed - 20
            if (overLimit > 40) {
                console.log(`The speed is ${overLimit} km/h faster than the allowed speed of 20 - reckless driving`);
            } else if (overLimit > 20) {
                console.log(`The speed is ${overLimit} km/h faster than the allowed speed of 20 - excessive speeding`);
            } else if (overLimit > 0) {
                console.log(`The speed is ${overLimit} km/h faster than the allowed speed of 20 - speeding`);
            } else {
                console.log(`Driving ${speed} km/h in a 20 zone`);
            }
            break;
        case "interstate":
            overLimit = speed - 90
            if (overLimit > 40) {
                console.log(`The speed is ${overLimit} km/h faster than the allowed speed of 90 - reckless driving`);
            } else if (overLimit > 20) {
                console.log(`The speed is ${overLimit} km/h faster than the allowed speed of 90 - excessive speeding`);
            } else if (overLimit > 0) {
                console.log(`The speed is ${overLimit} km/h faster than the allowed speed of 90 - speeding`);
            } else {
                console.log(`Driving ${speed} km/h in a 90 zone`);
            }
            break;
        case "motorway":
            overLimit = speed - 130
            if (overLimit > 40) {
                console.log(`The speed is ${overLimit} km/h faster than the allowed speed of 130 - reckless driving`);
            } else if (overLimit > 20) {
                console.log(`The speed is ${overLimit} km/h faster than the allowed speed of 130 - excessive speeding`);
            } else if (overLimit > 0) {
                console.log(`The speed is ${overLimit} km/h faster than the allowed speed of 130 - speeding`);
            } else {
                console.log(`Driving ${speed} km/h in a 130 zone`);
            }
            break;
    }
}
main(21, 'residential');
