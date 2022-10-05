function companyUsers(input) {
    let result = {};

    for (const element of input) {
        let [name, id] = element.split(" -> ");
        if (!result.hasOwnProperty(name)) {
            result[name] = [];
        }
        result[name].push(id);
    }

    let sorted = Object.entries(result);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let element of sorted) {
        console.log(element[0]);
        let set = new Set(element[1]);
        for (let number of set) {
          console.log(`-- ${number}`);
        }
    }
}
companyUsers([
    "SoftUni -> AA12345",
    "SoftUni -> BB12345",
    "Microsoft -> CC12345",
    "HP -> BB12345",
]);
