function printNos(n) {
  let a = 10;
  if (n <= 6) {
    a = a * 10;
    printNos(6);
    console.log(a);
  }
  return;
}
printNos(6);
