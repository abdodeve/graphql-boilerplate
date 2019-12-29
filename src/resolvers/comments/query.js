const CommentModel = require("./model").model;

/**
 * post
 * Get single post
 * @param {*} _
 * @param {*} args
 */
const comment = async (_, args) => {
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
  comment
};
