function list(arr) {
    let result = [];


    const obj = {
        add: string => {
            result.push(string);
        },
        remove: string => {
            result = result.filter(x => x !== string)
        },
        print: () => {
            console.log(`${result.join(',')}`);
        }
    }

    arr.forEach(x => {
        const [command, value] = x.split(' ');
        obj[command](value);
    });
}
list(['add hello', 'add again', 'remove,hello', 'add again', 'print'])