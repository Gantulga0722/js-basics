function findMult(x) {
  let a = (x - (x % 100)) / 100;
  let b = ((x % 100) - (x % 10)) / 10;
  let c = x % 10;
  let e = a + b + c;
  console.log(e);
}
findMult(333);
