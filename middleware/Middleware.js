import UserModel from "../models/user.js";


export const isAdmin = async (req, res, next) => {
  try {
    const { email } = req.body; 
    const User = await UserModel.findOne({ email });

    if (User && User.role === "Admin") {
      next();
    } else {
      res.status(403).json({ message: "Access Denied: Admins only." });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
};

export const isTeacher = async (req, res, next) => {
  try {
    const { email } = req.body; 
    const User = await UserModel.findOne({ email });

    if (User && (User.role === "Admin" || User.role === "Teachers")) {
      next();
    } else {
      res.status(403).json({ message: "Access Denied: Teachers only." });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
};

export const notStudent = async (req, res, next) => {
  try {
    const { email } = req.body; 
    const User = await UserModel.findOne({ email });

    if (User && (User.role === "Admin" || User.role === "Teachers")) {
      next();
    } else {
      res.status(403).json({ message: "Access Denied: Admins or Teachers only." });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
};
