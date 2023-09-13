function disctintArray(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray.join(" "));
}
disctintArray([1, 2, 3, 4]);
