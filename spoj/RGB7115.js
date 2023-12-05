// RGB7115 - Тэнцсэн, унасан
// Тоон дүн 3-аас их бол тэнцсэнд тооцно. Бусад тохиолдолд унана. Өгөгдсөн тоон дүн тэнцсэн эсэхийг тогтоо.

// Input
// Тоон дүн зөвхөн 2,3,4,5 гэсэн тоонуудын аль нэгээр өгөгдөнө.

// Output
// Тэнцсэн тохиолдолд "Tentssen", эсрэг тохиолдолд "Unasan" гэж хэвлэ.

// Example
// Input:
// 4
// Output:
// Tentssen
function find(x) {
  if (x > 3) {
    console.log("Tentssen");
  } else {
    console.log("Unasan");
  }
}
find(4);
