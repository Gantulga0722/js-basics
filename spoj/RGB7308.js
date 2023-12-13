function reverseNumber(num) {
  let minNum = 0;
  let digit = 0;
  let count = 0;
  let rev = num;
  let reverse = 0;
  if (num < 10) {
    minNum = num;
  } else {
    for (let i = 0; i < num; i++) {
      digit = num % 10;
      num = (num - digit) / 10;
      if (digit >= 0) {
        count++;
      }
    }
    for (let j = 0; j < count; j++) {
      minNum = rev % 10;
      rev = (rev - minNum) / 10;
      minNum = minNum * 10 ** (count - j);
      reverse = reverse + minNum;
    }
    console.log(reverse + rev);
  }
}
reverseNumber(123456);
