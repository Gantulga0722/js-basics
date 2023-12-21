const root = document.getElementById("root");

const startButton = document.createElement("button");
startButton.setAttribute("class", "st_button");
const head = document.createElement("div");
head.setAttribute("class", "head_div");
startButton.innerText = "Start";
// head.appendChild(startButton);

startButton.addEventListener("click", startGame);
root.appendChild(head);
const resetButton = document.createElement("button");
resetButton.setAttribute("class", "st_button");
resetButton.innerText = "Start";
head.appendChild(resetButton);
const label = document.createElement("label");
label.innerText = "Score:";
head.appendChild(label);

const scoreBox = document.createElement("input");
scoreBox.setAttribute("class", "score_box");
head.appendChild(scoreBox);

const labelchase = document.createElement("label");
labelchase.innerText = "Chance:";
head.appendChild(labelchase);
const chanseBox = document.createElement("input");
chanseBox.setAttribute("class", "chance_box");
head.appendChild(chanseBox);

resetButton.addEventListener("click", restartGame);
const gameField = document.createElement("div");
gameField.setAttribute("class", "game_field");
root.appendChild(gameField);
let score = 0;
let chance = 3;
function startGame() {
  const red = Math.floor(Math.random() * 245) + 10;
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const randumNumber = Math.floor(Math.random() * 10);
  chanseBox.value = 3;
  for (let i = 0; i < 9; i++) {
    const box = document.createElement("div");
    const diffBox = document.createElement("div");
    diffBox.setAttribute("class", "diff_box");
    const randomColor = `rgb(${red},${green},${blue})`;
    const differentColor = `rgb(${red - 10},${green},${blue})`;
    box.setAttribute("class", "box");
    box.style.backgroundColor = randomColor;

    gameField.appendChild(box);
    gameField.appendChild(diffBox);

    if (randumNumber == i) {
      newBox = box;
      newBox.style.backgroundColor = differentColor;
      newBox.addEventListener("click", correctI);
    } else {
      box.addEventListener("click", chanceSub);
    }
  }
}
function correctI() {
  const corrImg = document.createElement("img");
  corrImg.setAttribute("class", "correct_img");
  corrImg.src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH6ADnbCGGLHN87atm4kcpRDPh2KAeSJaTfQ&usqp=CAU`;
  newBox.appendChild(corrImg);
  score += 1;
  localStorage.setItem("score", score);
  scoreBox.value = score;
  chance = 3;
  chanseBox.value = chance;
  setTimeout(socreAdd, 2000);
}

function chanceSub() {
  chance = chance - 1;
  chanseBox.value = chance;
  localStorage.setItem("score", chance);
  if (chance <= 0) {
    alert("Sorry you Lose");
  } else if (resetButton.addEventListener("click")) {
    chance = 3;
    localStorage.setItem("score", chance);
  }
}

function socreAdd() {
  chanseBox.value = 3;
  gameField.innerHTML = "";
  startGame();
  if (score == 10) {
    alert("Congratulations You WIN");
  }
}
function restartGame() {
  gameField.innerHTML = "";
  scoreBox.value = "";
  chance = 3;
  score = 0;
  startGame();
}
