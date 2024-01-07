let tasksArr = [];

// Main content

const root = document.getElementById("root");

const container = document.createElement("div");
const todoColumn = document.createElement("div");
const inProgressColumn = document.createElement("div");
const stuckColumn = document.createElement("div");
const doneColumn = document.createElement("div");
const addCardDiv = document.createElement("div");

container.setAttribute("class", "container");
todoColumn.setAttribute("class", "status_column");
inProgressColumn.setAttribute("class", "status_column");
stuckColumn.setAttribute("class", "status_column");
doneColumn.setAttribute("class", "status_column");

root.appendChild(container);
root.appendChild(addCardDiv);
container.appendChild(todoColumn);
container.appendChild(inProgressColumn);
container.appendChild(stuckColumn);
container.appendChild(doneColumn);

//

// To do Column body

const todoHead = document.createElement("div");
const todoBody = document.createElement("div");
const todoBottom = document.createElement("div");
const todoheadSpan = document.createElement("span");
const todobottomImg = document.createElement("img");
const todobottomDiv = document.createElement("div");

todoHead.setAttribute("class", "column_head");
todoHead.setAttribute("id", "column_head1");
todoheadSpan.setAttribute("id", "count1");
todoBody.setAttribute("class", "column_body");
todoBottom.setAttribute("class", "column_bottom");
todobottomImg.setAttribute(
  "src",
  `https://media.istockphoto.com/id/688550958/vector/black-plus-sign-positive-symbol.jpg?s=612x612&w=0&k=20&c=0tymWBTSEqsnYYXWeWmJPxMotTGUwaGMGs6BMJvr7X4=`
);

todobottomDiv.innerHTML = "Add Card";
todoHead.innerHTML = "To Do";
todoheadSpan.innerHTML = "";

todoBottom.appendChild(todobottomImg);
todoBottom.appendChild(todobottomDiv);

todoColumn.appendChild(todoHead);
todoColumn.appendChild(todoBody);
todoColumn.appendChild(todoBottom);

todoBottom.addEventListener("click", showAddTask);

//

// In Progress Column body

const inProgressHead = document.createElement("div");
const inProgressBody = document.createElement("div");
const inProgressBottom = document.createElement("div");
const inProgressheadSpan = document.createElement("span");
const inProgressbottomImg = document.createElement("img");
const inProgressbottomDiv = document.createElement("div");

inProgressHead.setAttribute("class", "column_head");
inProgressHead.setAttribute("id", "column_head2");
inProgressheadSpan.setAttribute("id", "count2");
inProgressBody.setAttribute("class", "column_body");
inProgressBottom.setAttribute("class", "column_bottom");
inProgressbottomImg.setAttribute(
  "src",
  `https://media.istockphoto.com/id/688550958/vector/black-plus-sign-positive-symbol.jpg?s=612x612&w=0&k=20&c=0tymWBTSEqsnYYXWeWmJPxMotTGUwaGMGs6BMJvr7X4=`
);

inProgressbottomDiv.innerHTML = "Add Card";
inProgressHead.innerHTML = "In Progress";
inProgressheadSpan.innerHTML = "";

inProgressBottom.appendChild(inProgressbottomImg);
inProgressBottom.appendChild(inProgressbottomDiv);

inProgressColumn.appendChild(inProgressHead);
inProgressColumn.appendChild(inProgressBody);
inProgressColumn.appendChild(inProgressBottom);

inProgressBottom.addEventListener("click", showAddTask);

//

// Stuck Column body

const stuckHead = document.createElement("div");
const stuckBody = document.createElement("div");
const stuckBottom = document.createElement("div");
const stuckheadSpan = document.createElement("span");
const stuckbottomImg = document.createElement("img");
const stuckbottomDiv = document.createElement("div");

