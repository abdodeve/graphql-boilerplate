const { GraphQLServer } = require("graphql-yoga");
const resolvers = require("./resolvers");

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers
});

server.start(() => console.log("Server is running on http://localhost:4000"));

// const { GraphQLServer } = require("graphql-yoga");

// const typeDefs = `
//   type Query {
//     hello(name: String): String
//   }
// `;

// const resolvers = {
//   Query: {
//     hello: (_, args) => `Hello ${args.name || "World"}!`
//   }
// };

// const server = new GraphQLServer({ typeDefs, resolvers });
// server.start(() => console.log(`Server is running at http://localhost:4000`));
