function workingHours(input) {
    let time = Number(input[0]);
    let day = input[1];

    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
        case 'Saturday':
            if (time >= 10 && time <= 18) {
                console.log('open');
                break;
            }default:
            console.log('closed');
            break;

    }
}
workingHours(["11", "Sunday"])

// function workingHours(input) {
//     let time = Number(input[0]);
//     let day = input[1];

//     if(time >= 10 && time <=18 && day != 'Sunday'){
//         console.log('open');
//     }else{
//         console.log('closed');
//     }
// }
// workingHours(["11",

// "Monday"])



//     default:
    //         console.log('closed');
    //         break;
    // }