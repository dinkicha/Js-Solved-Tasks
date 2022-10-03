function wordsTracker(input) {
    let words = input.shift().split(" ");
    let result = {};

    for (const word of words) {
        result[word] = 0;
    }
    for (const word of input) {
        if (result.hasOwnProperty(word)) {
            result[word]++;
        }
    }
    let sorted = Object.entries(result);
    console.log(sorted);
    // sorted.sort((a, b) => b[1] - a[1]);
    // for (const [word, count] of sorted) {
    //     console.log(`${word} - ${count}`);
    // }
}
wordsTracker([
    "this sentence",
    "In",
    "this",
    "sentence",
    "you",
    "have",
    "to",
    "count",
    "the",
    "occurrences",
    "of",
    "the",
    "words",
    "this",
    "and",
    "sentence",
    "because",
    "this",
    "is",
    "your",
    "task",
]);
