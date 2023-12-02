const express = require("express");
const router = express.Router();
const { login, signup } = require("../controllers/auth");
router.post("/login", login);
router.post("/login", signup);
module.exports = router;
