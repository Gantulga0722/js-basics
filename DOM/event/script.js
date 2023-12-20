const root = document.getElementById("root");

const startButton = document.createElement("button");
startButton.setAttribute("class", "st_button");
const head = document.createElement("div");
head.setAttribute("class", "head_div");
startButton.innerText = "Start";
head.appendChild(startButton);

startButton.addEventListener("click", startGame);
root.appendChild(head);

const scoreBox = document.createElement("input");
scoreBox.setAttribute("class", "score_box");
head.appendChild(scoreBox);

const resetButton = document.createElement("button");
resetButton.setAttribute("class", "st_button");
resetButton.innerText = "Restart";
head.appendChild(resetButton);
resetButton.addEventListener("click", restartGame);
const gameField = document.createElement("div");
gameField.setAttribute("class", "game_field");
root.appendChild(gameField);

function startGame() {
  const red = Math.floor(Math.random() * 245) + 10;
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const randumNumber = Math.floor(Math.random() * 10);

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
      newBox.addEventListener("click", scoreAdd);
    }
  }
}
function correctI() {
  const corrImg = document.createElement("img");
  corrImg.setAttribute("class", "correct_img");
  corrImg.src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH6ADnbCGGLHN87atm4kcpRDPh2KAeSJaTfQ&usqp=CAU`;
  newBox.appendChild(corrImg);
  localStorage.setItem("score", scoreAdd);
  score = localStorage.getItem(scoreAdd);
}

function scoreAdd() {
  var score = 0;
  score += 1;
  scoreBox.value = score;
}

function restartGame() {
  gameField.innerHTML = "";
  scoreBox.value = "";
}
