const add = require("./add_and_multiply");

describe("add", () => {
  it("adds 2 and 2", () => {
    expect(add.add(2, 2)).toBe(4);
  });
});

describe("multiply", () => {
  it("multiplies 2 by 3", () => {
    expect(add.multiply(2, 3)).toBe(6);
  });
});
