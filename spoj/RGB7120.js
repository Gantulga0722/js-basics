// RGB7120 - Гурвалжин эсэх
// Өгөгдсөн 3 тоогоор талаа хийсэн гурвалжинг байгуулж болох бол YES үгүй бол NO гэж хэвлэ.

// Input
// Нэг мөрөнд 3 натурал тоо зайгаар тусгаарлагдан өгөгдөнө.

// Output
// Гурвалжин байгуулж болох бол YES үгүй бол NO.

// Example
// Input:
// 3 4 5
// Output:
// YES
function findTr(x, y, z) {
  if (x + y > z && x + z > y && y + z > x) {
    console.log("Yes - It can be triangle");
  } else {
    console.log("No - It can not be triangle");
  }
}
findTr(3, 4, 1);
