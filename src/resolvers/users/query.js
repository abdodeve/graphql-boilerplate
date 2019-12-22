const UserModel = require("./model");

/**
 * users
 * Get all users
 * @param {*} _
 * @param {*} args
 */
const users = async (_, args) => {
  try {
    // fetch users
    const allUsers = await UserModel.find({});

    return allUsers;
  } catch (error) {
    console.error("users =>", error);
  }
};

/**
 * user
 * Get single user
 * @param {*} _
 * @param {*} args
 */
const user = async (_, args) => {
  try {
    // get the user
    // const theUser = await UserModel.findById(args.id);
    const theUser = await UserModel.findById(args.id)
      .populate("posts")
      .exec();
    console.log({ theUser });

    return theUser;
  } catch (error) {
    console.error("user =>", error);
  }
};

module.exports = {
  users,
  user
};
