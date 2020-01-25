module.exports = {
  words
};

function words(primes, length) {
  if (length === 1) {
    return [...primes];
  } else {
    let newWords = new Set();
    let wordsLengthOneLess = words(primes, length - 1);
    for (var p of primes) {
      for (var w of wordsLengthOneLess) {
        if (w % p !== 0) {
          newWords.add(w * p);
        }
      }
    }

    return [...newWords];
  }
}
