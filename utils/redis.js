const config = require("../config");
const redis = require("redis");

function connect() {
  return redis.createClient(config.redisConfig);
}

module.exports = {
  connect,
};
