const express = require("express");
const app = express();
require("./config/database").connect();
require("dotenv").config();

app.listen(process.env.URL || 4000, () => {
  console.log("Server started successfully");
});
