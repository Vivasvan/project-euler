let words = require("./n-length-words").words;

it("1 length words of 2,3,5 are 235", () => {
  let wordsLengthTwo = words([2, 3, 5], 1);
  console.warn(wordsLengthTwo);
  expect(wordsLengthTwo).toEqual([2, 3, 5]);
});

it("2 length words of 2,3,5 are 6,10,15", () => {
  let wordsLengthTwo = words([2, 3, 5], 2);
  console.warn(wordsLengthTwo);
  expect(wordsLengthTwo).toEqual([6, 10, 15]);
});
