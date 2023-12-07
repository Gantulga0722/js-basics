let n = 269;
let y = 6;
let a = 0;
let z = 5;
let b = 0;
a = (n - (n % y)) / y + 1;
b = (a - (a % z)) / z;
console.log(b);
