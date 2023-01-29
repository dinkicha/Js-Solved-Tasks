function sort(arr, value) {
    return value === 'asc' ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
}
sort([14, 7, 17, 6, 8], 'asc')