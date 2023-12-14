function findPowerBy(num) {
  if (num == 0) {
    console.log("No this is not power of 2");
  }
  for (let i = 1; i <= num; i++) {
    num = num / 2;
  }
  if (num / 2 == 1 || num == 1 || num / 2 == 2) {
    console.log("Yes this is power of 2");
  } else {
    console.log("No this is not power of 2");
  }
}
findPowerBy(12);
