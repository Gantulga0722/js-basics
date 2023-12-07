function find(x, y) {
  if (x > y) {
    for (let i = y; i <= x; i++) {
      console.log(i);
    }
  } else {
    for (let a = x; a <= y; a++) {
      console.log(a);
    }
  }
}
find(9, 15);
