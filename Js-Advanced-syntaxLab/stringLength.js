function main(firstWord, secondWord, thirdWord) {
    let sum = firstWord.length + secondWord.length + thirdWord.length;
    let average = Math.floor(sum / 3);
    console.log(sum);
    console.log(average);
}
main('chocolate', 'ice cream', 'cake')