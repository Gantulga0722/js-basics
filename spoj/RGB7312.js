function findfactorial(n) {
  let factor = 1;
  for (let i = 1; i < n; i++) {
    factor = factor / i;
  }
  console.log(factor);
}
findfactorial(120);
