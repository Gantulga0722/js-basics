let days = 45;
if (days <= 31) {
  console.log("This month is Janurary");
} else if (days <= 59) {
  console.log("This month is Feburary");
} else if (days <= 90) {
  console.log("This month is March");
} else if (days <= 120) {
  console.log("This month is April");
} else if (days <= 151) {
  console.log("This month is May");
} else if (days <= 181) {
  console.log("This month is June");
} else if (days <= 212) {
  console.log("This month is July");
} else if (days <= 243) {
  console.log("This month is August");
} else if (days <= 273) {
  console.log("This month is September");
} else if (days <= 304) {
  console.log("This month is October");
} else if (days <= 334) {
  console.log("This month is Novenber");
} else if (days <= 365) {
  console.log("This month is December");
} else {
  console.log("The days are more than a year");
}

let midterm1 = 85;
let midterm2 = 85;
let final = 95;
let score = midterm1 * 0.25 + midterm2 * 0.25 + final * 0.5;
if (score < 60) {
  console.log("Your score is:", score, "F");
} else if (score < 70) {
  console.log("Your score is:", score, "D");
} else if (score < 80) {
  console.log("Your score is:", score, "C");
} else if (score < 90) {
  console.log("Your score is:", score, "B");
} else if (score < 100) {
  console.log("Your score is:", score, "A");
} else {
  console.log("Error: Wrong score");
}

let midterm1 = 80;
let midterm2 = 80;
let final = 95;
let score = (midterm1 + midterm2 + final) / 3;
if (score < 60) {
  console.log("Your score is:", score, "F");
} else if (score < 70) {
  console.log("Your score is:", score, "D");
} else if (score < 80) {
  console.log("Your score is:", score, "c");
} else if (score < 90) {
  console.log("Your score is:", score, "B");
} else if (score < 100) {
  console.log("Your score is:", score, "A");
} else {
  console.log("Error: This is wrong score");
}
