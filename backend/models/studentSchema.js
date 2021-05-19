const mongoose = require("mongoose");

var studentSchema = new mongoose.Schema({
  rollno: {
    type: Number,
    required: "roll no cannot be empty",
    unique: true,
  },
  name: {
    type: String,
    required: "name cannot be empty",
  },
  math: {
    type: Number,
  },
  physics: {
    type: Number,
  },
  chemistry: {
    type: Number,
  },
  total: {
    type: Number,
  },
  percentage: {
    type: Number,
  },
});

const Student = mongoose.model("students_mark", studentSchema);
module.exports = Student;
