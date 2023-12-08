function isPrime(num) {
  let some;
  let val;
  let mult = 1;
  for (let i = 2; i < num; i++) {
    val = num % i;
    mult = mult * val;
    if (mult != 0) {
      some = "True";
    } else {
      some = "False";
    }
  }
  return some;
}
let check = isPrime(3347);
console.log(check);
