function findGrad(x) {
  if (x > 89 && x < 101) {
    console.log("A");
  } else if (x > 79 && x < 90) {
    console.log("B");
  } else if (x > 69 && x < 80) {
    console.log("C");
  } else if (x > 59 && x < 70) {
    console.log("D");
  } else if (x < 60 && x > 0) {
    console.log("F");
  } else {
    console.log("Error");
  }
}
findGrad(106);
