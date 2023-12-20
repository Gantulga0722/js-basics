const root = document.getElementById("root");
const startButton = document.createElement("button");
startButton.setAttribute("class", "st_button");
const head = document.createElement("div");
head.setAttribute("class", "head_div");
startButton.innerText = "Start";
head.appendChild(startButton);

startButton.addEventListener("click", startGame);
root.appendChild(head);

const resetButton = document.createElement("button");
resetButton.setAttribute("class", "st_button");
resetButton.innerText = "Restart";
head.appendChild(resetButton);
resetButton.addEventListener("click", restartGame);
const gameField = document.createElement("div");
gameField.setAttribute("class", "game_field");
root.appendChild(gameField);
const correntImg = `https://w7.pngwing.com/pngs/404/34/png-transparent-check-mark-computer-icons-correct-miscellaneous-angle-hand-thumbnail.png`;

function startGame() {
  const red = Math.floor(Math.random() * 245) + 10;
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const randumNumber = Math.floor(Math.random() * 10);
  for (let i = 1; i < 10; i++) {
    const box = document.createElement("div");
    const diffBox = document.createElement("div");
    diffBox.setAttribute("class", "diff_box");
    const randomColor = `rgb(${red},${green},${blue})`;
    const differentColor = `rgb(${red - 50},${green},${blue})`;
    box.setAttribute("class", "box");
    box.style.backgroundColor = randomColor;
    diffBox.style.backgroundColor = differentColor;

    gameField.appendChild(box);
    gameField.appendChild(diffBox);

    if (randumNumber == i) {
      box.style.backgroundColor = differentColor;
      box.addEventListener("click", correctI);
    }
  }
}
function correctI() {
  const corrImg = document.createElement("img");
  corrImg.setAttribute("src", correntImg);
  startGame(box).appendChild(corrImg);
}

function restartGame() {
  gameField.innerHTML = "";
}
