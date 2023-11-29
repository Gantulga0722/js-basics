function findTime(x) {
  let time = (x - (x % 3600)) / 3600;
  let min = (x - (x % 3600)) / 60;
  if ((min = 60)) {
    min = 0;
  }
  let sec = x % 3600;
  console.log("Time is:", time, ":", min, ":", sec);
}
findTime(3612);
