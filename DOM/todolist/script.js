const root = document.getElementById("root");

const header = document.createElement("header");
root.appendChild(header);

const headerHeading = document.createElement("h1");
header.appendChild(headerHeading);
headerHeading.innerText = "To-Do List";

const container = document.createElement("div");
container.setAttribute("class", "input_container");
root.appendChild(container);

const heading = document.createElement("h1");
container.appendChild(heading);
heading.innerText = "To-Do List";

const tasks = document.createElement("div");
tasks.setAttribute("class", "tasks");
container.appendChild(tasks);

const taskInput = document.createElement("input");
taskInput.setAttribute("class", "task_input");
taskInput.setAttribute("placeholder", "Enter task here...");
tasks.appendChild(taskInput);

const addTaskButton = document.createElement("button");
addTaskButton.setAttribute("class", "addTask_btn");
tasks.appendChild(addTaskButton);
addTaskButton.innerText = "Add Task";
addTaskButton.addEventListener("click", addTask);

const tasksContainer = document.createElement("div");
tasksContainer.setAttribute("class", "task_container");
root.appendChild(tasksContainer);

let arr = [];

function addTask() {
  localStorage.setItem("task", taskInput.value);
  arr[arr.length] = taskInput.value;
  taskInput.value = "";
  tasksContainer.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const taskDiv = document.createElement("div");
    taskDiv.setAttribute("class", "added_task");
    tasksContainer.appendChild(taskDiv);

    const checkAndLabel = document.createElement("div");
    checkAndLabel.setAttribute("class", "check_label");
    taskDiv.appendChild(checkAndLabel);

    const taskCheckbox = document.createElement("input");
    taskCheckbox.select("class", "task_checkbox");
    taskCheckbox.setAttribute("type", "checkbox");
    taskCheckbox.setAttribute("id", "checkboxId");
    checkAndLabel.appendChild(taskCheckbox);
    taskCheckbox.addEventListener("click", doneTask);

    const formLabel = document.createElement("form");
    formLabel.setAttribute("action", "");
    checkAndLabel.appendChild(formLabel);

    const taskLabel = document.createElement("input");
    taskLabel.setAttribute("class", "task_label");
    taskLabel.setAttribute("type", "text");
    taskLabel.setAttribute("disabled", "disbaled");
    formLabel.appendChild(taskLabel);
    taskLabel.value = arr[i];

    const addedTaskBtns = document.createElement("div");
    addedTaskBtns.setAttribute("class", "addedTask_btns");
    taskDiv.appendChild(addedTaskBtns);

    const editButton = document.createElement("label");
    editButton.setAttribute("class", "task_buttons");
    editButton.setAttribute("for", "checkCH");
    editButton.innerText = "Edit";
    addedTaskBtns.appendChild(editButton);
    editButton.addEventListener("click", editTask);
    const CheckboxLabel = document.createElement("input");

    CheckboxLabel.setAttribute("type", "checkbox");
    CheckboxLabel.setAttribute("id", "checkCH");
    CheckboxLabel.style.display = "none";
    addedTaskBtns.appendChild(CheckboxLabel);

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "task_buttons");
    deleteButton.innerText = "Delete";
    addedTaskBtns.appendChild(deleteButton);
    deleteButton.addEventListener("click", deleteTask);

    function editTask() {
      if (CheckboxLabel.checked) {
        taskLabel.disabled = true;
      } else {
        taskLabel.disabled = false;
      }
    }

    function doneTask() {
      if (taskCheckbox.checked) {
        taskLabel.style.color = "green";
      } else {
        taskLabel.style.color = "black";
      }
    }

    function deleteTask() {
      arr.splice(i, 1);
      console.log(arr);
      updateArr();
    }
  }
}

function updateArr() {
  tasksContainer.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    const taskDiv = document.createElement("div");
    taskDiv.setAttribute("class", "added_task");
    tasksContainer.appendChild(taskDiv);

    const checkAndLabel = document.createElement("div");
    checkAndLabel.setAttribute("class", "check_label");
    taskDiv.appendChild(checkAndLabel);

    const taskCheckbox = document.createElement("input");
    taskCheckbox.select("class", "task_checkbox");
    taskCheckbox.setAttribute("type", "checkbox");
    taskCheckbox.setAttribute("id", "checkboxId");
    checkAndLabel.appendChild(taskCheckbox);
    taskCheckbox.addEventListener("click", doneTask);

    const formLabel = document.createElement("form");
    formLabel.setAttribute("action", "");
    checkAndLabel.appendChild(formLabel);

    const taskLabel = document.createElement("input");
    taskLabel.setAttribute("class", "task_label");
    taskLabel.setAttribute("id", "task_label");
    taskLabel.setAttribute("type", "text");
    taskLabel.setAttribute("disabled", "disbaled");
    formLabel.appendChild(taskLabel);
    taskLabel.value = arr[i];

    const addedTaskBtns = document.createElement("div");
    addedTaskBtns.setAttribute("class", "addedTask_btns");
    taskDiv.appendChild(addedTaskBtns);

    const editButton = document.createElement("label");
    editButton.setAttribute("class", "task_buttons");
    editButton.setAttribute("for", "checkCH");
    editButton.innerText = "Edit";
    addedTaskBtns.appendChild(editButton);
    editButton.addEventListener("click", editTask);
    const CheckboxLabel = document.createElement("input");

    CheckboxLabel.setAttribute("type", "checkbox");
    CheckboxLabel.setAttribute("id", "checkCH");
    CheckboxLabel.style.display = "none";
    addedTaskBtns.appendChild(CheckboxLabel);

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "task_buttons");
    deleteButton.innerText = "Delete";
    addedTaskBtns.appendChild(deleteButton);
    deleteButton.addEventListener("click", deleteTask);

    function editTask() {
      if (CheckboxLabel.checked) {
        taskLabel.disabled = true;
      } else {
        taskLabel.disabled = false;
      }
    }

    function doneTask() {
      if (taskCheckbox.checked) {
        taskLabel.style.color = "green";
      } else {
        taskLabel.style.color = "black";
      }
    }

    function deleteTask() {
      arr.splice(i, 1);
      console.log(arr);
      updateArr();
    }
  }
}