stuckHead.setAttribute("class", "column_head");
stuckHead.setAttribute("id", "column_head3");
stuckheadSpan.setAttribute("id", "count3");
stuckBody.setAttribute("class", "column_body");
stuckBottom.setAttribute("class", "column_bottom");
stuckbottomImg.setAttribute(
  "src",
  `https://media.istockphoto.com/id/688550958/vector/black-plus-sign-positive-symbol.jpg?s=612x612&w=0&k=20&c=0tymWBTSEqsnYYXWeWmJPxMotTGUwaGMGs6BMJvr7X4=`
);

stuckbottomDiv.innerHTML = "Add Card";
stuckHead.innerHTML = "Stuck";
stuckheadSpan.innerHTML = "";

stuckBottom.appendChild(stuckbottomImg);
stuckBottom.appendChild(stuckbottomDiv);

stuckColumn.appendChild(stuckHead);
stuckColumn.appendChild(stuckBody);
stuckColumn.appendChild(stuckBottom);

stuckBottom.addEventListener("click", showAddTask);

//

// Done Column body

const doneHead = document.createElement("div");
const doneBody = document.createElement("div");
const doneBottom = document.createElement("div");
const doneheadSpan = document.createElement("span");
const donebottomImg = document.createElement("img");
const donebottomDiv = document.createElement("div");

doneHead.setAttribute("class", "column_head");
doneHead.setAttribute("id", "column_head4");
doneheadSpan.setAttribute("id", "count4");
doneBody.setAttribute("class", "column_body");
doneBottom.setAttribute("class", "column_bottom");
donebottomImg.setAttribute(
  "src",
  `https://media.istockphoto.com/id/688550958/vector/black-plus-sign-positive-symbol.jpg?s=612x612&w=0&k=20&c=0tymWBTSEqsnYYXWeWmJPxMotTGUwaGMGs6BMJvr7X4=`
);

donebottomDiv.innerHTML = "Add Card";
doneHead.innerHTML = "Done";
doneheadSpan.innerHTML = "";

doneBottom.appendChild(donebottomImg);
doneBottom.appendChild(donebottomDiv);

doneColumn.appendChild(doneHead);
doneColumn.appendChild(doneBody);
doneColumn.appendChild(doneBottom);

doneBottom.addEventListener("click", showAddTask);

//

function renderTasks(list) {
  //

  const taskTodo = list.filter((todo) => {
    return todo.status == "To Do";
  });
  todoBody.innerHTML = "";
  taskTodo.map((task) => {
    const newTask = createTask(task);
    todoBody.appendChild(newTask);
  });

  //

  //
  const taskInProgress = list.filter((todo) => {
    return todo.status == "In Progress";
  });
  inProgressBody.innerHTML = "";
  taskInProgress.map((task) => {
    const newTask = createTask(task);
    inProgressBody.appendChild(newTask);
  });

  //

  //
  const taskStuck = list.filter((todo) => {
    return todo.status == "Stuck";
  });
  stuckBody.innerHTML = "";
  taskStuck.map((task) => {
    const newTask = createTask(task);
    stuckBody.appendChild(newTask);
  });

  //

  //
  const taskDone = list.filter((todo) => {
    return todo.status == "Done";
  });
  doneBody.innerHTML = "";
  taskDone.map((task) => {
    const newTask = createTask(task);
    doneBody.appendChild(newTask);
  });
  //
}

