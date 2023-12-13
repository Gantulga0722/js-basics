let nums = [1, 2, 3, 4, 5, 6, 7, 56, 564, 456, 34];
nums.sort((a, b) => a - b);
console.log(nums);

const fruits = [
  "Apple",
  "orange",
  "banana",
  "namgo",
  "pine-apple",
  "strawberry",
];
fruits.sort((a, b) => {
  if (a < b) {
    return -1;
  } else {
    return 1;
  }
});
console.log(fruits);