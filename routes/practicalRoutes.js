import express from "express";
import { createAdmin,createTeacher,createStudent,getAllUsers } from "../controllers/userController.js";
import { createSubject, getSubjects } from "../controllers/subjectController.js";
import { createPractical, enrollStudent, getPracticals } from "../controllers/practicalController.js";
import { isAdmin, isTeacher, notStudent } from "../middleware/Middleware.js";
 const router=express.Router();

router.post("/admin/create",createAdmin)
router.post("/teacher/create",createTeacher)
router.post("/student/create",createStudent)
router.post("/subject/create",isAdmin,createSubject)
router.post("/practical/create",createPractical)
router.post("/practical/enroll",enrollStudent)

router.get("/user/get",isAdmin,getAllUsers)
router.get("/admin/get",isAdmin,getAllUsers)
router.get("/teacher/get",isAdmin,getAllUsers)
router.get("/student/get",notStudent,getAllUsers)
router.get("/subject/get",getSubjects)
router.get("/practical/get",getPracticals)
export default router;