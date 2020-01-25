function nthdigit(n, prevdigits) {
  for (var d = 1; d <= 10; d++) {
    let target = 2;
    let candidate = +prevdigits + Math.pow(10, 1 - n) * d;
    console.log(candidate);
    if (candidate * candidate > target) {
      return d - 1;
    }
  }
}

function solution() {
  let prevDigits = "1.4";
  let n = 3;
  let total = 5;
  while (prevDigits.length < 101) {
    let digit = nthdigit(n, prevDigits);
    prevDigits = prevDigits + digit.toString();
    n++;
    console.log(prevDigits);
    total += digit;
  }
}
solution();

function square(x) {}
