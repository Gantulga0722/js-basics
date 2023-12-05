// RGB7208 - 2-ын n зэрэг
// 2-ын өгөгдсөн тоон зэргийг ол. /2-ын n зэрэг гэдэг нь 2*2*...*2. Жишээ нь 2-ын 3 зэрэг 2*2*2=8 /

// Input
// Int төрлийн нэг тоо өгөгдөнө. Тэр тоо нь 2-ыг хэдэн удаа үржүүлэхийг заана.

// Output
// 2-ын өгөгдсөн тоон зэрэг.

// Example
// Input:
// 5

// Output:
// 32
function findSum(n) {
  let x = 2;
  let mult = x;
  for (let i = 1; i < n; i++) {
    mult = mult * x;
  }
  console.log(mult);
}
findSum(6);
