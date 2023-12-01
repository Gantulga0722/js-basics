function findYear(x, y, z) {
  if ((x % 4 == 0 && x % 100 != 0) || (x % 400 == 0 && x % 100 != 0)) {
    console.log(x, "This year is Leap year");
  } else {
    console.log(x, "This year is not Leap year");
  }
  if ((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0 && y % 100 != 0)) {
    console.log(y, "This year is Leap year");
  } else {
    console.log(y, "This year is not Leap year");
  }
  if ((z % 4 == 0 && z % 100 != 0) || (z % 400 == 0 && z % 100 != 0)) {
    console.log(z, "This year is Leap year");
  } else {
    console.log(z, "This year is not Leap year");
  }
}
findYear(2004, 3200, 2050);
