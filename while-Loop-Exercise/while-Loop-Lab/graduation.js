function graduations(input){

    let name = input[0];
    let grades = 1;
    let index = 0;

    let sum = 0;
    let excluded = 0;
    
    while(grades <= 12){
        index++;
        let grade = Number(input[index]);
        
        if(grade >= 4){
            sum += grade;
            grades++;
        }else{
            excluded++;
            break;
        }
    }

    let averageGrade = sum / 12;

    if(excluded >= 1){
        console.log(`${name} has been excluded at ${grades} grade`);
    }else{
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}
graduations(["Gosho",

"5",

"5.5",

"6","5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])