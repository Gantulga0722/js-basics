function insertDash(num) {
  {
    let strArr = num.split("");
    let numArr = strArr.map(Number);
    for (let i = 0; i < numArr.length; i++) {
      if (numArr[i - 1] % 2 === 0 && numArr[i] % 2 === 0) {
        numArr.splice(i, 0, "-");
      }
    }
    return numArr.join("");
  }
}
console.log(insertDash("025468"));
