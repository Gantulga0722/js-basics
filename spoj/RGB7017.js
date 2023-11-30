function findYear(x) {
  let year = (x - (x % 12)) / 12;
  let month = x % 12;
  console.log("Year:", year, "Month:", month);
}
findYear(56);
