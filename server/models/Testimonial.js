const mongoose = require("mongoose");

const testimonialsSchema = new mongoose.Schema({
  name: String,
  text: String,
});

const Testimonial = mongoose.model("Testimonial", testimonialsSchema);
