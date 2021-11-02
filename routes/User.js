const express = require("express");
const router = express.Router();
const userController = require("../controllers/User");

router.get("/", async (req, res) => {
  res.send(await userController.all());
});

module.exports = router;
