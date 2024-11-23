import practicalModel from "../models/Practical.js";

export const createPractical = async (req, res) => {
  try {
    const { subjectId, title, description, createdBy } = req.body;

    const practical = new practicalModel({
      subjectId,
      title,
      description,
      createdBy,
    });

    const savedPractical = await practical.save();

    res.json({
      savedPractical,
      message: "Practical created successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      error: "Error occurred while creating practical",
    });
  }
};

export const getPracticals = async (req, res) => {
  try {
    const practicals = await practicalModel
      .find()
      .populate("subjectId", "name code")
      .populate("createdBy", "name email")
      .populate("enrolledStudents", "name email");

    res.json({
      practicals,
    });
  } catch (error) {
    console.log(error);
    res.json({
      error: "Cannot fetch practicals",
    });
  }
};

export const enrollStudent = async (req, res) => {
  try {
    const { practicalId, studentId } = req.body;

    const practical = await practicalModel.findById(practicalId);

    if (!practical) {
      return res.json({
        message: "Practical not found",
      });
    }

    if (!practical.enrolledStudents.includes(studentId)) {
      practical.enrolledStudents.push(studentId);
      await practical.save();

      res.json({
        practical,
        message: "Student enrolled successfully",
      });
    } else {
      res.json({
        message: "Student is already enrolled",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      error: "Error occurred while enrolling student",
    });
  }
};