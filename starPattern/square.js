function drwSqr(size) {
  let sqrStr = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      sqrStr += "*";
    }
    sqrStr += "\n";
  }
  console.log(sqrStr);
}
drwSqr(5);
