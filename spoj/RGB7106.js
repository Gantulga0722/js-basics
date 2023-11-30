function findMult(x, y, z, w) {
  let a;
  let b;
  let c;
  let d;
  if (x < 5) {
    a = x;
  } else {
    a = 1;
  }
  if (y < 5) {
    b = y;
  } else {
    b = 1;
  }
  if (z < 5) {
    c = z;
  } else {
    c = 1;
  }
  if (w < 5) {
    d = w;
  } else {
    d = 1;
  }
  let sum = a * b * c * d;
  if (x > 5 && y > 5 && z > 5 && w > 5) {
    sum = 0;
  }
  console.log(sum);
}
findMult(8, 6, 7, 9);
