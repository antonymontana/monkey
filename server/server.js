const express = require("express");
const app = express();
const port = 3000;

const monkeys = [
  { name: "Banana Joe", age: 5, favoriteFood: "Bananas", hobby: "Climbing" },
  { name: "Coco", age: 3, favoriteFood: "Coconuts", hobby: "Swinging" },
  { name: "Mango", age: 4, favoriteFood: "Mangoes", hobby: "Jumping" },
  { name: "Peanut", age: 2, favoriteFood: "Peanuts", hobby: "Playing" },
  { name: "Choco", age: 6, favoriteFood: "Chocolate", hobby: "Running" },
];

app.get("/", function (req, res) {
  res.status(200).json(monkeys);
});

app.listen(port, function () {
  console.log(`🐵 on port ${port}`);
});
