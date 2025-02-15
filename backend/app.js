/*const express = require("express");
const qrRoutes = require("./routes/qrRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/api", qrRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});  */

const express = require("express");
const qrRoutes = require("./routes/qrRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());

// ✅ Add a default route for "/"
app.get("/", (req, res) => {
  res.send("Backend is running! Use /api for API routes.");
});

app.use("/api", qrRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
