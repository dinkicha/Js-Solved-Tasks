function addAndRemoveElementsFromArray(array) {
    let newArray = [];
    let n = 0;
    for (let i = 0; i < array.length; i++) {
        n++;
        if (array[i] === 'add') {
            newArray.push(n);
        } else if (array[i] === 'remove') {
            newArray.pop(i);
        }
    }
    if (newArray.length === 0) {
        console.log('Empty');
    } else {
        console.log(newArray.join('\n'));
    }
}
addAndRemoveElementsFromArray(['remove', 'remove', 'remove'])