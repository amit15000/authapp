const Person = require("../model/Person");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const existingPerson = await Person.find({ email });
    if (existingPerson) {
      //user alreay exitst-->no need to signup
      return res.json({
        sucess: false,
        message: "User already exist",
      });
    }
    //means user is new --> email checked--> password need to be secured
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch {
      return res.status(500).json({
        sucess: false,
        message: "Error in hashing password",
      });
    }
    const person = await Person.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    res.status(200).json({
      success: true,
      message: "User created successfully",
    });
  } catch {}
};
exports.login = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "User can't be refist",
    });
  }
};
