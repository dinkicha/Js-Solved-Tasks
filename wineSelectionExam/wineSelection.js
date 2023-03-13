class WineSelection {
  constructor(space) {
    this.space = space;
    this.wines = [];
    this.bill = 0;
  }

  reserveABottle(wineName, wineType, price) {
    if (this.space < 1)
      throw new Error("Not enough space in the cellar.");
    this.wines.push({ wineName, wineType, price, paid: false });
    this.space--;
    return `You reserved a bottle of ${wineName} ${wineType} wine.`;
  }

  payWineBottle(wineName, price) {
    let something = this.wines.find((wine) => wine.wineName == wineName);

    if (!something) throw new Error(`${wineName} is not in the cellar.`);

    if (something.paid) throw new Error(`${wineName} has already been paid.`);

    this.bill += price;
    something.paid = true;
    return `You bought a ${wineName} for a ${price}$.`;
  }

  openBottle(wineName) {
    let isFound = this.wines.find((wine) => wine.wineName == wineName);

    if (!isFound)
      throw new Error("The wine, you're looking for, is not found.");

    if (!isFound.paid)
      throw new Error(`${wineName} need to be paid before open the bottle.`);

    this.wines.splice(this.wines.indexOf(isFound), 1);

    return `You drank a bottle of ${wineName}.`;
  }

  cellarRevision(wineType) {
    let textResult = [];
    if (!wineType) {
      textResult = [
        `You have space for ${this.space} bottles more.`,
        `You paid ${this.bill}$ for the wine.`,
      ];
      this.wines
        .sort((a, b) => a.wineName.localeCompare(b.wineName))
        .map((w) =>
          textResult.push(
            `${w.wineName} > ${w.wineType} - ${
              w.paid ? "Has Paid" : "Not Paid"
            }.`
          )
        );
    } else {
    let isFound = this.wines.find((wine) => wine.wineType == wineType);
        if(!isFound) throw new Error(`There is no ${wineType} in the cellar.`); 
        textResult.push(
            `${isFound.wineName} > ${isFound.wineType} - ${
              isFound.paid ? "Has Paid" : "Not Paid"
            }.`
          )
    }
    return textResult.join('\n');
  }
}

let selection = new WineSelection(2);

console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
console.log((selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120)));
console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 50));


