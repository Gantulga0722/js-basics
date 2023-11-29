function findMult(x) {
  let a = (x - (x % 10)) / 10;
  let b = x % 10;
  let c = a * b;
  console.log(c);
}
findMult(44);