function createTask(task) {
  const taskCard = document.createElement("div");
  const leftDiv = document.createElement("div");
  const midleDiv = document.createElement("div");
  const rightDiv = document.createElement("div");

  const todoTitle = document.createElement("h1");
  const todoDescription = document.createElement("span");
  const todoPriority = document.createElement("div");

  const doneBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");

  taskCard.setAttribute("class", "task_card");
  leftDiv.setAttribute("class", "left");
  midleDiv.setAttribute("class", "midle");
  rightDiv.setAttribute("class", "right");
  todoPriority.setAttribute("class", "task_priority");

  taskCard.appendChild(leftDiv);
  taskCard.appendChild(midleDiv);
  taskCard.appendChild(rightDiv);

  leftDiv.appendChild(doneBtn);
  midleDiv.appendChild(todoTitle);
  midleDiv.appendChild(todoDescription);
  midleDiv.appendChild(todoPriority);
  rightDiv.appendChild(deleteBtn);
  rightDiv.appendChild(editBtn);

  doneBtn.setAttribute("id", `${task.id}`);
  doneBtn.innerText = "D";

  doneBtn.addEventListener("click", (doneOper) => {
    toDoneask(doneOper.target.id);
  });

  deleteBtn.setAttribute("id", `${task.id}`);
  deleteBtn.innerText = "X";

  deleteBtn.addEventListener("click", (event) => {
    deleteTask(event.target.id);
  });

  editBtn.setAttribute("id", `${task.id}`);
  editBtn.innerText = "E";

  editBtn.addEventListener("click", (editOper) => {
    editTask(editOper.target.id);
  });

  todoTitle.innerText = task.title;
  todoDescription.innerText = task.description;
  todoPriority.innerHTML = task.priority;

  return taskCard;
}

function showAddTask() {
  // Add Task card

  const backDropActive = document.createElement("div");
  backDropActive.setAttribute("id", "backDropActive");
  backDropActive.setAttribute("class", "backdrop_active");
  addCardDiv.appendChild(backDropActive);
  // backDropActive.addEventListener("click", outSideClick);

  const showAdd = document.createElement("div");
  showAdd.setAttribute("class", "show_addTask");
  backDropActive.appendChild(showAdd);

  const addTaskCard = document.createElement("form");
  showAdd.appendChild(addTaskCard);

  const headAddTask = document.createElement("h1");
  addTaskCard.appendChild(headAddTask);
  headAddTask.innerHTML = "Add Task";

  // <Title

  const titleDiv = document.createElement("div");
  titleDiv.setAttribute("class", "title_div");
  addTaskCard.appendChild(titleDiv);

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("class", "title_label");
  titleDiv.appendChild(titleLabel);
  titleLabel.innerText = "Title";

  const titleInput = document.createElement("input");
  titleInput.setAttribute("id", "titleInput");
  titleInput.setAttribute("class", "title_input");
  titleDiv.appendChild(titleInput);

  const messFill = document.createElement("span");
  messFill.setAttribute("id", "messFill");
  messFill.setAttribute("class", "message");
  titleDiv.appendChild(messFill);
  messFill.innerText = "Заавал утга оруулна уу!!!";

  // Title>

  // <Description

  const deskDiv = document.createElement("div");
  deskDiv.setAttribute("class", "desk_div");
  addTaskCard.appendChild(deskDiv);

  const deskLabel = document.createElement("label");
  deskLabel.setAttribute("class", "desk_label");
  deskDiv.appendChild(deskLabel);
  deskLabel.innerText = "Description";

  const deskInput = document.createElement("textarea");
  deskInput.setAttribute("class", "desk_input");
  deskInput.setAttribute("id", "deskInput");
  deskInput.setAttribute("rows", "5");
  deskInput.setAttribute("cols", "70");
  deskDiv.appendChild(deskInput);

  const messFill1 = document.createElement("span");
  messFill1.setAttribute("id", "messFill1");
  messFill1.setAttribute("class", "message");
  deskDiv.appendChild(messFill1);
  messFill1.innerText = "Заавал утга оруулна уу!!!";

  // Desctiption>

  // <Status

  const statusDiv = document.createElement("div");
  statusDiv.setAttribute("class", "status_div");
  addTaskCard.appendChild(statusDiv);

  const statusLabel = document.createElement("label");
  statusLabel.setAttribute("class", "status_label");
  statusDiv.appendChild(statusLabel);
  statusLabel.innerText = "Status";

  const statusInput = document.createElement("select");
  statusInput.setAttribute("id", "statusInput");
  statusInput.setAttribute("class", "status_input");
  statusDiv.appendChild(statusInput);

  const statusOption1 = document.createElement("option");
  statusOption1.setAttribute("value", "To Do");
  statusOption1.innerHTML = "To do";
  statusInput.appendChild(statusOption1);

  const statusOption2 = document.createElement("option");
  statusOption2.setAttribute("value", "In Progress");
  statusOption2.innerHTML = "In progress";
  statusInput.appendChild(statusOption2);

  const statusOption3 = document.createElement("option");
  statusOption3.setAttribute("value", "Stuck");
  statusOption3.innerHTML = "Stuck";
  statusInput.appendChild(statusOption3);

  const statusOption4 = document.createElement("option");
  statusOption4.setAttribute("value", "Done");
  statusOption4.innerHTML = "Done";
  statusInput.appendChild(statusOption4);

  const messFill2 = document.createElement("span");
  messFill2.setAttribute("class", "message");
  statusDiv.appendChild(messFill2);

  // Status>

  // <Priority

  const proiDiv = document.createElement("div");
  proiDiv.setAttribute("class", "prio_div");
  addTaskCard.appendChild(proiDiv);

  const proiLabel = document.createElement("label");
  proiLabel.setAttribute("class", "prio_label");
  proiDiv.appendChild(proiLabel);
  proiLabel.innerText = "Priority";

  const proiInput = document.createElement("select");
  proiInput.setAttribute("id", "proiInput");
  proiInput.setAttribute("class", "prio_input");
  proiDiv.appendChild(proiInput);

  const priorityOption1 = document.createElement("option");
  priorityOption1.setAttribute("value", "low");
  priorityOption1.innerHTML = "Low";
  proiInput.appendChild(priorityOption1);

  const priorityOption2 = document.createElement("option");
  priorityOption2.setAttribute("value", "Medium");
  priorityOption2.innerHTML = "Medium";
  proiInput.appendChild(priorityOption2);

  const priorityOption3 = document.createElement("option");
  priorityOption3.setAttribute("value", "high");
  priorityOption3.innerHTML = "High";
  proiInput.appendChild(priorityOption3);

  const messFill3 = document.createElement("span");
  messFill3.setAttribute("class", "message");
  proiDiv.appendChild(messFill3);

  // Priority>

  // <Add task button

  const addTaskButton = document.createElement("input");
  addTaskButton.setAttribute("type", "button");
  addTaskButton.setAttribute("class", "addTask_btn");
  addTaskButton.setAttribute("id", "addTask_btn");
  addTaskButton.value = "Add Task";
  addTaskCard.appendChild(addTaskButton);
  addTaskButton.addEventListener("click", pushtask);

  // Add task button>

  // backDropActive.style.display = "flex";
}

