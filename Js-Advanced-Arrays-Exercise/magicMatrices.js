function main(matrix) {
    let magicSum = Number.MAX_SAFE_INTEGER;
    let isMagicMatrix = true;
    for (let row = 0; row < matrix.length; row++) {
        let sum = 0;
        for (let col = 0; col < matrix.length; col++) {
            let el = matrix[row][col];
            sum += el;
        }


        if (magicSum === Number.MAX_SAFE_INTEGER) {
            magicSum = sum;
        }
        if (sum !== magicSum) {
            isMagicMatrix = false;
        }

    }
    for (let col = 0; col < matrix[0].length; col++) {
        let sum = 0;
        for (let row = 0; row < matrix.length; row++) {
            let element = matrix[row][col];
            sum += element;
        }
        if (sum !== magicSum) {
            isMagicMatrix = false;
        }
    }
    return isMagicMatrix
}
console.log(main([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]))