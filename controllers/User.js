const UserModel = require("../models/User");

async function all() {
  const datas = await UserModel.find({});
  return datas;
}

async function size() {
  const datas = await UserModel.find({});
  return datas.length;
}

async function fill() {
  const datas = [
    {
      name: "Ma Puth",
      email: "maputh@gmail.com",
    },
    {
      name: "Ma Puth Two",
      email: "maputh2@gmail.com",
    },
    {
      name: "Ma Puth Three",
      email: "maputh3@gmail.com",
    },
  ];
  await datas.forEach(async (user) => {
    await new UserModel(user).save();
  });

  return datas.length;
}

async function truncate() {
  await UserModel.deleteMany({});
  return 0;
}

module.exports = {
  all,
  size,
  fill,
  truncate,
};
