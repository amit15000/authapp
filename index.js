const express = require("express");
const cors = require("cors"); // Add this line
const app = express();
const PORT = process.env.PORT || 3000;

require("./config/database").connect();
require("dotenv").config();
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
