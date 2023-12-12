function findSumNum(n) {
  let minNum = 0;
  let digit = 0;
  if (n < 10) {
    minNum = n;
  } else {
    for (let i = 0; i < n; i++) {
      digit = n % 10;
      n = (n - digit) / 10;
      console.log(digit);
    }
  }
  console.log(n);
}
findSumNum(3);
