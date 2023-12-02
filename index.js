const express = require("express");
const app = express();
require("./config/database").connect();
require("dotenv").config();

//mount route
const authRoutes = require("./routes/authRoutes.js");
app.use("/api/vi", authRoutes);

app.listen(process.env.URL || 4000, () => {
  console.log("Server started successfully");
});
