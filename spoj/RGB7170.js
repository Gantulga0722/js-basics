function findfloor(x, y) {
  function finddoor(n) {
    let floors = 0;
    let doors = 0;
    if (n <= x * y) {
      if (n % y != 0) {
        floors = (n - (n % y)) / y + 1;
        doors = ((n - 1) % y) + 1;
      } else {
        floors = (n - (n % y)) / y;
        doors = ((n - 1) % y) + 1;
      }
    } else {
      console.log("There are only", x * y, "doors");
    }
    console.log("Floor:", floors, "Door:", doors);
  }
  finddoor(54);
}
findfloor(9, 6);
