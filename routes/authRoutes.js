const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth.js");
router.post("/login", auth);
module.exports = router;
