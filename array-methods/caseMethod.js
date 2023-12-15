function changeCase(text) {
  let newtext = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i].toUpperCase()) {
      newtext += text[i].toLowerCase();
    } else {
      newtext += text[i].toUpperCase();
    }
  }

  console.log(newtext);
  return newtext;
}
changeCase("The Quick Brown Fox");
