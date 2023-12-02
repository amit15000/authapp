const { mongoose } = require("mongoose");

const userSchema = new mongoose.userSchema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Admin", "Student", "Visitor"],
  },
});
module.exports = mongoose.model("Person", userSchema);
