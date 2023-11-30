function findFive(x, y, z, w) {
  let a;
  let b;
  let c;
  let d;
  if (x % 3 == 0) {
    a = 1;
  } else {
    a = 0;
  }
  if (y % 3 == 0) {
    b = 1;
  } else {
    b = 0;
  }
  if (z % 3 == 0) {
    c = 1;
  } else {
    c = 0;
  }
  if (w % 3 == 0) {
    d = 1;
  } else {
    d = 0;
  }
  let sum = a + b + c + d;
  console.log(sum);
}
findFive(5, 33, 5, 3);
