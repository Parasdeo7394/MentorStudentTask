const express = require("express");





const {helloWorld,
  getAllMentors,
  addMentor,
  getMentorById,
  updateMentor,
  deleteMentorById,
  deleteAllMentors
}=require("../controllers/mentors.controllers")

const router = express.Router();

router.get("/", helloWorld);

router.get("/mentors", getAllMentors);

router.post("/mentors", addMentor);

router.get("/mentors/:mentorId", getMentorById);

router.put("/mentors/:mentorId", updateMentor);

router.delete("/mentors/:mentorId", deleteMentorById);

router.delete("/mentors", deleteAllMentors);

module.exports = router;