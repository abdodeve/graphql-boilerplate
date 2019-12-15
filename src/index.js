const { GraphQLServer } = require("graphql-yoga");
const dotenv = require("dotenv");
const resolvers = require("./resolvers");
const DB = require("./config/database");

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: ".env" });

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers
});

/**
 * Connect to MongoDB.
 */
DB.connect();

/**
 * Start GraphQl Server
 */
server.start(() => console.log("Server is running on http://localhost:4000"));
