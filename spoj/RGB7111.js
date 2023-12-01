function findFive(x, y, z, w) {
  let a;
  let b;
  let c;
  let d;
  if (x % 11 != 0) {
    a = x;
  } else {
    a = 0;
  }
  if (y % 11 != 0) {
    b = y;
  } else {
    b = 0;
  }
  if (z % 11 != 0) {
    c = z;
  } else {
    c = 0;
  }
  if (w % 11 != 0) {
    d = w;
  } else {
    d = 0;
  }
  let sum = a + b + c + d;
  console.log(sum);
}
findFive(23, 34, 45, 56);
