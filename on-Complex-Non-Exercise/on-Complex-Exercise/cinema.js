function cinema(input) {
    let type = input[0];
    let order = Number(input[1]);
    let column = Number(input[2]);

    let income = 0;

   switch(type){
    case 'Premiere':
    income = order * column * 12.00;
    break;
    case 'Normal':
    income = order * column * 7.50;
    break;
    case 'Discount':
    income = order * column * 5.00;
    break;
   }
   console.log(`${income.toFixed(2)} leva`);
}
cinema(["Normal", "21", "13"])