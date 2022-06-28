function MultiplicationTable(input) {

    let a = Number(input[0]);
    


    for (let i = 1; i <= 10; i++) {
        let res = i * a;
       console.log(`${i} * ${a} = ${res}`);
        
    }

}
MultiplicationTable(["5"])