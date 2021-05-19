const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./Approutes/routes");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", routes);

app.listen(port);
console.log("Server started at port:", port);
