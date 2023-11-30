function findMult(x, y, z) {
  let a;
  let b;
  let c;
  if (x % 2 == 0) {
    a = x;
  } else {
    a = 0;
  }
  if (y % 2 == 0) {
    b = y;
  } else {
    b = 0;
  }
  if (z % 2 == 0) {
    c = z;
  } else {
    c = 0;
  }
  let sum = a + b + c;
  console.log(sum);
}
findMult(1, 3, 5);
