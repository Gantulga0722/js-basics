function findSumNum(n) {
  let maxNum = 0;
  let digit = 0;
  if (n < 10) {
    maxNum = n;
  } else {
    maxNum = n % 10;
    for (let i = 0; i < n; i++) {
      digit = n % 10;
      n = (n - digit) / 10;
      if (digit >= maxNum) {
        maxNum = digit;
      } else {
        maxNum = maxNum;
      }
    }
    console.log("Maximus number is:", maxNum);
  }
}
findSumNum(96327);
