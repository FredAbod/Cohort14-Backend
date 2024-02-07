const Students = require("../models/students.models");
const mongoose = require("mongoose");

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, waec, className } =
      req.body;

    // Check if required fields are present
    if (!firstName || !lastName || !email || !phoneNumber) {
      return res
        .status(400)
        .json({
          error:
            "Please provide a first name, last name, email, and phone number",
        });
    }

    const newStudent = new Students({
      firstName,
      lastName,
      email,
      phoneNumber,
      waec,
      className,
    });

    await newStudent.save();

    return res
      .status(201)
      .json({ newStudent, message: "Student Created Successfully" });
  } catch (error) {
    return res.status(500).json({ error, message: "Error saving student" });
  }
};

const updateStudents = async (req, res) => {
  try {
    const { id } = req.query;
    const { firstName, lastName, email, phoneNumber } = req.body;

    // Check if required fields are present
    if (!firstName || !lastName || !email || !phoneNumber) {
      return res
        .status(400)
        .json({
          error:
            "Please provide a first name, last name, email, and phone number",
        });
    }
    const updatedStudent = await Students.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        firstName,
        lastName,
        email,
        phoneNumber,
      },
      { new: true }
    );

    return res.status(200).json({message: "Student updated Successfully", updatedStudent})
  } catch (error) {}
};

module.exports = { register, updateStudents };
