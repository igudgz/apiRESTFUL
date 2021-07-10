const mongoose = require("mongoose");
const env = require("dotenv/config");

//connecting mongoose//
const uri = process.env.DB_KEY;
mongoose.set("useCreateIndex", true);

const mongooConnect = mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

module.exports = {
  mongooConnect: mongooConnect,
};
