// middlewares --- for checking authentication, is user student or admin
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async (req, res, next) => {
  try {
    //Pending other ways to get token .,, body,header,cokkie
    const token = req.body.token;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token not present",
      });
    }
    //verify the token
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      console.log(payload);

      //push payloadd token to request object
      req.user = payload;
    } catch {
      return res.status(401).json({
        success: false,
        message: "Token is invalid",
      });
    }
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Something went wrong while veryfing the token",
    });
  }
};
exports.isStudent = (req, res, next) => {
  try {
    if (req.user.role !== "Student") {
      return res.status(401).json({
        success: false,
        message: "Only students can access.",
      });
    }
    next();
  } catch {
    return res.status(401).json({
      success: false,
      message: "Error in varyfing role",
    });
  }
};
exports.isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "Admin") {
      return res.status(401).json({
        success: false,
        message: "Only admin can access.",
      });
    }
    next();
  } catch {
    return res.status(401).json({
      success: false,
      message: "Error in varyfing role",
    });
  }
};
