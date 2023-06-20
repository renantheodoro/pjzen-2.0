const functions = require("firebase-functions");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const config = require("./src/config/config");

require("dotenv").config();

app.use(morgan("combine"));
app.use(bodyParser.json());
app.use(cors());

require("./src/routes")(app);

app.listen(config.port);

exports.app = functions.https.onRequest(app);
