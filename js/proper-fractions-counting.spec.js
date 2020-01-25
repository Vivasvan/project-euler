let sol = require("./proper-fractions-counting");

it("factors works properly", () => {
  expect(sol.factors(6)).toEqual([2, 3]);
});

it("phi works properly for low n", () => {
  expect(sol.phi(6)).toEqual(2);
});

it("phi works properly for bigger n prime", () => {
  expect(sol.phi(997)).toEqual(996);
});

it("phi works for composite numbers large", () => {
  expect(sol.phi(100)).toEqual(40);
});
