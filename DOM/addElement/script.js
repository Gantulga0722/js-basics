let root = document.getElementById("root");
function addElement() {
  root.innerHTML += `<div class="add">1</div>`;
}
addElement();
function removeElement() {
  root.innerHTML -= `<div class="add">num1</div>`;
}
removeElement();
