var arr = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];
let newStr = "";
let str = "";
let row;
function arrToColumn() {
  for (let i = 0; i < arr.length; i++) {
    if (i == 0 || i % 2 == 0) {
      arr.splice(i, 0, "row" + " " + i / 2);
    } else if (arr[i] == []) {
      for (let j = 0; j < arr.length; j++) {
        console.log(arr[i][j]);
      }
    }
  }
}
arrToColumn();

// str = arr.toString();
// for (let i = 0; i < arr.length; i++) {
//   if (i == 0 || i % 2 == 0) {
//     arr.splice(i, 0, "row" + " " + i / 2);
//   }
// }
// row = arr.toString();
// for (let j = 0; j < row.length; j++) {
//   console.log(row[j]);
// }
