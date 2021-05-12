const mongoose = require("mongoose");

const abc = mongoose.Schema({

  location: { type: String }


})

module.exports = mongoose.model("location", abc);
