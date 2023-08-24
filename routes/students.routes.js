const express = require("express");




const {helloWorld,
  getAllStudents,
  addStudent,
  getStudentById,
  updateStudent,
  deleteStudentById,
  deleteAllStudents
}= require("../controllers/students.controllers")

const router = express.Router();

router.get("/", helloWorld);

router.get("/students", getAllStudents);

router.post("/students", addStudent);

router.get("/students/:studentId", getStudentById);

router.put("/students/:studentId", updateStudent);

router.delete("/students/:studentId", deleteStudentById);

router.delete("/students", deleteAllStudents);

module.exports = router;