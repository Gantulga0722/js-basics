function findBnum(x, y, z) {
  if (x > y && x > z) {
    console.log(x, "is bigger");
  } else if (y > x && y > z) {
    console.log(y, "is bigger");
  } else {
    console.log(z, "is bigger");
  }
}
findBnum(10, 3, 7);
