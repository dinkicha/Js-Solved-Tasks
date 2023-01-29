function argumentInfo() {
    //argiments is the input value just js things
    const params = Array.from(arguments); 
    // this is equal to ...params as an argument

    const types = {};

    for (let arg of params) {
        const type = typeof arg;
        console.log(`${typeof arg}: ${arg}`);
        //if there is was nothing in there before we are pushing it
        if (types[type] == undefined) {
            types[type] = 0;
        }
        //if there was something we are setting it's value by 1
        types[type]++;
    }
    //we use Object.entries because we can't sort an object
    const result = Object.entries(types).sort((a, b) => b[1] - a[1]);

    for (let [type, count] of result) {
        console.log(`${type} = ${count}`);
    }
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })