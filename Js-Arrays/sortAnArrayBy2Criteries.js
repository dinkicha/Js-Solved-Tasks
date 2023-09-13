function sortAnArrayBy2Criteries(array) {
  let sortedArray = array.sort((a, b) => {
    return a.length - b.length || a.localeCompare(b);
  });
  sortedArray.forEach((element) => {
    console.log(element);
  });
}
sortAnArrayBy2Criteries(["alpha", "beta", "gamma"]);
