function findfloor(x, y) {
  function finddoor(n) {
    let floors = 0;
    let doors = 0;
    if (n <= x * y && n < y) {
      floors = n / y - (n % y);
      doors = ((n - 1) % y) + 1;
    } else if (n < y) {
      floors = 1;
      doors = n;
    }
    console.log("Floor:", floors, "Door:", doors);
  }
  finddoor(10);
}
findfloor(5, 4);
