const express = require("express");
const router = express.Router();
const { connect } = require("../utils/redis");
const KEY = "users";
const EXPIRED = 800;

router.get("/", async (req, res) => {
  const client = connect();

  client.lrange(KEY, 0, -1, (err, response) => {
    if (response) {
      let datas = [];
      response.forEach((data) => {
        datas.push(JSON.parse(data));
      });
      res.send(datas);
    } else {
      res.send("Error " + err);
    }
  });
});

router.get("/add", async (req, res) => {
  const datas = [
    {
      name: "Ma Puth",
      logged_in: new Date(),
    },
    {
      name: "Ma Puth Two",
      logged_in: new Date(),
    },
  ];

  const client = await connect();
  datas.forEach(async (user) => {
    await client.lpush(KEY, JSON.stringify(user));
  });

  res.send("ok");
});

module.exports = router;
