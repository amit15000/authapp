const Person = require("../model/Person");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const existingPerson = await Person.findOne({ email: email });
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
    const { email, password } = req.body;

    //check if fields are filled

    if (!email || !password) {
      return res.json({
        success: false,
        message: "Fill all fields",
      });
    }
    //check if email is present in db

    const user = await Person.findOne({ email });

    if (!user) {
      //user has not yet signed up
      return res.json({
        success: false,
        message: "SignUp First before login",
      });
    }

    //check his password

    //payload
    const payload = {
      email: user.email,
      id: user._id,
      role: user.role,
    };

    if (await bcrypt.compare(password, user.password)) {
      //password matched
      //create a token
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });

      //we have create cokkie now

      //add new token elemen to the user object
      user.token = token;
      //remove password from this object
      user.password = undefined;

      const options = {
        expiresIn: new Date(Date.now + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      return res.cookie("AmitCookie", token, options).json({
        sucess: true,
        token: token,
        user: user,
        message: "User Logged in Successfully",
      });
    } else {
      return res.json({
        success: false,
        message: "Password not matched",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Login failed",
    });
  }
};
