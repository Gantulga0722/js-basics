// RGB7209 - a тооны n зэрэг
// Өгөгдсөн тооны n зэргийг ол.

// Input
// Нэг мөрөнд Int төрлийн эерэг 2  тоо зайгаар тусгаарлагдан өгөгдөнө.

// Output
// an

// Example
// Input:
// 3 4

// Output:
// 81

function findSum(x, n) {
  let mult = x;
  for (let i = 1; i < n; i++) {
    mult = mult * x;
  }
  console.log(mult);
}
findSum(2, 5);
