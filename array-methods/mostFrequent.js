function mostFrequent() {
  var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
  let mostFreq = 0;
  let element;
  for (let i = 0; i < arr1.length; i++) {
    let count = 0;
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[i] == arr1[j]) {
        count++;
      }
      if (count > mostFreq) {
        mostFreq = count;
        element = arr1[i];
      }
    }
  }
  console.log(element, ":", mostFreq);
}
mostFrequent();
