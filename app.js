const { response } = require("express");
const express = require("express");
const cors = require("cors");
const app = express();

const eventsController = require("./controllers/eventsController");

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/events", eventsController);

app.get("/", (request, response) => {
  response.send("Hello 4kidsEvents");
});

module.exports = app;
