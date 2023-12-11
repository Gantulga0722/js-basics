function findSumNum(n) {
  let sum = 0;
  let digit = 0;
  if (n < 10) {
    sum = n;
  } else {
    for (let i = 0; i <= n; i++) {
      digit = n % 10;
      n = (n - digit) / 10;
      sum = sum + digit;
    }
  }
  console.log(sum);
}
findSumNum(234);
