function findSum(n) {
  let sum = 0;
  for (let a = 0; a <= n; a = a + 1) {
    sum = sum + a;
  }
  console.log(sum);
}
findSum(5);
