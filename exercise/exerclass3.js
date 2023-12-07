function findSome(x, y, z) {
  let some = [];
  count = -1;
  for (let i = x; i <= y; i = i + z) {
    count++;
    some[count] = i;
  }
  console.log(some);
}
findSome(10, 20, 2);
