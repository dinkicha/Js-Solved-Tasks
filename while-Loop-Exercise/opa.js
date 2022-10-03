  function examPreparation(input) {

    let index = 0;

    let negativeGrade = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let negativeGradeCounter = 0;

    let sumOfGrades = 0;
    let countProblems = 0;

    let taskName = "";
    let isNeedBrake = false;

    while (command !== 'Enough') {
        taskName = command;

        let tempGrade = Number(input[index]);
        index++;

        countProblems++;
        sumOfGrades += tempGrade;

        if (tempGrade <= 4.00) {
            negativeGradeCounter++;
            if (negativeGradeCounter === negativeGrade) {
                isNeedBrake = true;
                break;
            }
        }

        command = input[index];
        index++;

    }

    let average = sumOfGrades / countProblems;
    if(isNeedBrake){
        console.log(`You need a break, ${negativeGradeCounter} poor grades.`);
    }else{
        console.log(`Average score: ${average.toFixed(2)}`);
        console.log(`Number of problems: ${countProblems}`);
        console.log(`Last problem: ${taskName}`);
    }
    
}

examPreparation(["3",

"Money",

"6","Story","4","Spring","Time","5","Bus","6","Enough"])
   

    
    

