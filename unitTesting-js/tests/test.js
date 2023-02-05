function isOddOrEven(string) {
  if (typeof string !== "string") {
    return undefined;
  }
  if (string.length % 2 === 0) {
    return "even";
  }

  return "odd";
}

let expect = require("chai").expect;

describe("even or odd", function () {
  it("isString", function () {
    expect(isOddOrEven(3)).to.undefined;
  });
  it("isOdd", function () {
    expect(isOddOrEven("s")).to.equal("odd");
  });
  it("isEven", function () {
    expect(isOddOrEven("aa")).to.equal("even");
  });
});