const findNewApartment = {
  isGoodLocation(city, nearPublicTransportation) {
    if (
      typeof city !== "string" ||
      typeof nearPublicTransportation !== "boolean"
    ) {
      throw new Error("Invalid input!");
    }
    if (city !== "Sofia" && city !== "Plovdiv" && city !== "Varna") {
      return "This location is not suitable for you.";
    } else {
      if (nearPublicTransportation == true) {
        return "You can go on home tour!";
      } else {
        return "There is no public transport in area.";
      }
    }
  },
  isLargeEnough(apartments, minimalSquareMeters) {
    let resultArr = [];
    if (
      !Array.isArray(apartments) ||
      typeof minimalSquareMeters !== "number" ||
      apartments.length == 0
    ) {
      throw new Error("Invalid input!");
    }
    apartments.map((apartment) => {
      if (apartment >= minimalSquareMeters) {
        resultArr.push(apartment);
      }
    });
    return resultArr.join(", ");
  },
  isItAffordable(price, budget) {
    if (
      typeof price !== "number" ||
      typeof budget !== "number" ||
      price <= 0 ||
      budget <= 0
    ) {
      throw new Error("Invalid input!");
    }
    let result = budget - price;
    if (result < 0) {
      return "You don't have enough money for this house!";
    } else {
      return "You can afford this home!";
    }
  },
};

let expect = require("chai").expect;

describe("Tests", function () {
  describe("isGoodLocationTests", function () {
    it("if the city is not a string", function () {
      expect(() => findNewApartment.isGoodLocation(["Sofia"], true)).to.throw(
        "Invalid input!"
      );
    });
    it("if the second parameter is not boolean", function () {
      expect(() => findNewApartment.isGoodLocation("Plovdiv", "true")).to.throw(
        "Invalid input!"
      );
    });
    it("if the city is not the city we want", function () {
      expect(findNewApartment.isGoodLocation("Burgas", true)).to.equal(
        "This location is not suitable for you."
      );
    });
    it("if the city is  the city we want ", function () {
      expect(findNewApartment.isGoodLocation("Plovdiv", false)).to.equal(
        "There is no public transport in area."
      );
    });
    it("if the city is the city we want 2", function () {
      expect(findNewApartment.isGoodLocation("Plovdiv", true)).to.equal(
        "You can go on home tour!"
      );
    });
  });
  describe("isLargeEnough", function () {
    it("if the array is not an array", function () {
      expect(() => findNewApartment.isLargeEnough("pesho", 3)).to.throw(
        "Invalid input!"
      );
    });
    it("if the square is not number", function () {
      expect(() => findNewApartment.isLargeEnough([3], "3")).to.throw(
        "Invalid input!"
      );
    });
    it("if the length is", function () {
      expect(() => findNewApartment.isLargeEnough([], 3)).to.throw(
        "Invalid input!"
      );
    });
    it("it return: 2, 3", function () {
      expect(findNewApartment.isLargeEnough([1, 2, 3], 2)).to.equal("2, 3");
    });
  });
  describe("isItAffordable", function () {
    it("if the price is not a number", function () {
      expect(() => findNewApartment.isItAffordable("100", 101)).to.throw(
        "Invalid input!"
      );
    });
    it("if the budget is not a number", function () {
      expect(() => findNewApartment.isItAffordable(100, "101")).to.throw(
        "Invalid input!"
      );
    });
    it("if the price is 0", function () {
      expect(() => findNewApartment.isItAffordable(0, 101)).to.throw(
        "Invalid input!"
      );
    });
    it("if the price is less than 0", function () {
      expect(() => findNewApartment.isItAffordable(-1, 101)).to.throw(
        "Invalid input!"
      );
    });
    it("if the budget is 0", function () {
      expect(() => findNewApartment.isItAffordable(100, 0)).to.throw(
        "Invalid input!"
      );
    });
    it("if the budget is less than 0", function () {
      expect(() => findNewApartment.isItAffordable(100, -1)).to.throw(
        "Invalid input!"
      );
    });
    it("if the budget is ok", function () {
      expect(findNewApartment.isItAffordable(100, 101)).to.equal(
        "You can afford this home!"
      );
    });
    it("if the budget is the same as the price", function () {
      expect(findNewApartment.isItAffordable(100, 100)).to.equal(
        "You can afford this home!"
      );
    });
    it("if the budget is lower than the price", function () {
      expect(findNewApartment.isItAffordable(100, 99)).to.equal(
        "You don't have enough money for this house!"
      );
    });
  });
});
