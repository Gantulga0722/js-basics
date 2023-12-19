let root = document.getElementById("root");
function addElement() {
  root.innerHTML += `<div class="add">1</div>`;
}

function removeElement() {
  root.innerHTML -= `<div class="add">num1</div>`;
}
