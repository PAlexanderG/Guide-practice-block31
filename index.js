// import the pets array from data.js
const pets = require("./data");

// init express app
const express = require("express");
const app = express();

// Set the server to listen at PORT 8080.
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// GET - / - returns homepage
app.get("/", (req, res) => {
  // serve up the public folder as static index.html file
});

// hello world route
// Create an API route to "/Hello World" that returns a greeting in the browser.
// Typing the API route in the main browser: http://localhost:8080/api.
app.get("/api", (req, res) => {
  res.send("Hello World!");
});

// Create a dynamic API route to "/api/v1/pets" that returns a specific greeting.
// get all pets from the database
// send the pets array as a response

app.get("/api/v1/pets", (req, res) => {
  res.json(pets);
});

// get pet by owner with query string
// Retrieve a single pet from the database by owner's name using a query string.
app.get("/api/v1/pets/owner", (req, res) => {
  const owner = req.query.owner;
  const pet = pets.filter((pet) => pet.owner === owner);
  if (pet) {
    res.send(pet);
  } else {
    res.status(404).json({ message: "not available" });
  }
  res.send(`Hello ${owner}`);
});

// get pet by name
//Create a dynamic API route to "/hello/:name" that returns a specific greeting.
// Using the params:name..
app.get("/api/v1/pets/:name", (req, res) => {
  const name = req.params.name;
  const pet = pets.find((pet) => pet.name === name);
  res.send(pet);
});
// Check in the browser  Exam : http://localhost:8080/api/v1/pets/owner?owner=Jane



// get the owner from the request

// find the pet in the pets array
//   const pet = pets.find((pet) => pet.owner === owner);
//   // send the pet as a response
//   res.send(`${(pet, owner)}`);
// });

// app.listen(PORT, () => {
//   console.log("Server is listening on port " + PORT);
// });

module.exports = app;
