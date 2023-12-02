const Person = require("../model/Person");

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

      //means user is new --> email checked--> password need to be secured
    }
  } catch {}
};
exports.login = async (req, res) => {
  try {
  } catch {}
};
