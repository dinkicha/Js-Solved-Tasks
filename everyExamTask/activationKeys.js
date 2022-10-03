function main(input) {
    let actions = {
        Slice(rawKey, start, end) {
            start = Number(start);
            end = Number(end);
            let first = rawKey.substring(0, start);
            let third = rawKey.substring(end);
            let result = first + third;
            console.log(result);
            return result
        },
        Flip(rawKey, mode, start, end) {
            start = Number(start);
            end = Number(end);
            let first = rawKey.substring(0, start);
            let second = rawKey.substring(start, end);
            let third = rawKey.substring(end);

            if (mode === 'Upper') {
                second = second.toLocaleUpperCase();
            } else {
                second = second.toLocaleLowerCase();
            }
            let result = first + second + third;
            console.log(result);
            return result
        },
        Contains(rawKey, pattern) {
            if (rawKey.includes(pattern)) {
                console.log(`${rawKey} contains ${pattern}`);
            } else {
                console.log('Substring not found!');
            }
            return rawKey;
        }
    };

    let rawKey = input.shift();
    while (input[0] !== 'Generate') {
        let [actionName, ...params] = input.shift().split('>>>');
        let action = actions[actionName];
        rawKey = action(rawKey, ...params);
    }
    
    console.log(`Your activation key is: ${rawKey}`);
}
main(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])



