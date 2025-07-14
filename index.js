const express = require("express");
const cors = require("cors"); // Add this line
const app = express();
require("dotenv").config();
require("./config/database").connect();

const PORT = process.env.PORT;
const authRoutes = require("./routes/authRoutes");

// Mount route
app.use(cors()); // Enable CORS
app.use(express.json());
app.use("/api/v1", authRoutes);

app.get("/", (req, res) => {
  res.send("<h1>This is the Home Page</h1>");
});

app.listen(PORT, () => {
  console.log(`Server started successfully on PORT: ${PORT}`);
});
