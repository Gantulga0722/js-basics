let arr = [3, 2, 1, 5, 4];
function filterByDate() {
  let swit;
  for (let i = 0; i < arr.length; i++) {
    console.log("Start", arr[i]);
    for (let a = i + 1; a < arr.length; a++)
      if (arr[i] > arr[a]) {
        swit = arr[i];
        arr[i] = arr[a];
        arr[a] = swit;
      }
    console.log("End", arr[i]);
  }
}
filterByDate();
// let s = filterByDate();
// console.log(s);
