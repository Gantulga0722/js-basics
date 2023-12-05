function findSum(n) {
  let sum = 0;
  for (let a = 0; a < 100; a = a + 1) {
    sum = sum + n;
  }
  console.log(sum);
}
findSum(6);
