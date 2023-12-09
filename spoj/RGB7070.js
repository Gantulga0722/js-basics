function findNatur(n) {
  let sum;
  if (n == 1) {
    return n;
  } else {
    sum = (n * (n + 1)) / 2;
    return sum;
  }
}
console.log(findNatur(10));
