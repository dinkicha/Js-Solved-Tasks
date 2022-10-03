function projects(input) {

    

    let architectName = input[0];
    let countProjects = Number(input[1]);
    let hours = 3 * countProjects

    console.log(`The architect ${architectName} will need ${hours} hours to complete ${countProjects} project/s.`);
}
projects(["Sanya ", "9 "]);