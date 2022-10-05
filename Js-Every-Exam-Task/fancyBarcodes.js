function main(input) {
    let productCount = input.shift();
    let pattern = /@#{1,}(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])@#{1,}/;
    while (productCount > 0) {
        let barcode = input.shift();
        let match = pattern.exec(barcode);
        if (match) {
            let productGroup = '';
            let product = match.groups.product;
            for (let char of product) {
                let isNumber = Number(char);
                if (isNumber * 1 === isNumber) {
                    productGroup += char;
                }
            }
            if (productGroup === '') {
                productGroup = '00';
            }
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log('Invalid barcode');
        }
        productCount--;
    }
}
main(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])