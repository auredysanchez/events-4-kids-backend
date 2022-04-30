const { response } = require("express");
const express = require("express");
const cors = require('cors');
const app = express();



const eventsController = require("./controllers/eventsController");

app.use(cors());

app.use("/events", eventsController);

app.get("/", (request, response) => {
  response.send("Hello 4kidsEvents");
});

// app.listen(PORT, () => {
//   console.log(`🪨 Listening on port ${PORT} 💎 `);
// });

module.exports = app;
