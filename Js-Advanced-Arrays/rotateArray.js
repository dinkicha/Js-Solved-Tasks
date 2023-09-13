function main(array, n) {
    for (let i = 1; i <= n; i++) {
        let last = array.pop();
        array.unshift(last);
    }
    console.log(array.join(' '));
}
main(['1',

    '2',

    '3',

    '4'],

    2)