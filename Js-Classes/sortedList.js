class List {
    constructor() {
        this.numbers = [];
        this.size = 0;
    }
    add(element) {
        this.numbers.push(element);
        this.size = this.numbers.length;
        this.sortNumbers();
    }

    remove(index) {
        if (this.numbers[index] !== undefined) {
            this.numbers.splice(index, 1);
            this.size = this.numbers.length;
            this.sortNumbers();
        }
    }


    get(index) {
        return this.numbers[index];
    }

    sortNumbers() {
        this.numbers.sort((a,b) => a - b);
    }
}
