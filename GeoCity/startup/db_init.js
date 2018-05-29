const keys = require("./../config/keys");
const mongoose = require("mongoose");

mongoose.connect(keys.mongoURI).then(
  () => {
    console.log("connected to mongoDB");
  },
  err => {
    console.log("err", err);
  }
);
