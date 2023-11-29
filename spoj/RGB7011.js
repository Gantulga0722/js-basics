function findMin(x) {
  let y = (x - (x % 60)) / 60;
  let b = x % 60;
  console.log("Time:", y, ".", b);
}
findMin(500);
