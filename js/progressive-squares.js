let utils = require("./proper-fractions-counting");

function expr(r, x) {
  return r + x * r * x * x * r;
}

function isProgressiveSlow(n) {
  for (let i = 1; i <= Math.sqrt(n); i++) {
    let r = n % i;
    if (r == 0) {
      continue;
    }
    let q = (n - r) / i;
    let rqdAsc = [r, q, i].sort((a, b) => a - b);
    if (rqdAsc[1] / rqdAsc[0] === rqdAsc[2] / rqdAsc[1]) {
      console.log(r, q, i, n);
      return true;
    }
  }
  return false;
}

let total = 0;
for (let i = 1; i <= Math.sqrt(Math.pow(10, 12)); i++) {
  if (isProgressiveSlow(i * i)) {
    total += i * i;
  }
  if (i % 10000 === 0) {
    console.log("total: " + total + " scanned: " + i);
  }
}

console.log(total);
