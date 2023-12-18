function changeColor() {
  document.getElementById("root").style.backgroundColor = "Green";
  for (let i = 0; i < 100; i++) {
    if (document.getElementById("root").style.backgroundColor == "Green") {
      document.getElementById("root").style.backgroundColor = "blueviolet";
    } else {
      document.getElementById("root").style.backgroundColor = "Green";
    }
  }
}
changeColor;
