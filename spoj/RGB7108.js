function findMult(x, y, z) {
  let a;
  let b;
  let c;
  if (x % 2 != 0) {
    a = x;
  } else {
    a = 1;
  }
  if (y % 2 != 0) {
    b = y;
  } else {
    b = 1;
  }
  if (z % 2 != 0) {
    c = z;
  } else {
    c = 1;
  }
  let sum = a * b * c;
  if (x % 2 == 0 && y % 2 == 0 && z % 2 == 0) {
    sum = 0;
  }
  console.log(sum);
}
findMult(42, 23, 36564);
