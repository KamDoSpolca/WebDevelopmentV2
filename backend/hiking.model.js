const mongoose = require("mongoose");

const hikingSchema = mongoose.Schema({
  title: { type: String },
  info: { type: String },
  image: { type: String },
  location: { type: String },
  point: { type: String }

})

module.exports = mongoose.model("hiking", hikingSchema);
