const mongoose = require("mongoose");

const user = mongoose.Schema({

  email: { type: String },
  password: { type: String }



})

module.exports = mongoose.model("user", user); //(database object, user schematic)
