// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
import mongoose from "mongoose";

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Use cors middleware to allow cross-origin requests
// Routes

// Get all items
app.get("/items", (req, res) => {
  res.json(items);
});

// Get single item by id
app.get("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find((item) => item.id === id);
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.json(item);
});

// Create new item
app.post("/items", (req, res) => {
  const newItem = req.body;
  newItem.id = items.length + 1;
  items.push(newItem);
  res.status(201).json(newItem);
});

// Update item by id
app.put("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Item not found" });
  }
  items[index] = { ...items[index], ...updatedItem };
  res.json(items[index]);
});

// Delete item by id
app.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Item not found" });
  }
  items.splice(index, 1);
  res.sendStatus(204);
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
