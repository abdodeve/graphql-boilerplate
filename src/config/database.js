const chalk = require("chalk");
const mongoose = require("mongoose");

/*
    |--------------------------------------------------------------------------
    | Default Database Connection
    |--------------------------------------------------------------------------
    |
    | Here you may specify which of the database connections below you wish
    | to use as your default connection for all database work. Of course
    | you may use many connections at once using the Database library.
    |
    */

/**
 * connect
 * Connect to MongoDB Database
 *
 */
const connect = () => {
  mongoose.set("useFindAndModify", false);
  mongoose.set("useCreateIndex", true);
  mongoose.set("useNewUrlParser", true);

  // Connect
  mongoose.connect(process.env.MONGODB_URI);

  // Show connection errors
  mongoose.connection.on("error", err => {
    console.error(err);
    console.log(
      "%s MongoDB connection error. Please make sure MongoDB is running.",
      chalk.red("✗")
    );
    process.exit();
  });

  // Connection opened
  mongoose.connection.on("open", () => {
    console.log("DB Opened");
  });
};
module.exports.connect = connect;
