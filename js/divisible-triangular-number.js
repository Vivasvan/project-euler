let maxSoFar = 0;
let triangularNoWithMaxSoFar = 1;
for (var i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
  let divisors = getDivisors((i * (i + 1)) / 2);

  if (divisors.length > maxSoFar) {
    maxSoFar = divisors.length;
    triangularNoWithMaxSoFar = i;
    console.log(maxSoFar, triangularNoWithMaxSoFar);
  }
  if (divisors.length > 500) {
    break;
  }
}

function getDivisors(n) {
  let divisors = [];
  for (var i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      divisors.push(n);
    }
  }
  return divisors;
}

function getDiv

function isPrime(n) {
  for (var i = 0; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
