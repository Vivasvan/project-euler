for (let i = 1; i < 1000; i++) {
  for (let j = 1; j < 1000; j++) {
    let k = 1000 - i - j;

    let lhs = i * i + j * j;
    let rhs = k * k;

    if (lhs === rhs) {
      console.log(i * j * k);
    }
  }
}
