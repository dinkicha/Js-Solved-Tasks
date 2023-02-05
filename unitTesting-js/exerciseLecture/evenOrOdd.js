describe("isOddOrEven tests", () => {
    //invalid inputs
    it("testing if it is a string with a number", () => {
      assert.equal(isOddOrEven(5), undefined);
    }); 
    it("testing if it is a string with an object", () => {
      assert.equal(isOddOrEven({}), undefined);
    }); 
    it("testing if it is a string with an array", () => {
      assert.equal(isOddOrEven([]), undefined);
    });
    it("should return undefined if the parameter is undefined", () => {
      assert.equal(isOddOrEven(undefined), undefined);
    });
    it("should return undefined if the parameter is null", () => {
      assert.equal(isOddOrEven(null), undefined);
    });
    //valid inputs
    it("testing is it even", () => {
      assert.equal(isOddOrEven('Hi'), 'even');
    });
    it("testing is it odd", () => {
      assert.equal(isOddOrEven('Hello'), 'odd');
    });
  });