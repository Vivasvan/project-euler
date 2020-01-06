function collatz(n) {
  if (n % 2 === 0) {
    return n / 2;
  } else {
    return 3 * n + 1;
  }
}

let compared = new Set();

let maxCount = 0;
let longestCycleSeed = 0;

for (let i = 2; i < 1000000; i++) {
  let alreadyCompared = compared.has(i);
  if (!alreadyCompared) {
    let count = 0;
    let current = i;
    while (!(current === 1)) {
      compared.add(current);
      current = collatz(current);
      count++;
    }

    if (count > maxCount) {
      maxCount = count;
      longestCycleSeed = i;
    }
    console.log(maxCount, longestCycleSeed);
  }
}
