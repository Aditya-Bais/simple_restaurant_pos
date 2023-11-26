const express = require("express");
const port = process.env.PORT;
var bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer();
const route = require("./routes/route");
const cookie = require("cookie-parser");

require("./db/db");

const server = express();
server.use(cookie());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json({ extended: false }));
server.use(upload.array());
server.use(express.static("public"));
server.use("/pos", route);
console.log("hello");

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
