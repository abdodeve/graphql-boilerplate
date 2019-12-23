const PostModel = require("./model");

/**
 * posts
 * Get all posts
 * @param {*} _
 * @param {*} args
 */
const posts = async (_, args) => {
  try {
    // fetch posts
    const allPosts = await PostModel.find({})
      .populate("user")
      .exec();

    return allPosts;
  } catch (error) {
    console.error("posts =>", error);
  }
};

/**
 * post
 * Get single post
 * @param {*} _
 * @param {*} args
 */
const post = async (_, args) => {
  try {
    // get the post
    const thePost = await PostModel.findById(args.id)
      .populate("user")
      .exec();

    return thePost;
  } catch (error) {
    console.error("post =>", error);
  }
};

module.exports = {
  posts,
  post
};
