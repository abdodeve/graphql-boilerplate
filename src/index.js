const { GraphQLServer } = require("graphql-yoga");
const mongoose = require("mongoose");
// const uri = "mongodb://localhost/graphqlDb";
// mongoose.connect(uri, { useUnifiedTopology: true });
// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function() {
//   console.log("we're connected");
// });

// var kittySchema = new mongoose.Schema({
//   name: String
// });
// var Kitten = mongoose.model('Kitten', kittySchema);
// var silence = new Kitten({ name: 'Silence' });
// console.log(silence.name); // 'Silence'


mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);

const uri = "mongodb://localhost/graphqlDb";

// Connect
mongoose.connect(uri);

// Show connection errors
mongoose.connection.on('error', (err) => {
            console.error(err);
            console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
            process.exit();
});
mongoose.connection.once("open", function() {
  console.log("we're connected");

      var kittySchema = new mongoose.Schema({
      name: String
    });
    var Kitten = mongoose.model('Kitten', kittySchema);
    var silence = new Kitten({ name: 'Silence' });
    var fluffy = new Kitten({ name: 'fluffy' });
    fluffy.save(function (err, fluffy) {
      if (err) return console.error(err);
      console.log("success");
      // fluffy.speak();
    });

    console.log(silence.name); // 'Silence'
});

console.log("heeloo");

const resolvers = require("./resolvers");

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers
});

server.start(() => console.log("Server is running on http://localhost:4000"));
