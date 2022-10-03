function storeProvision(AvailableStock, deliveredStock) {
  let storedProducts = {};
  for (let i = 0; i < AvailableStock.length; i += 2) {
    let currProduct = AvailableStock[i];
    storedProducts[currProduct] = Number(AvailableStock[i + 1]);
  }
  for (let index = 0; index < deliveredStock.length; index += 2) {
    let currProduct = deliveredStock[index];
    if (!storedProducts.hasOwnProperty(currProduct)) {
      storedProducts[currProduct] = 0;
    }
    storedProducts[currProduct] += Number(deliveredStock[index + 1]);
  }
  for (const element in storedProducts) {
    console.log(`${element} -> ${storedProducts[element]}`);
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
