let athletes = [
  {
    name: "Lebron James",
    age: 39,
    score: [20, 30, 35, 45],
  },
  {
    name: "Kevin Durant",
    age: 35,
    score: [25, 50, 35, 45],
  },
  {
    name: "Kirey Irving",
    age: 33,
    score: [33, 27, 38, 45],
  },
  {
    name: "Stephen Curry",
    age: 35,
    score: [24, 45, 35, 40],
  },
  {
    name: "Ja Morant",
    age: 24,
    score: [43, 30, 35, 34],
  },
  {
    name: "Devin Booker",
    age: 39,
    score: [23, 30, 34, 45],
  },
  {
    name: "Luka Donchic",
    age: 24,
    score: [34, 30, 35, 45],
  },
  {
    name: "Jamal Murray",
    age: 26,
    score: [20, 24, 38, 25],
  },
  {
    name: "Nicola Jokic",
    age: 28,
    score: [30, 30, 35, 45],
  },
  {
    name: "Victor Wembanyama ",
    age: 19,
    score: [20, 21, 19, 25],
  },
];
function findAve() {
  let average = 0;
  for (i = 0; i < athletes[0].score.length; i++) {
    average = average + athletes[0].score[i] / athletes[0].score.length;
  }
  console.log(athletes[0].name, "average score:", average);
}
findAve();
