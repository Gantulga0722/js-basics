function findYear(num1, num2) {
  for (let i = num1; i <= num2; i++) {
    if ((i % 4 == 0 && i % 100 != 0) || (i % 400 == 0 && i % 100 != 0)) {
      console.log(i);
    }
  }
  console.log("These are the Leap years:");
}
findYear(2000, 2023);
