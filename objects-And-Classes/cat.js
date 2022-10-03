function cats(catsAsString) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }
  let parsedCats = [];
  for (let catAsString of catsAsString) {
    let tokens = catAsString.split(" ");
    let cat = new Cat(tokens[0], Number(tokens[1]));
    parsedCats.push(cat);
  }
  for (let cat of parsedCats) {
    cat.meow();
  }
}

cats(["Mellow 2", "Tom 5"]);
