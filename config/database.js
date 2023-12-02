const mongoose = require("mongoose");
require("dotenv").config();
exports.connect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("Server connection with Database : Sucecssful");
    })
    .catch((err) => {
      console.log("Server connection with the Database : Failed");
      console.error(err.message);
      process.exit(1);
    });
};
