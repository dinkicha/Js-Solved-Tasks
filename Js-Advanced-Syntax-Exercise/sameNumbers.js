function main(input) {
    const text = input.toString();
    let isSame = true;
    let sum = 0;
    for (let i = 0; i < text.length; i++) {

        if (i < text.length - 1) {
            if (text[i] !== text[i + 1]) {
                isSame = false;
            }
        }
        sum += Number(text[i]);
    }
    console.log(isSame);
    console.log(sum);
}
main(2222222)