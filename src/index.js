const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const { connectDB } = require("./db/dbconnection");
const routes = require("./routes/v1");
require("./helpers/pick ")
const config = require("./config/config");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cors());
app.options("*", cors());

app.use(express.static(`./public`));

app.use("/v1", routes);

app.use((req, res, next) => {
    next(new Error("Route not found!"));
});

connectDB();

const server = http.createServer(app);

server.listen(config.port, () => {
    console.log("server listning port number " + config.port);
});