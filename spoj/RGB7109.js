function findFive(x, y, z) {
  let a;
  let b;
  let c;
  if (x == 5) {
    a = 1;
  } else {
    a = 0;
  }
  if (y == 5) {
    b = 1;
  } else {
    b = 0;
  }
  if (z == 5) {
    c = 1;
  } else {
    c = 0;
  }
  let sum = a + b + c;
  console.log(sum);
}
findFive(5, 5, 5);
