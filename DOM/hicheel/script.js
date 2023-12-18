function add() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let sum = num1 + num2;
  document.getElementById("answer").innerText = sum;
}
add();
function subtrac() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let sum = num1 - num2;
  document.getElementById("answer").innerText = sum;
}
subtrac();
function mult() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let sum = num1 * num2;
  document.getElementById("answer").innerText = sum;
}
mult();
function divid() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let sum = num1 / num2;
  document.getElementById("answer").innerText = sum;
}
divid();

let number1 = Math.floor(9.4);
let number2 = Math.ceil(9.1);
let number3 = Math.round(9.4);
let max = Math.max(10, 20);

 


console.log(number1);
console.log(number2);
console.log(number3);
console.log(max);
console.log(x);


for(let i=0; i<100; i++){
    let x = Math.floor(Math.random() * 100);
}