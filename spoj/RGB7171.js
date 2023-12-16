function findfloor(x, z, y) {
  function finddoor(n) {
    let floors = 0;
    let doors = 0;
    let entrns = 0;
    if (n <= x * y * z) {
      if (n <= x * y) {
        if (n % y != 0) {
          floors = (n - (n % y)) / y + 1;
          doors = ((n - 1) % y) + 1;
          entrns = 1;
        } else {
          floors = (n - (n % y)) / y;
          doors = ((n - 1) % y) + 1;
          entrns = 1;
        }
      } else {
        if (n % y != 0) {
          let a;
          doors = ((n - 1) % y) + 1;
          if (n % (x * y) != 0) {
            entrns = (n - (n % (x * y))) / (x * y) + 1;
          } else {
            entrns = (n - (n % (x * y))) / (x * y);
          }
          a = (n - (n % y)) / y + 1;
          floors = a - (entrns - 1) * x;
        } else {
          doors = ((n - 1) % y) + 1;
          if (n % (x * y) != 0) {
            entrns = (n - (n % (x * y))) / (x * y) + 1;
          } else {
            entrns = (n - (n % (x * y))) / (x * y);
          }
          a = (n - (n % y)) / y;
          floors = a - (entrns - 1) * x;
        }
      }
    } else {
      console.log("There are only", x * y * z, "doors");
    }

    console.log("Etnrance:", entrns, "Floor:", floors, "Door:", doors);
  }
  finddoor(247);
}
findfloor(9, 5, 6);
