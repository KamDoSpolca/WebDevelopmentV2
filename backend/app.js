const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");

const router = require("./hiking.router");

const app = express();
const port = process.env.PORT || 3000;


const connectionString = "mongodb+srv://admin:" + process.env.dbpass + "@cluster0.smkby.mongodb.net/Hikingapp?retryWrites=true&w=majority";


app.use(cors());

app.use("/", router);

mongoose.connect(connectionString, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
  .then(() => {
    console.log("databaza je pripojena")
  })
  .catch(() => {
    console.log("databaza nie je pripojena")
  });

app.listen(port, () => {
  console.log("server is listening on port " + port)
});

module.exports = app;
