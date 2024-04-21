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

async function dbConnect() {
  await mongoose.connect(mongo_url);
}

const port = process.env.PORT || 4000;
app.listen(port, () => {
  dbConnect();
  console.log(`Server is running on port ${port}`);
});
