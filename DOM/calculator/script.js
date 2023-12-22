const root = document.getElementById("root");
const calcul = document.createElement("div");
let zer0 = "";
let one1 = "";
let two2 = "";
let three3 = "";
let four4 = "";
let five5 = "";
let six6 = "";
let seven7 = "";
let eight8 = "";
let nine9 = "";
let dot0 = "";
let plsM = 0;
let num1 = 0;
let num2 = 0;
let result = 0;
let resusltMult = 0;
let resusltDiv = 0;
let resusltSub = 0;
let resusltSum = 0;
let resusltPers = 0;

calcul.setAttribute("class", "calcul");
root.appendChild(calcul);

const scrInput = document.createElement("div");
scrInput.setAttribute("class", "scr_input");
calcul.appendChild(scrInput);
scrInput.innerHTML = "";

const calButtons = document.createElement("div");
calButtons.setAttribute("class", "cal_buttons");
calcul.appendChild(calButtons);

const operations = document.createElement("div");
operations.setAttribute("class", "operations");
calButtons.appendChild(operations);

const clrButton = document.createElement("button");
clrButton.setAttribute("class", "top_buttons");
operations.appendChild(clrButton);
clrButton.innerHTML = "AC";
clrButton.addEventListener("click", aclear);

const plsMnsButton = document.createElement("button");
plsMnsButton.setAttribute("class", "top_buttons");
operations.appendChild(plsMnsButton);
plsMnsButton.innerHTML = "+/-";
plsMnsButton.addEventListener("click", plsMns);

const percentButton = document.createElement("button");
percentButton.setAttribute("class", "top_buttons");
operations.appendChild(percentButton);
percentButton.innerHTML = "%";

const seven = document.createElement("button");
seven.setAttribute("class", "number_button");
operations.appendChild(seven);
seven.innerHTML = "7";
seven.addEventListener("click", seven07);

const eight = document.createElement("button");
eight.setAttribute("class", "number_button");
operations.appendChild(eight);
eight.innerHTML = "8";
eight.addEventListener("click", eight08);

const nine = document.createElement("button");
nine.setAttribute("class", "number_button");
operations.appendChild(nine);
nine.innerHTML = "9";
nine.addEventListener("click", nine09);

const four = document.createElement("button");
four.setAttribute("class", "number_button");
operations.appendChild(four);
four.innerHTML = "4";
four.addEventListener("click", four04);

const five = document.createElement("button");
five.setAttribute("class", "number_button");
operations.appendChild(five);
five.innerHTML = "5";
five.addEventListener("click", five05);

const six = document.createElement("button");
six.setAttribute("class", "number_button");
operations.appendChild(six);
six.innerHTML = "6";
six.addEventListener("click", six06);

const one = document.createElement("button");
one.setAttribute("class", "number_button");
operations.appendChild(one);
one.innerHTML = "1";
one.addEventListener("click", one01);

const two = document.createElement("button");
two.setAttribute("class", "number_button");
operations.appendChild(two);
two.innerHTML = "2";
two.addEventListener("click", two02);

const three = document.createElement("button");
three.setAttribute("class", "number_button");
operations.appendChild(three);
three.innerHTML = "3";
three.addEventListener("click", three03);

const zero = document.createElement("button");
zero.setAttribute("class", "zero_buttons");
operations.appendChild(zero);
zero.innerHTML = "0";
zero.addEventListener("click", zero00);

const dot = document.createElement("button");
dot.setAttribute("class", "number_button");
operations.appendChild(dot);
dot.innerHTML = ".";
dot.addEventListener("click", dot00);

const operations1 = document.createElement("div");
operations1.setAttribute("class", "operations1");
calButtons.appendChild(operations1);

const dividButton = document.createElement("button");
dividButton.setAttribute("class", "oper_button");
operations1.appendChild(dividButton);
dividButton.innerHTML = "/";
dividButton.addEventListener("click", divid);

