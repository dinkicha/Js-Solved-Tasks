describe("lookup chars tests", () => {
    it("returns char at index", () => {
      assert(lookupChar("love", 1) === "o");
    });
    it("returns char at index", () => {
      assert(lookupChar("l", 0) === "l");
    });
    it("returns empty string as input", () => {
      assert(lookupChar("", 0) === "Incorrect index");
    });
    it("returns index that is bigger than the string length", () => {
      assert(lookupChar("love", 10) === "Incorrect index");
    });
    it("returns index that is lower than the given index", () => {
      assert(lookupChar("love", -1) === "Incorrect index");
    });
    it("returns undefined if the first parameter is not string", () => {
      assert(lookupChar(5, 5) === undefined);
    });
    it("returns undefined with string first parameter and the second as a number", () => {
      assert(lookupChar("love", 5.5) === undefined);
    });
    it("returns undefined with wrong parameters type", () => {
      assert(lookupChar(5, '555') === undefined);
    });
  });