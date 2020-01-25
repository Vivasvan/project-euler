// let max = 1;
// for (var j = 0; j < 1000000; j++) {
//   let result = phi(j);
//   max = Math.max(max, j / result);
//   console.log(j, j / result);
// }

// console.log("max", max);
let primes = primesLessThan100().reverse();
console.log(primes);
function highestProduct() {
  let prod = 510510;
}

function primesLessThan100() {
  let primes = [];
  for (var i = 20; i < 10000000; i++) {
    if (isPrime(i)) {
      primes.push(i);
      console.log(i);
    }
  }
  return primes;
}
function makeHighlyCompositeNumberLessThan(n) {
  let ret = 1;
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      console.log(`prime ${i}`);
      let newRet = ret * i;

      if (newRet < n) {
        ret = newRet;
      } else {
        break;
      }
      i++;
      console.log(ret);
    }
  }
}

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function phi(n) {
  let coprimes = [];
  for (var i = 1; i < n; i++) {
    if (hcf(n, i) === 1) {
      coprimes.push(i);
    }
  }
  return coprimes.length;
}

function hcf(a, b) {
  let min = Math.min(a, b);
  let hcf = 1;
  for (let i = 1; i <= min; i++) {
    if (a % i !== 0 || b % i !== 0) {
      continue;
    }
    hcf = i;
  }

  return hcf;
}
