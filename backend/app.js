const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const router = require("./hiking.router");

app.use(cors());
app.use("/", router);



app.listen(port, () => {
  console.log("server is listening on port " + port)
});

module.exports = app;
