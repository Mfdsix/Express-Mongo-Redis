const express = require("express");
const userRoutes = require("./routes/User");
const userLoggedInRoutes = require("./routes/UserLoggedIn");

// connect to db
require("./utils/mongo");

const app = express();
// define routes here
app.use("/users", userRoutes);
app.use("/logged-in-users", userLoggedInRoutes);
app.listen(3000);
