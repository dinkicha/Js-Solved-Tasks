function employees(input) {
    let employeeList = {};
    input.forEach(element => employeeList[element] = element.length)


    for (let key in employeeList) {
        console.log(`Name: ${key} -- Personal Number: ${employeeList[key]}`);
    }
}
employees([
    "Silas Butler",
    "Adnaan Buckley",
    "Juan Peterson",
    "Brendan Villarreal",
]);
