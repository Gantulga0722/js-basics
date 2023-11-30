function findDay(x) {
  let day = (x - (x % 24)) / 24;
  let time = x % 24;
  console.log("Day:", day, "Time:", time);
}
findDay(6545);
