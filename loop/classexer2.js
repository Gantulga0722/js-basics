function findAlph() {
  let alphabet = `abcdefghijklmnopqrstuvwxyz`;
  let alphCap = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  let count = 0;
  let countarr = [];
  let swit;
  let sentence = `Many programmers around world extremely recommended pattern problems, to enhance 
    logical thinking capabilities. As a novice programmer you must practice these patterns 
    to get a good hands on logical thinking and program flow control. In this exercise I have compiled 
    a list of Star patterns to practice for beginners and intermediate programmers. I have tried my 
    best to explain the logic of each pattern individually. If you got stuck with some pattern or have 
    some query or suggestion, always feel free to write it down below in the comments section. 
    I always love to hear from you all.`;
  for (let i = 0; i <= alphabet.length; i++) {
    for (let j = 0; j <= sentence.length; j++) {
      if (
        alphabet.charAt(i) == sentence.charAt(j) ||
        alphCap.charAt(i) == sentence.charAt(j)
      ) {
        count++;
      }
    }
    countarr[i] = count;
  }
  console.log(countarr);
}
findAlph();
