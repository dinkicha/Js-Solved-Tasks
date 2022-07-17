function Main(Input) {
    let teachersCount = Number(Input[0]);
    let presentationsCount = 0
    let i = 1;
    let finalAssesmentGrade = 0;

    while (Input[i] !== "Finish")
    {
        let type = Input[i];
        let tempAvgGrade = 0;
        i++;
        let k = 0;
        while (k !== teachersCount)
        {
            tempAvgGrade += Number(Input[i]);
            k++;
            i++;
        }
        tempAvgGrade = tempAvgGrade / teachersCount;
        finalAssesmentGrade += tempAvgGrade;
        console.log(`${type} - ${tempAvgGrade.toFixed(2)}.`);
        presentationsCount++;
    }

    finalAssesmentGrade = finalAssesmentGrade / presentationsCount
    console.log(`Student's final assessment is ${finalAssesmentGrade.toFixed(2)}.`);
}

Main(["2",

"While-Loop",

"6.00",

"5.50",

"For-Loop",

"5.84",

"5.66",

"Finish"])