const postsQuery = require("./posts/query");
const postsMutation = require("./posts/mutation");

module.exports = {
  Query: {
    ...postsQuery
  },
  Mutation: {
    ...postsMutation
  }
};
