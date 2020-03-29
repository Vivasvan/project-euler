module.exports = {
  phi: phi,
  factors: factors
};
let words = require("./n-length-words").words;
let primes = require("./primes.json").primes;

let total = 0;
// console.log(phi(100));

// for (var i = 2; i <= 1000000; i++) {
//   total += phi(i);
//   if (i % 1 === 0) {
//     console.log("i = " + i, "total = " + total);
//   }
// }
// console.log(total);

function phi(n) {
  let primeFactors = factors(n);
  let totalShared = 0;

  for (var l = 1; l <= primeFactors.length; l++) {
    wordsLengthL = words(primeFactors, l);
    for (let w of wordsLengthL) {
      let sharedDivisibles = Math.floor((n - 1) / w);
      totalShared += Math.pow(-1, l - 1) * sharedDivisibles;
    }
  }

  return n - 1 - totalShared;
}

function factors(n) {
  let factors = [];
  for (let prime of primes) {
    if (n % prime === 0) {
      factors.push(prime);
    }
    if (prime > n / 2) {
      break;
    }
  }
  return factors;
}

function primesLessThan10e6() {
  let primes = [];
  for (var i = 2; i < Math.min(1000000); i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// fs.writeFile(
//   "./primes.json",
//   JSON.stringify({
//     primes
//   }),
//   () => {
//     console.log("done");
//   }
// );
