let addFunction = (a, b) => {
  return a + b;
};
let subF = (a, b) => {
  return a - b;
};
let multiF = (a, b) => {
  return a * b;
};
let divF = (a, b) => {
  return a / b;
};
let powF = (a, b) => {
  return a ** b;
};
let mathOperation = (num1, num2, operation) => {
  return operation(num1, num2);
};
const result = mathOperation(10, 20, multiF);
console.log(result);
