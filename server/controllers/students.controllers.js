const Students = require("../models/student.model");
const mongoose = require("mongoose");

exports.helloWorld = (req, res) => {
  console.log("USERNAME: ", process.env.USERNAME);
  console.log("PASSWORD: ", process.env.PASSWORD);
  res.send({
    message: "hello world",
  });
};

exports.getAllStudents = (req, res) => {
  try {
    Students.find()
      .then((data) => {
        res.status(200).send({
          message: "Students have been retrieved successfully",
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while retrieving Students data.",
          error: error,
        });
      });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error,
    });
  }
};

exports.getStudentById = (req, res) => {
  try {
    const studentId = req.params.studentId;
    Students.findOne({ _id: new mongoose.Types.ObjectId(studentId) })
      .then((data) => {
        if (!data) {
          return res.status(200).send({
            message: "No Student found with the given Id",
          });
        }
        res.status(200).send({
          message: "student has been retrieved successfully",
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while retrieving User data.",
          error: error,
        });
      });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).send({
      message: "Internal Server Error",
      error: error,
    });
  }
};

exports.addStudent = (req, res) => {
  try {
    const payload = req.body;

    const newUser = new Students(payload);

    newUser
      .save()
      .then((data) => {
        res.status(200).send({
          message: "student has been added successfully",
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while adding a new student.",
          error: error,
        });
      });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error,
    });
  }
};

exports.updateStudent = (req, res) => {
  try {
    const studentId = req.params.studentId;

    const payload = req.body;

    Customers.findByIdAndUpdate(
      { _id: new mongoose.Types.ObjectId(studentId) },
      { $set: { ...payload } }
    )
      .then((data) => {
        res.status(200).send({
          message: "student has been updated successfully",
          studentId: data._id,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while updating an user.",
          error: error,
        });
      });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).send({
      message: "Internal Server Error",
      error: error,
    });
  }
};

exports.deleteStudentById = (req, res) => {
  try {
    const studentId = req.params.studentId;

    Students.deleteOne({ _id: new mongoose.Types.ObjectId(studentId) })
      .then((data) => {
        res.status(200).send({
          message: "student has been deleted successfully",
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while deleting an student.",
          error: error,
        });
      });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error,
    });
  }
};

exports.deleteAllStudents = (req, res) => {
  try {
    Students .deleteMany()
      .then((data) => {
        res.status(200).send({
          message: "Students have been deleted successfully",
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while deleting Customers.",
          error: error,
        });
      });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error,
    });
  }
};