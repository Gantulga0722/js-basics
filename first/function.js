function doSometing(input) {
  console.log(input);
  return input * input;
}
let result = doSometing(15);
console.log(result);

function printHello() {
  console.log("Hello World");
}
function getSomething(input) {
  console.log("Input:", input);
}
function returnSomething() {
  return "Hello World";
}

printHello();
printHello();

getSomething("My Text");

function getMultiInput(num1, num2) {
  console.log("num1=", num1);
  console.log("num2 =", num2);
  let sum = num1 + num2;
  return sum;
}

// Find Day of the Week
function findDay(num) {
  if ((num = 1)) {
    return "Monday";
  } else if ((num = 2)) {
    return "Tuesday";
  } else if ((num = 3)) {
    return "Wednesday";
  } else if ((num = 4)) {
    return "Thursday";
  } else if ((num = 2)) {
    return "Friday";
  } else if ((num = 2)) {
    return "Saturday";
  } else if ((num = 2)) {
    return "Sunday";
  }
}
console.log(findDay(5));

// Find month of the Year
function findMonth(num) {
  if (num <= 31) {
    return "This month is Janurary";
  } else if (num <= 59) {
    return "This month is Feburary";
  } else if (num <= 90) {
    return "This month is March";
  } else if (num <= 120) {
    return "This month is April";
  } else if (num <= 151) {
    return "This month is is May";
  } else if (num <= 181) {
    return "This month isis June";
  } else if (num <= 212) {
    return "This month is July";
  } else if (num <= 243) {
    return "This month is August";
  } else if (num <= 273) {
    return "This month is September";
  } else if (num <= 304) {
    return "This month is October";
  } else if (num <= 334) {
    return "This month is Novenber";
  } else if (num <= 365) {
    return "This month is December";
  } else {
    return "The days are more than a year";
  }
}
console.log(findMonth(334));

// Find score of Sudents
function findScore(midterm1, midterm2, final) {
  let score = midterm1 * 0.25 + midterm2 * 0.25 + final * 0.5;
  if (score < 60) {
    return "Your score is: F";
  } else if (score < 70) {
    return "Your score is: D";
  } else if (score < 80) {
    return "Your score is: C";
  } else if (score < 90) {
    return "Your score is: B";
  } else if (score < 100) {
    return "Your score is: A";
  } else {
    return "Error: Wrong score";
  }
}
console.log(findScore(80, 90, 100));

function triangel(num1, num2, num3) {
  let perimeter = num1 + num2 + num3;
  return perimeter;
}
console.log(triangel(3, 4, 5));

function sum(num1, num2) {
  let sum;
}
