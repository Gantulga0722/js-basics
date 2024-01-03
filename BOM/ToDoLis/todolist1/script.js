let tasksArr = [
  {
    title: "Task1",
    description: "task1",
    priority: "high",
    status: "To Do",
    id: 1,
  },
  {
    title: "Task2",
    description: "task2",
    priority: "low",
    status: "In Progress",
    id: 2,
  },
  {
    title: "Task3",
    description: "task3",
    priority: "medium",
    status: "Stuck",
    id: 3,
  },
  {
    title: "Task4",
    description: "task4",
    priority: "low",
    status: "Done",
    id: 4,
  },
  {
    title: "Task5",
    description: "task1",
    priority: "high",
    status: "To Do",
    id: 5,
  },
  {
    title: "Task6",
    description: "task2",
    priority: "low",
    status: "In Progress",
    id: 6,
  },
  {
    title: "Task7",
    description: "task3",
    priority: "medium",
    status: "Stuck",
    id: 7,
  },
  {
    title: "Task8",
    description: "task4",
    priority: "low",
    status: "Done",
    id: 8,
  },
  {
    title: "Task9",
    description: "task1",
    priority: "high",
    status: "To Do",
    id: 9,
  },
  {
    title: "Task10",
    description: "task2",
    priority: "low",
    status: "In Progress",
    id: 10,
  },
  {
    title: "Task11",
    description: "task3",
    priority: "medium",
    status: "Stuck",
    id: 11,
  },
  {
    title: "Task12",
    description: "task4",
    priority: "low",
    status: "Done",
    id: 12,
  },
  {
    title: "Task13",
    description: "task1",
    priority: "high",
    status: "To Do",
    id: 13,
  },
  {
    title: "Task14",
    description: "task2",
    priority: "low",
    status: "In Progress",
    id: 14,
  },
  {
    title: "Task15",
    description: "task3",
    priority: "medium",
    status: "Stuck",
    id: 15,
  },
  {
    title: "Task16",
    description: "task4",
    priority: "low",
    status: "Done",
    id: 16,
  },
];

const root = document.getElementById("root");

const container = document.createElement("div");
container.setAttribute("class", "container");
root.appendChild(container);

function renderTasks(list) {
  container.innerHTML = "";
  const taskTodo = list.filter((todo) => {
    return todo.status == "To Do";
  });
  const todoStatusDiv = document.createElement("div");
  todoStatusDiv.setAttribute("class", "status_column");

  const statusHead = document.createElement("div");
  statusHead.setAttribute("class", "status_head");
  statusHead.innerHTML = "To Do";
  todoStatusDiv.appendChild(statusHead);

  const heatCount = document.createElement("span");
  heatCount.innerHTML = taskTodo.length;
  statusHead.appendChild(heatCount);

  taskTodo.map((task) => {
    const newTask = createTask(task);

    todoStatusDiv.appendChild(newTask);
    container.appendChild(todoStatusDiv);
  });

  const addCardButton = addCard();
  todoStatusDiv.appendChild(addCardButton);

  const taskInProgress = list.filter((todo) => {
    return todo.status == "In Progress";
  });
  const InProgressStatusDiv = document.createElement("div");
  InProgressStatusDiv.setAttribute("class", "status_column");

  const statusHeadP = document.createElement("div");
  statusHeadP.setAttribute("class", "status_head");
  statusHeadP.innerHTML = "In Progress";
  InProgressStatusDiv.appendChild(statusHeadP);

  const heatCountP = document.createElement("span");
  heatCountP.innerHTML = taskTodo.length;
  statusHeadP.appendChild(heatCountP);

  taskInProgress.map((task) => {
    const newTask = createTask(task);

    InProgressStatusDiv.appendChild(newTask);
    container.appendChild(InProgressStatusDiv);
  });

  const addCardButton1 = addCard();
  InProgressStatusDiv.appendChild(addCardButton1);

  const taskStuck = list.filter((todo) => {
    return todo.status == "Stuck";
  });
  const stuckStatusDiv = document.createElement("div");
  stuckStatusDiv.setAttribute("class", "status_column");

  const statusHeadS = document.createElement("div");
  statusHeadS.setAttribute("class", "status_head");
  statusHeadS.innerHTML = "Stuck";
  stuckStatusDiv.appendChild(statusHeadS);

  const heatCountS = document.createElement("span");
  heatCountS.innerHTML = taskTodo.length;
  statusHeadS.appendChild(heatCountS);

  taskStuck.map((task) => {
    const newTask = createTask(task);

    stuckStatusDiv.appendChild(newTask);
    container.appendChild(stuckStatusDiv);
  });

  const addCardButton2 = addCard();
  stuckStatusDiv.appendChild(addCardButton2);

  const taskDone = list.filter((todo) => {
    return todo.status == "Done";
  });
  const doneStatusDiv = document.createElement("div");
  doneStatusDiv.setAttribute("class", "status_column");

  const statusHeadD = document.createElement("div");
  statusHeadD.setAttribute("class", "status_head");
  statusHeadD.innerHTML = "Done";
  doneStatusDiv.appendChild(statusHeadD);

  const heatCountD = document.createElement("span");
  heatCountD.innerHTML = taskTodo.length;
  statusHeadD.appendChild(heatCountD);

  taskDone.map((task) => {
    const newTask = createTask(task);

    doneStatusDiv.appendChild(newTask);
    container.appendChild(doneStatusDiv);
  });

  const addCardButton3 = addCard();
  doneStatusDiv.appendChild(addCardButton3);
}

function addCard() {
  const addCardBtn = document.createElement("div");
  addCardBtn.setAttribute("class", "add_card");
  const addBtnIcon = document.createElement("img");

  addBtnIcon.setAttribute(
    "src",
    `https://media.istockphoto.com/id/688550958/vector/black-plus-sign-positive-symbol.jpg?s=612x612&w=0&k=20&c=0tymWBTSEqsnYYXWeWmJPxMotTGUwaGMGs6BMJvr7X4=`
  );

  const addText = document.createElement("div");
  addText.innerHTML = "Add card";

  addCardBtn.appendChild(addBtnIcon);
  addCardBtn.appendChild(addText);
  return addCardBtn;
}

function createTask(task) {
  const taskCard = document.createElement("div");
  const todoTitle = document.createElement("h1");
  const todoDescription = document.createElement("span");
  const todoPriority = document.createElement("div");
  const doneBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");

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

  taskCard.setAttribute("class", "task_card");
  taskCard.appendChild(todoTitle);
  taskCard.appendChild(todoDescription);
  taskCard.appendChild(todoPriority);
  taskCard.appendChild(doneBtn);
  taskCard.appendChild(deleteBtn);
  taskCard.appendChild(editBtn);

  return taskCard;
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

function deleteTask(id) {
  console.log(id);
  tasksArr = tasksArr.filter((task) => {
    return task.id != id;
  });
  console.log(tasksArr);
  renderTasks(tasksArr);
}

function editTask(id) {
  tasksArr = tasksArr.map((task) => {
    if (task.id == id) {
      return {
        ...task,
        title: "New Title",
      };
    } else {
      return task;
    }
  });
  renderTasks(tasksArr);
}

renderTasks(tasksArr);
