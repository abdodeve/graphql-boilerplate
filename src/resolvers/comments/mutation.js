const CommentModel = require("./model").model;
const PostModel = require("../posts/model");

/**
 * createComment
 * @param {*} _
 * @param {*} args
 */
const createComment = async (_, args) => {
  try {
    let postParentModel = await PostModel.findById(args.post_id);
    var newComment = postParentModel.comments.create({
      content: args.content,
      published_at: args.published_at
    });
    postParentModel.comments.push(newComment);
    // Persist the post with the new comment
    await postParentModel.save();
    console.log("newComment", newComment);
    return newComment;
  } catch (error) {
    console.error("createComment =>", error);
  }
};

/**
 * updatePost
 * @param {*} _
 * @param {*} args
 */
const updateComment = async (_, args) => {
  try {
    let postParentModel = await PostModel.findById(args.post_id);
    let theComment = postParentModel.comments.id(args.id).set(args);
    // Persist the post with the new comment
    await postParentModel.save();
    console.log("theComment", theComment);
    return theComment;
  } catch (error) {
    console.error("updateComment =>", error);
  }
};

/**
 * deletePost
 * @param {*} _
 * @param {*} args
 */
const deleteComment = async (_, args) => {
  try {
    let postParentModel = await PostModel.findById(args.post_id);
    let theComment = postParentModel.comments.id(args.id).remove();
    // Persist the post with the new comment
    await postParentModel.save();
    console.log("theComment", theComment);
    return theComment;
  } catch (error) {
    console.error("deleteComment =>", error);
  }
};

module.exports = {
  createComment,
  updateComment,
  deleteComment
};
