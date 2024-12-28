const express = require("express");
const app = express();
const port = 3000;

const monkeys = [
  {
    id: 1,
    name: "Banana Joe",
    age: 5,
    favoriteFood: "Bananas",
    hobby: "Climbing",
  },
  { id: 2, name: "Coco", age: 3, favoriteFood: "Coconuts", hobby: "Swinging" },
  { id: 3, name: "Mango", age: 4, favoriteFood: "Mangoes", hobby: "Jumping" },
  { id: 4, name: "Peanut", age: 2, favoriteFood: "Peanuts", hobby: "Playing" },
  { id: 5, name: "Choco", age: 6, favoriteFood: "Chocolate", hobby: "Running" },
];

// Lägg till routes här:
// GET /monkeys
app.get("/monkeys", function (req, res) {
  return res.status(200).json(monkeys);
});
// GET /monkeys/:id (Get a specific monkey)
// GET /monkeys/:hobby (Get all monkeyes with a certain hobby)
// POST /monkeys (Create a new monkey)
// PUT /monkeys/:id (Update a monkey)
// DELETE /monkeys/:id (Delete a monkey)
// DELETE /monkeys/:hobby (Delete all monkeys with a certain hobby)
// PATCH /monkeys/:id (Update a monkey)

// Startar servern på port 3000
app.listen(port, function () {
  console.log(`🐵 on port ${port}`);
});
