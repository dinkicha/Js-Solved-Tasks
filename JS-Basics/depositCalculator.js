function calculator(input) {
    let depositAmount = Number(input[0]);
    let depositSrok = Number(input[1]);
    let yearlyProcentProcent = Number(input[2]);

    let natrupanInterest = depositAmount * (yearlyProcentProcent / 100);
    let monthInterest = natrupanInterest / 12;
    let obshtaSuma = depositAmount + depositSrok * monthInterest;

    console.log(obshtaSuma);
}
calculator(["200 ",

"3 ",

"5.7 "]);
