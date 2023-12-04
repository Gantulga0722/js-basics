function findSum(n) {
  let sum = 1;
  for (let a = 1; a <= n; a = a + 1) {
    sum = sum * a;
  }
  console.log(sum);
}
findSum(5);
