function findNaturOdd(n) {
  let sum;
  let oddNum;
  if (n == 1) {
    return n;
  } else if (n % 2 != 0) {
    oddNum = (1 / 2) * (n + 1);
    sum = oddNum * oddNum;
    return sum;
  } else {
    n = n - 1;
    oddNum = (1 / 2) * (n + 1);
    sum = oddNum * oddNum;
    return sum;
  }
}
console.log(findNaturOdd(9));
