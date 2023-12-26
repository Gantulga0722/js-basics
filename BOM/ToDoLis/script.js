const root = document.getElementById("root");
let todoArr = [];
let progressArr = [];
let stuckArr = [];
let doneArr = [];

const container = document.createElement("div");
container.setAttribute("class", "container");
root.appendChild(container);

const boards = document.createElement("div");
boards.setAttribute("class", "boards");
container.appendChild(boards);

// <ToDo Card

const todoCard = document.createElement("div");
todoCard.setAttribute("class", "board");
boards.appendChild(todoCard);

const todoHead = document.createElement("div");
todoHead.setAttribute("class", "card_head");
todoCard.appendChild(todoHead);

const countTodo = document.createElement("span");
countTodo.setAttribute("class", "head_task");
todoHead.appendChild(countTodo);

countTodo.innerText = "To do";

const countTask1 = document.createElement("span");
countTask1.setAttribute("class", "count_task");
todoHead.appendChild(countTask1);

countTask1.innerHTML = todoArr.length;

const addButton = document.createElement("div");
addButton.setAttribute("class", "add_btn");
todoCard.appendChild(addButton);

const addIcon = document.createElement("img");
addIcon.setAttribute(
  "src",
  `https://media.istockphoto.com/id/688550958/vector/black-plus-sign-positive-symbol.jpg?s=612x612&w=0&k=20&c=0tymWBTSEqsnYYXWeWmJPxMotTGUwaGMGs6BMJvr7X4=`
);
addButton.appendChild(addIcon);

const addText = document.createElement("span");
addText.setAttribute("class", "add_text");
addButton.appendChild(addText);
addText.innerHTML = "Add card";

// ToDo Card>

// <In Progress Card

const inProgressCard = document.createElement("div");
inProgressCard.setAttribute("class", "board");
boards.appendChild(inProgressCard);

const progressHead = document.createElement("div");
progressHead.setAttribute("class", "card_head");
inProgressCard.appendChild(progressHead);

const countProgress = document.createElement("span");
countProgress.setAttribute("class", "head_task");
progressHead.appendChild(countProgress);

countProgress.innerHTML = "In Progress";

const countTask2 = document.createElement("span");
countTask2.setAttribute("class", "count_task");
progressHead.appendChild(countTask2);
countTask2.innerHTML = progressArr.length;

const addButton1 = document.createElement("div");
addButton1.setAttribute("class", "add_btn");
inProgressCard.appendChild(addButton1);

const addIcon1 = document.createElement("img");
addIcon1.setAttribute(
  "src",
  `https://media.istockphoto.com/id/688550958/vector/black-plus-sign-positive-symbol.jpg?s=612x612&w=0&k=20&c=0tymWBTSEqsnYYXWeWmJPxMotTGUwaGMGs6BMJvr7X4=`
);
addButton1.appendChild(addIcon1);

const addText1 = document.createElement("span");
addText1.setAttribute("class", "add_text");
addButton1.appendChild(addText1);
addText1.innerHTML = "Add card";

// In Progress Card>

// <Stuck Card

const stuckCard = document.createElement("div");
stuckCard.setAttribute("class", "board");
boards.appendChild(stuckCard);

const stuckHead = document.createElement("div");
stuckHead.setAttribute("class", "card_head");
stuckCard.appendChild(stuckHead);

const countStuck = document.createElement("span");
countStuck.setAttribute("class", "head_task");
stuckHead.appendChild(countStuck);

countStuck.innerHTML = "Stuck";

const countTask3 = document.createElement("span");
countTask3.setAttribute("class", "count_task");
stuckHead.appendChild(countTask3);
countTask3.innerHTML = stuckArr.length;

const addButton2 = document.createElement("div");
addButton2.setAttribute("class", "add_btn");
stuckCard.appendChild(addButton2);

const addIcon2 = document.createElement("img");
addIcon2.setAttribute(
  "src",
  `https://media.istockphoto.com/id/688550958/vector/black-plus-sign-positive-symbol.jpg?s=612x612&w=0&k=20&c=0tymWBTSEqsnYYXWeWmJPxMotTGUwaGMGs6BMJvr7X4=`
);
addButton2.appendChild(addIcon2);

const addText2 = document.createElement("span");
addText2.setAttribute("class", "add_text");
addButton2.appendChild(addText2);
addText2.innerHTML = "Add card";

// Stuck Card>

// <Done Card

const doneCard = document.createElement("div");
doneCard.setAttribute("class", "board");
boards.appendChild(doneCard);

const doneHead = document.createElement("div");
doneHead.setAttribute("class", "card_head");
doneCard.appendChild(doneHead);

const countDone = document.createElement("span");
countDone.setAttribute("class", "head_task");
doneHead.appendChild(countDone);

countDone.innerHTML = "Done";

const countTask4 = document.createElement("span");
countTask4.setAttribute("class", "count_task");
doneHead.appendChild(countTask4);
countTask4.innerHTML = doneArr.length;

const addButton3 = document.createElement("div");
addButton3.setAttribute("class", "add_btn");
doneCard.appendChild(addButton3);

const addIcon3 = document.createElement("img");
addIcon3.setAttribute(
  "src",
  `https://media.istockphoto.com/id/688550958/vector/black-plus-sign-positive-symbol.jpg?s=612x612&w=0&k=20&c=0tymWBTSEqsnYYXWeWmJPxMotTGUwaGMGs6BMJvr7X4=`
);
addButton3.appendChild(addIcon3);

const addText3 = document.createElement("span");
addText2.setAttribute("class", "add_text");
addButton3.appendChild(addText3);
addText3.innerHTML = "Add card";

// Done Card>
