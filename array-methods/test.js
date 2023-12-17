var person = [
  {
    name: "John",
    age: 30,
    city: "New York",
  },
  {
    name: "Bosh",
    age: 40,
    city: "Houston",
  },
  {
    name: "Micheal",
    age: 34,
    city: "Washington",
  },
  {
    name: "Tom",
    age: 34,
    city: "Los Angels",
  },
];

for (var x in person) {
  console.log("Person" + ": " + x);
  for (var y in person[x]) {
    console.log(" " + person[x][y]);
  }
}
