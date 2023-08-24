const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
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
  mentorId: {
    type: String,
    required: false,
    unique: true,
    trim: true,
  },
  

 
});

module.exports = mongoose.model("Mentors", mentorSchema);