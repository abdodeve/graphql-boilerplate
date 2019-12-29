// Posts
const postsQuery = require("./posts/query");
const postsMutation = require("./posts/mutation");
// Users
const usersQuery = require("./users/query");
const usersMutation = require("./users/mutation");
// Comments
const commentsQuery = require("./comments/query");
const commentsMutation = require("./comments/mutation");

module.exports = {
  Query: {
    ...usersQuery,
    ...postsQuery,
    ...commentsQuery
  },
  Mutation: {
    ...usersMutation,
    ...postsMutation,
    ...commentsMutation
  }
};
