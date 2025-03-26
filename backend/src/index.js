const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const sequelize = require("./config/db");
const poemRoutes = require("./routes/poem.routes");
const userRoutes = require("./routes/user.routes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", poemRoutes);
app.use("/api/auth", userRoutes);

sequelize.sync().then(() => console.log("✅ Database Synced!"));

app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
