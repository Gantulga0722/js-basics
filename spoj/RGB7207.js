function findSum(x, y) {
  let sum = 0;
  for (let a = 0; a < y; a = a + 1) {
    sum = sum + x;
  }
  console.log(sum);
}
findSum(50, 5);
