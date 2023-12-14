function findNum(num) {
  if (num == 0) {
    console.log("Error");
  } else {
    for (let i = 0; i < num; i++) {
      num = num / 3;
    }
    num = num * 3;
    if (Number.isInteger(num)) {
      console.log(num);
    } else {
      console.log("This number is can not be confiscated into power of 3");
    }
  }
}
findNum(72);
