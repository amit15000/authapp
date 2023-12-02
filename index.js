const express = require("express");
const app = express();
app.use(express.json());
require("./config/database").connect();
require("dotenv").config();
PORT = process.env.PORT || 4000;
//mount route
const authRoutes = require("./routes/authRoutes.js");
app.use("/api/vi", authRoutes);

app.listen(PORT, () => {
  console.log(`Server started successfully on PORT : ${PORT}`);
});
