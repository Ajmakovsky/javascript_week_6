const file = require("./fizzbuzz");

describe("fizzbuzz", () => {
  it('fizzbuzz(15) returns "fizzbizz"', () => {
    expect(file.fizzBuzz(15)).toBe("fizzbuzz");
  });

  it('fizzbuzz(9) returns "fizz"', () => {
    expect(file.fizzBuzz(9)).toBe("fizz");
  });

  it('fizzbuzz(5) returns "buzz"', () => {
    expect(file.fizzBuzz(5)).toBe("buzz");
  });

  it('fizzbuzz(4) returns "4"', () => {
    expect(file.fizzBuzz(4)).toBe(4);
  });
});
