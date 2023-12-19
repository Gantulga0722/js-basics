let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);
document.getElementById("inp1").value = num1;
document.getElementById("inp2").value = num2;
function checkSum() {
  let result = Number(document.getElementById("inp3").value);
  if (result == num1 + num2) {
    alert("The result is correct");
  } else {
    alert("The result is incorrect");
  }
}

function reset() {
  num1 = Math.floor(Math.random() * 100);
  num2 = Math.floor(Math.random() * 100);
  document.getElementById("inp1").value = num1;
  document.getElementById("inp2").value = num2;
  document.getElementById("inp3").value = "";
}
