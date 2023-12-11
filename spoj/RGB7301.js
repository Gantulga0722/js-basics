function findNum(n) {
  let capNum;
  if (n < 10) {
    capNum = n;
  } else if (n <= 1000000) {
    for (let i = 10; i <= n; i = i * 10) {
      capNum = (n - (n % i)) / i;
    }
  } else {
    console.log("This is more than 10^6");
  }
  console.log(capNum, "is the Capitan Number");
}
findNum(23456);
