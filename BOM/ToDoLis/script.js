const root = document.getElementById("root");
let todoArr = [];
let progressArr = [];
let stuckArr = [];
let doneArr = [];

// <Card

const container = document.createElement("div");
container.setAttribute("class", "container");
root.appendChild(container);

const boards = document.createElement("div");
boards.setAttribute("class", "boards");
container.appendChild(boards);

const todoCard = document.createElement("div");
todoCard.setAttribute("class", "board");
boards.appendChild(todoCard);

const todoHead = document.createElement("div");
todoHead.setAttribute("class", "card_head");
todoCard.appendChild(todoHead);

todoHead.innerHTML = "To do" + " " + todoArr.length;
// todoCard.appendChild(todoArr);

const addButton = document.createElement("div");
addButton.setAttribute("class", "add_btn");
todoCard.appendChild(addButton);

const plusIcon = document.createElement("i");
plusIcon.setAttribute("class", "fa-solid fa-plus");
addButton.appendChild(plusIcon);

addButton.innerHTML = plusIcon + "Add card";

// card>
