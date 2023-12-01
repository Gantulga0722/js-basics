function findBig(x, y, z) {
  if (x > y && x > z) {
    console.log(x, "is bigger");
  } else if (y > z) {
    console.log(y, "is bigger");
  } else {
    console.log(z, "is bigger");
  }
}
findBig(8, 9, 6);
