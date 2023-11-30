function findSum(x, y, z, w) {
  let a;
  let b;
  let c;
  let d;
  if (x > 80) {
    a = x;
  } else {
    a = 0;
  }
  if (y > 80) {
    b = y;
  } else {
    b = 0;
  }
  if (z > 80) {
    c = z;
  } else {
    c = 0;
  }
  if (w > 80) {
    d = w;
  } else {
    d = 0;
  }
  let sum = a + b + c + d;
  console.log(sum);
}
findSum(54, 75, 45, 33);
