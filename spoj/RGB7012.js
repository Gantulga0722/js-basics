function findTime(x) {
  let time = (x - (x % 3600)) / 3600;
  let min = (x - (x % 3600)) / 60;
  if ((min = 60)) {
    min = 0;
  } else if (min < 60) {
    min = min;
  } else if (min / 60 > 1) {
    min = min % 60;
  }
  let sec = x % 3600;
  if (sec / 60 < 60) {
    min = (sec - (sec % 60)) / 60;
    sec = sec % 60;
  }
  console.log("Time is:", time, ":", min, ":", sec);
}
findTime(30000000);
