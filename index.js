const express = require("express");
const app = express();
require("./config/database").connect();
require("dotenv").config();
PORT = process.env.PORT || 4000;
//mount route
const authRoutes = require("./routes/authRoutes.js");
app.use(express.json());
app.use("/api/v1", authRoutes);

app.get("/", (req, res) => {
  res.send("<h1>This is the Home Page</h1>");
});

app.listen(PORT, () => {
  console.log(`Server started successfully on PORT : ${PORT}`);
});
