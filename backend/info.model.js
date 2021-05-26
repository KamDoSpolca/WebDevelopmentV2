const mongoose = require("mongoose");

const describe = mongoose.Schema({

  info: { type: String }


})

module.exports = mongoose.model("info", describe);
