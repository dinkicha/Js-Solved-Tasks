function furniture(input) {
    let pattern = /^>>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)$/;
    let furniture = [];
    let totalCost = 0;
    while (input[0] !== "Purchase") {
        let line = input.shift();
        let match = pattern.exec(line);
        if (match !== null) {
            let { name, price, qty } = match.groups;
            price = Number(price);
            qty = Number(qty);
            totalCost += price * qty;
            furniture.push(name);
        }
    }
    console.log("Bought furniture:");
    for (const item of furniture) {
        console.log(item);
    }
    console.log("Total money spend: " + totalCost.toFixed(2));
}
furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
