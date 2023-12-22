function drawButtons() {
  // draw calculator
  // every button has addeventlistner
  // numbers are classified as nums
}

for (let i = 0; i < 10; i++) {
  const newDiv = document.createElement("div");
  newDiv.style.width = "300px";
  newDiv.style.height = "300px";
  newDiv.style.backgroundColor = "aqua";
  newDiv.style.margin = "5px";
  newDiv.innerHTML = i;
  newDiv.addEventListener("click", onClickNumber);
  document.getElementById("root").appendChild(newDiv);
}

function onClickNumber(event) {
  console.log(event.target.innerHTML);
}
