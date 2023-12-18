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
