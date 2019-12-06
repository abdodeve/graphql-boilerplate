const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
const resolvers = require("./resolvers");

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    };
  }
});

// const options = {
//   port: 7000
// };

server.start(() => console.log("Server is running on http://localhost:4000"));
