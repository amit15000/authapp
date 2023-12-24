const express = require("express");
const router = express.Router();
const { login, signup } = require("../controllers/auth");
const { auth, isStudent, isAdmin } = require("../middlewares/midwr");
router.post("/login", login);
router.post("/signup", signup);

//accessing protectected routes. -->Authorization
router.get("/test", auth, (req, res) => {
  res.json({
    success: true,
    message: "Welcome, you are authorized",
  });
});

//Is user a student
router.get("/student", auth, isStudent, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the protected route for students",
  });
});

//Is Admin
router.get("/student", auth, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the protected route for admin",
  });
});

module.exports = router;
