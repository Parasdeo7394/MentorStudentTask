const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    trim: true,
  },
  email: {
    type: String,
    
    unique: true,
    trim: true,
  },
  mobileNumber: {
    type: String,
    required: false,
    unique: true,
    trim: true,
  },
  studentId: {
    type: String,
    required: false,
    unique: true,
    trim: true,
  },
  
 

 
});

module.exports = mongoose.model("Students", studentSchema);