const config = require("../config");
const userController = require("../controllers/User");

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoUri)
  .then(async () => {
    const size = await userController.size();

    if (size <= 0) {
      await userController.fill();
    }
  })
  .catch((err) => console.log(err));
