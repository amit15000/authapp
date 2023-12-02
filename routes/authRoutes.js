const express = require("express");
const router = express.Router();
const { login, signup } = require("../controllers/auth.js");
router.post("/login", login);
router.post("/login", signup);
module.exports = router;
