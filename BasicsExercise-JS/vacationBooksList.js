function literatura(input) {

    let countPages = Number(input[0]);
    let hourPages = Number(input[1]);
    let dayBook = Number (input[2]);

    let totalReading = countPages / hourPages;
    let necessaryHourReading = totalReading / dayBook;

    console.log(necessaryHourReading);

}
literatura(["212 ",

"20 ",

"2 "]);