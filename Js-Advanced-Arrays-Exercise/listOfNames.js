function listOfNames(array) {
    let sorted = array.sort((a,b) => a.localeCompare(b));
    let iterator = 1;
    for (let names of sorted) {
        console.log(`${iterator}.${names}`);
        iterator++
    }
}
listOfNames(["John",

    "Bob",

    "Christina",

    "Ema"])