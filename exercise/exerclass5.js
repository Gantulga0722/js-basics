function isPrime(num) {
  let some;
  let val;
  let mult = 1;
  for (let i = 2; i < num; i++) {
    val = num % i;
    mult = mult * val;
    if (mult != 0) {
      some = true;
    } else {
      some = false;
    }
  }
  return some;
}
function findPrime(num1, num2) {
  let subarr = [];
  let count = 0;
  for (let a = num1; a <= num2; a++) {
    if (isPrime(a) == true) {
      subarr[count] = a;
      count++;
    }
  }
  return subarr;
}
let gPrime = findPrime(2, 100);
console.log(gPrime);
