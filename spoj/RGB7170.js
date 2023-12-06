function findfloor(x, y) {
  function finddoor(n) {
    let floors = 0;
    let doors = 0;
    if (n <= x * y) {
      floors = (n - 1) / y;
      doors = n;
    } else if (n <= y + y) {
      floors = x - (x - floors - floors);
      doors = n - y;
    } else if (n <= y + y + y) {
      floors = x - (x - floors - floors - floors);
      doors = n - y - y;
    } else {
      console.log("Error");
    }
    console.log("Floor:", floors, "Door:", doors);
  }
  finddoor(10);
}
findfloor(5, 4);
