function findSome(x, y, z) {
  let some = [];
  count = 0;
  if (x < y) {
    for (let i = x; i <= y; i = i + z) {
      some[count] = i;
      count++;
    }
    console.log(some);
  } else {
    for (let a = y; a <= x; a = a + z) {
      some[count] = a;
      count++;
    }
    console.log(some);
  }
}
findSome(20, 10, 2);
