function findSome(x) {
  let y;
  y = ((x % 100) - (x % 10)) / 10;
  return y;
}
let y = findSome(678);
console.log(y);