function pushtask() {
  let titleValue = document.getElementById("titleInput").value;
  let descValue = document.getElementById("deskInput").value;
  let statusValue = document.getElementById("statusInput").value;
  let prioValue = document.getElementById("proiInput").value;
  let messFill = document.getElementById("messFill");
  let messFill1 = document.getElementById("messFill1");
  if (titleValue != "" && descValue != "") {
    tasksArr.push({
      title: titleValue,
      description: descValue,
      status: statusValue,
      priority: prioValue,
      id: Math.floor(Math.random() * 100000),
    });
    addCardDiv.innerHTML = "";
    renderTasks(tasksArr);
  } else {
    messFill.style.display = "flex";
    messFill1.style.display = "flex";
  }
}

function deleteTask(id) {
  console.log(id);
  tasksArr = tasksArr.filter((task) => {
    return task.id != id;
  });
  console.log(tasksArr);
  renderTasks(tasksArr);
}

function toDoneask(id) {
  tasksArr = tasksArr.map((task) => {
    if (task.id == id) {
      return {
        ...task,
        status: "Done",
      };
    } else {
      return task;
    }
  });
  renderTasks(tasksArr);
}

function editTask(id) {
  tasksArr = tasksArr.map((task) => {
    if (task.id == id) {
      showAddTask();
    } else {
      return task;
    }
  });
}
