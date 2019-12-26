const PostModel = require("./model");
const UserModel = require("../users/model");

/**
 * createPost
 * @param {*} _
 * @param {*} args
 */
const createPost = async (_, args) => {
  // Prepare Model
  let postModel = new PostModel({
    user: args.user_id,
    title: args.title,
    content: args.content,
    published: false
  });

  try {
    // Save post
    const postSaved = await postModel.save();
    // Save post in user
    await UserModel.findOneAndUpdate(
      { _id: args.user_id },
      { $push: { posts: postSaved._id } }
    );

    return postSaved;
  } catch (error) {
    console.error("postSave =>", error);
  }
};

/**
 * updatePost
 * @param {*} _
 * @param {*} args
 */
const updatePost = async (_, args) => {
  try {
    // Update
    const postUpdated = PostModel.findByIdAndUpdate(args.id, args, {
      new: true
    });
    return postUpdated;
  } catch (error) {
    console.error("postSave =>", error);
  }
};

/**
 * deletePost
 * @param {*} _
 * @param {*} args
 */
const deletePost = async (_, args) => {
  try {
    const removedPost = await PostModel.findByIdAndRemove(args.id);
    return removedPost;
  } catch (error) {
    console.error("deletePost =>", error);
  }
};

/**
 * assignePostToUser
 * @param {*} _
 * @param {*} args
 */
const assignePostToUser = async (_, args) => {
  try {
    // Save post
    const postSaved = await postModel.save();
    // Save post in user
    await UserModel.findOneAndUpdate(
      { _id: args.old_user_id },
      { $pull: { posts: args.post_id } }
    );
    await UserModel.findOneAndUpdate(
      { _id: args.new_user_id },
      { $push: { posts: args.post_id } }
    );

    return postSaved;
  } catch (error) {
    console.error("deleteUser =>", error);
  }
};

module.exports = {
  createPost,
  updatePost,
  deletePost
};