const multiplButton = document.createElement("button");
multiplButton.setAttribute("class", "oper_button");
operations1.appendChild(multiplButton);
multiplButton.innerHTML = "x";
multiplButton.addEventListener("click", multiply);

const subtactButton = document.createElement("button");
subtactButton.setAttribute("class", "oper_button");
operations1.appendChild(subtactButton);
subtactButton.innerHTML = "-";
subtactButton.addEventListener("click", subNum);

const sumButton = document.createElement("button");
sumButton.setAttribute("class", "oper_button");
operations1.appendChild(sumButton);
sumButton.innerHTML = "+";
sumButton.addEventListener("click", sumNum);

const equalButton = document.createElement("button");
equalButton.setAttribute("class", "oper_button");
operations1.appendChild(equalButton);
equalButton.innerHTML = "=";
equalButton.addEventListener("click", equal);

function one01() {
  one1 = one.innerHTML;
  scrInput.innerHTML = scrInput.innerHTML + one1;
}
function two02() {
  two2 = two.innerHTML;
  scrInput.innerHTML = scrInput.innerHTML + two2;
}
function three03() {
  three3 = three.innerHTML;
  scrInput.innerHTML = scrInput.innerHTML + three3;
}
function four04() {
  four4 = four.innerHTML;
  scrInput.innerHTML = scrInput.innerHTML + four4;
}
function five05() {
  five5 = five.innerHTML;
  scrInput.innerHTML = scrInput.innerHTML + five5;
}
function six06() {
  six6 = six.innerHTML;
  scrInput.innerHTML = scrInput.innerHTML + six6;
}
function seven07() {
  seven7 = seven.innerHTML;
  scrInput.innerHTML = scrInput.innerHTML + seven7;
}
function eight08() {
  eight8 = eight.innerHTML;
  scrInput.innerHTML = scrInput.innerHTML + eight8;
}
function nine09() {
  nine9 = nine.innerHTML;
  scrInput.innerHTML = scrInput.innerHTML + nine9;
}
function zero00() {
  zer0 = zero.innerHTML;
  scrInput.innerHTML = scrInput.innerHTML + zer0;
}
function dot00() {
  dot0 = dot.innerHTML;
  scrInput.innerHTML = scrInput.innerHTML + dot0;
}
function aclear() {
  scrInput.innerHTML = "";
}
function plsMns() {
  scrInput.innerHTML = Number(scrInput.innerHTML) * -1;
}

function divid() {
  num1 = Number(scrInput.innerHTML);
  scrInput.innerHTML = "";
  localStorage.setItem("num1", num1);
  localStorage.setItem("op", "/");
}
function divide() {
  num2 = Number(scrInput.innerHTML);
  resusltDiv = localStorage.getItem("num1") / num2;
  localStorage.setItem("op", "/");
  return resusltDiv;
}

function multiply() {
  num1 = Number(scrInput.innerHTML);
  scrInput.innerHTML = "";
  localStorage.setItem("num1", num1);
  localStorage.setItem("op", "*");
}
function multiply1() {
  num2 = Number(scrInput.innerHTML);
  resusltMult = localStorage.getItem("num1") * num2;
  return resusltMult;
}

function subNum() {
  num1 = Number(scrInput.innerHTML);
  scrInput.innerHTML = "";
  localStorage.setItem("num1", num1);
}
function subNum1() {
  num2 = Number(scrInput.innerHTML);
  resusltSub = localStorage.getItem("num1") - num2;
  return resusltSub;
}
function sumNum() {
  num1 = Number(scrInput.innerHTML);
  scrInput.innerHTML = "";
  localStorage.setItem("num1", num1);
}
function sumNum1() {
  num2 = Number(scrInput.innerHTML);
  resusltSum = localStorage.getItem("num1") + num2;
  return resusltSum;
}

function equal() {
  num1 = Number(localStorage.getItem("num1"));
  num2 = Number(scrInput.innerHTML);
  let op = localStorage.getItem("op");
  let result = 0;
  switch (op) {
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }
  scrInput.innerHTML = result;
}
