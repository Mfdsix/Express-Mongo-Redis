require("dotenv").config();

module.exports = {
  mongoUri: process.env.MONGO_URI,
  redisConfig: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
};
