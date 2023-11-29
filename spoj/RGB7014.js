function findSecond(a, b, c) {
  let time = a * 3600;
  let min = b * 60;
  let sec = time + min + c;
  console.log("Second:", sec);
}
findSecond(1, 2, 3);
