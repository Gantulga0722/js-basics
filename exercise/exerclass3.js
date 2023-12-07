function findSome(x, y, z) {
  let some = [];
  count = -1;
  if (x < y) {
    for (let i = x; i <= y; i = i + z) {
      count++;
      some[count] = i;
    }
    console.log(some);
  } else {
    for (let a = y; a <= x; a = a + z) {
      count++;
      some[count] = a;
    }
    console.log(some);
  }
}
findSome(20, 10, 2);
