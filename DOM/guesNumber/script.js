let number1 = Math.floor(Math.random() * 100);
function guesNumber() {
  let num1 = document.getElementById("num1").value;
  num1 = Number(num1);
  if (num1 > number1) {
    document.getElementById("answer").innerText = "Too High";
  }
  if (num1 < number1) {
    document.getElementById("answer").innerText = "Too Low";
  }
  if (num1 == number1) {
    document.getElementById("answer").innerText = "Congratulations";
  }
}
guesNumber();

function reset() {
  let number1 = Math.floor(Math.random() * 100);
  document.getElementById("num1").value = "";
}
reset();
