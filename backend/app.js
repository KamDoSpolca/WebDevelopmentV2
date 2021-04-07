const express = require("express");
const cors = require("cors");
const router = require("./hiking.router");

const app = express();
const port = process.env.PORT || 3000;


app.use(cors());

app.use("/", router);


app.listen(port, () => {
  console.log("server is listening on port " + port)
});

module.exports = app;
