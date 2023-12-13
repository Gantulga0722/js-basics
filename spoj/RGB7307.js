function findSumNum(n) {
  let minNum = 0;
  let digit = 0;
  if (n < 10) {
    minNum = n;
  } else {
    minNum = n % 10;
    for (let i = 0; i < n; i++) {
      digit = n % 10;
      n = (n - digit) / 10;
      if (digit <= minNum) {
        minNum = digit;
      } else {
        minNum = minNum;
      }
    }
    console.log("Minimum number is:", minNum);
  }
}
findSumNum(963271);
