function findSmall(x, y, z, w) {
  if (x < y && x < z && x < w) {
    console.log(x, "is smaller number");
  } else if (y < x && y < z && y < w) {
    console.log(y, "is smaller number");
  } else if (z < x && y > z && z < w) {
    console.log(z, "is smaller number");
  } else {
    console.log(w, "is smaller number");
  }
}
findSmall(3, 2, 7, 4);
