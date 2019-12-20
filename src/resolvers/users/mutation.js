const UserModel = require("./model");

/**
 * createUser
 * @param {*} _
 * @param {*} args
 */
const createUser = async (_, args) => {
  // Prepare Model
  let userModel = new UserModel({
    name: args.name,
    email: args.email,
    password: args.password
  });

  try {
    // Save
    const userSaved = await userModel.save();
    return userSaved;
  } catch (error) {
    console.error("userSave =>", error);
  }
};

/**
 * updateUser
 * @param {*} _
 * @param {*} args
 */
const updateUser = async (_, args) => {
  try {
    // Update
    const userUpdated = UserModel.findByIdAndUpdate(args.id, args, {
      new: true
    });
    return userUpdated;
  } catch (error) {
    console.error("userSave =>", error);
  }
};

/**
 * deleteUser
 * @param {*} _
 * @param {*} args
 */
const deleteUser = async (_, args) => {
  try {
    const removedUser = await UserModel.findByIdAndRemove(args.id);
    return removedUser;
  } catch (error) {
    console.error("deleteUser =>", error);
  }
};

module.exports = {
  createUser,
  updateUser,
  deleteUser
};
