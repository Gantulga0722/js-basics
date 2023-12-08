function findNatur(n) {
  let sum;
  if (n == 1) {
    return 1;
  } else {
    sum = (n * (n + 1)) / 2;
    return sum;
  }
}
console.log(findNatur(9));
