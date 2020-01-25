let total = 0;
let no = "";
let numberOfDigits = 302;
for (var i = 1; i <= numberOfDigits; i++) {
  let digit = nthDigitFromRight(i);
  total += digit;
}
console.log(total);

function nthDigitFromRight(n) {
  let remainder = Math.floor(Math.pow(10, 1000 * Math.log10(2) - n));
  let digit = remainder % 10;
  return digit;
}
console.log(no);
