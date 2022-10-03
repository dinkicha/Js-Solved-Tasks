function main(input = []) {
    let items = input.shift().split(', ');
    let commands = input.shift();

    while (commands !== 'Craft!') {
        let tokens = commands.split(' - ');
        let action = tokens[0];
        let item = tokens[1];
        let index = items.indexOf(item);

        switch (action) {
            case 'Collect':
                if (index < 0) {
                    items.push(item)
                }
                break;

            case 'Drop':
                if (index >= 0) {
                    items.splice(index, 1)
                }
                break;

            case 'Combine Items':
                let splitted = item.split(':');
                let oldItem = splitted[0];
                let newItem = splitted[1];
                index = items.indexOf(oldItem);
                if (index >= 0) {
                    items.splice(index + 1, 0, newItem);
                }
                break;
            case 'Renew':
                if (index >= 0) {
                    items.splice(index, 1);
                    items.push(item);
                }
                break;
        }
        commands = input.shift()
    }

    console.log(items.join(", "))

}
main([
    "Iron, Sword",
    "Drop - Bronze",
    "Combine Items - Sword:Bow",
    "Renew - Iron",
    "Craft!",
]);