const { mongoose } = require("mongoose");

const userSchema = new mongoose.userSchema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
});
