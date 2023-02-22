const Candy = require("./candy");

describe("candy class", () => {
  it("creates a new candy Snickers, price £3.99", () => {
    let candy = new Candy("Snickers", 3.99);
    expect(candy.getName()).toBe("Snickers");
  });

  it("creates a new candy Snickers, price £3.99", () => {
    let candy = new Candy("Snickers", 3.99);
    expect(candy.getPrice()).toBe(3.99);
  });
});
