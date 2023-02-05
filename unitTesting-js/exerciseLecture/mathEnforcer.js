let { assert } = require("chai");
const { describe } = require("mocha");

let mathEnforcer = {
  addFive: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }
    return num + 5;
  },
  subtractTen: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }
    return num - 10;
  },
  sum: function (num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return undefined;
    }
    return num1 + num2;
  },
};

describe("mathEnformer function tests", () => {
  describe("addFive function tests", () => {
    it("Should return undefined with string", () => {
      assert(mathEnforcer.addFive("Hello") === undefined);
    });
    it("Should return undefined with object", () => {
      assert(mathEnforcer.addFive({}) === undefined);
    });
    it("Should return undefined with array", () => {
      assert(mathEnforcer.addFive([]) === undefined);
    });
    it("Should return undefined with null", () => {
      assert(mathEnforcer.addFive(null) === undefined);
    });
    it("Should return undefined with undefined", () => {
      assert(mathEnforcer.addFive(undefined) === undefined);
    });
    it("Should return number + 5", () => {
      assert(mathEnforcer.addFive(5) === 10);
    });
    it("Should return number + 5", () => {
      assert(mathEnforcer.addFive(2.5) === 7.5);
    });
    it("Should return number + 5", () => {
      assert(mathEnforcer.addFive(-5) === 0);
    });
  });

  describe("subtract 10 function tests", () => {
    it("Should return undefined with string", () => {
      assert(mathEnforcer.subtractTen("Hello") === undefined);
    });
    it("Should return undefined with object", () => {
      assert(mathEnforcer.subtractTen({}) === undefined);
    });
    it("Should return undefined with array", () => {
      assert(mathEnforcer.addFive([]) === undefined);
    });
    it("Should return undefined with null", () => {
      assert(mathEnforcer.subtractTen(null) === undefined);
    });
    it("Should return undefined with undefined", () => {
      assert(mathEnforcer.subtractTen(undefined) === undefined);
    });
    it("Should return number - 10", () => {
        assert(mathEnforcer.subtractTen(5) === -5);
      });
      it("Should return number - 10", () => {
        assert(mathEnforcer.subtractTen(15.5) === 5.5);
      });
      it("Should return number - 10", () => {
        assert(mathEnforcer.subtractTen(-5) === -15);
      });
  });

  describe("sumOfNumers function tests", () => {
    it("Should return undefined if one of the parameters is not a number", () => {
      assert(mathEnforcer.sum(5, "asd") === undefined);
    });
    it("Should return undefined if one of the parameters is not a number", () => {
      assert(mathEnforcer.sum("asd", 5) === undefined);
    });
    it("Should return sum of the two numbers if they are numbers", () => {
      assert(mathEnforcer.sum(5, 5) === 10);
    });
    it("Should return sum of the two numbers if they are numbers", () => {
        assert(mathEnforcer.sum(-5, -5) === -10);
      });
    it("Should return sum of the two numbers if they are numbers", () => {
        assert(mathEnforcer.sum(5.5, 5.5) === 11);
      });
      it("Should return sum of the two numbers if they are numbers", () => {
        assert(mathEnforcer.sum(-5.5, -5.5) === -11);
      });
  });
});
