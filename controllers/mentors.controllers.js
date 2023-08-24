const Mentors = require("../models/mentor.model");
const mongoose = require("mongoose");

exports.helloWorld = (req, res) => {
  console.log("USERNAME: ", process.env.USERNAME);
  console.log("PASSWORD: ", process.env.PASSWORD);
  res.send({
    message: "hello world",
  });
};

exports.getAllMentors = (req, res) => {
  try {
    Mentors .find()
      .then((data) => {
        res.status(200).send({
          message: "All  Mentors have been retrieved successfully",
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while retrieving Mentor data.",
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

exports.getMentorById = (req, res) => {
  try {
    const mentorId = req.params.mentorId;
    Mentors.findOne({ _id: new mongoose.Types.ObjectId(mentorId) })
      .then((data) => {
        if (!data) {
          return res.status(200).send({
            message: "No mentor found with the given Id",
          });
        }
        res.status(200).send({
          message: `A Mentor with this Id ${mentorId}  has been retrieved successfully`,
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while retrieving Mentor data.",
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

exports.addMentor = (req, res) => {
  try {
    const payload = req.body;

    const newUser = new Mentors(payload);

    newUser
      .save()
      .then((data) => {
        res.status(200).send({
          message: "A Mentor is assigned by Organisation sucessfully",
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while adding a new Mentor.",
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

exports.updateMentor = (req, res) => {
  try {
    const mentorId = req.params.mentorId;

    const payload = req.body;

    Mentors.findByIdAndUpdate(
      { _id: new mongoose.Types.ObjectId(mentorId) },
      { $set: { ...payload } }
    )
      .then((data) => {
        res.status(200).send({
          message: `Mentor with Id ${mentorId} has been updated sucessfully.`,
          roomId: data._id,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while updating an mentorId.",
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

exports.deleteMentorById = (req, res) => {
  try {
    const mentorId = req.params.mentorId;

    Mentors.deleteOne({ _id: new mongoose.Types.ObjectId(mentorId) })
      .then((data) => {
        res.status(200).send({
          message: `one Mentor with  Id ${mentorId} is resigning `,
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while deleting an Mentor.",
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

exports.deleteAllMentors = (req, res) => {
  try {
    Mentors.deleteMany()
      .then((data) => {
        res.status(200).send({
          message: "No Mentors",
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while deleting mentorId.",
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