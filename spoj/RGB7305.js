function findNum(num1, num2) {
  let sum = 0;
  let digit = 0;
  if (num1 == num2 && num1 < 10) {
    sum = 1;
  } else {
    for (let i = 0; i < num1; i++) {
      digit = num1 % 10;
      num1 = (num1 - digit) / 10;
      if (digit == num2) {
        sum++;
      }
    }
    if (num1 == num2) {
      sum++;
    }
  }
  console.log(sum);
}
findNum(4, 4);
