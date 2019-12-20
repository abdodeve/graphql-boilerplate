// Posts
const postsQuery = require("./posts/query");
const postsMutation = require("./posts/mutation");
// Users
const usersQuery = require("./users/query");
const usersMutation = require("./users/mutation");

module.exports = {
  Query: {
    ...usersQuery,
    ...postsQuery
  },
  Mutation: {
    ...usersMutation,
    ...postsMutation
  }
};
