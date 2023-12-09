function findSquareSum(n) {
  let square;
  if (n == 1) {
    return n;
  } else {
    square = (1 / 6) * n * (n + 1) * (2 * n + 1);
    return square;
  }
}
console.log(findSquareSum(15));
