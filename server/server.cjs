/* eslint-disable no-undef */
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const mongo_url = process.env.MONGO_URL;
console.log(mongo_url);

const testimonialsSchema = new mongoose.Schema({
  name: String,
  text: String,
});

const doctorSchema = new mongoose.Schema({
  name: String,
  specialty: String,
  location: String,
  rating: String,
  phoneNumber: String,
});

const Doctor = mongoose.model("Doctors", doctorSchema);
const Testimonial = mongoose.model("Testimonials", testimonialsSchema);

app.get("/testimonials", async (req, res) => {
  try {
    const items = await Testimonial.find({}).exec();
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/testimonials", async (req, res) => {
  const { name, text } = req.body;
  if (!name || !text) {
    return res.status(400).json({ error: "Name and text are required" });
  }
  try {
    const newItem = new Testimonial({ name, text });
    await newItem.save();
    res.json(newItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/doctors", async (req, res) => {
  try {
    const items = await Doctor.find({}).sort({ createdAt: 1 }).exec();
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/doctors", async (req, res) => {
  const { name, specialty, location, rating, phoneNumber } = req.body;
  if (!name || !specialty || !location || !rating) {
    return res
      .status(400)
      .json({ error: "Name, specialty, location, and rating are required" });
  }
  try {
    const newItem = new Doctor({
      name,
      specialty,
      location,
      rating,
      phoneNumber,
    });
    await newItem.save();
    res.json(newItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

async function dbConnect() {
  await mongoose.connect(mongo_url);
}

const port = process.env.PORT || 4000;
app.listen(port, () => {
  dbConnect();
  console.log(`Server is running on port ${port}`);
});
