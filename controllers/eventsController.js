const express = require("express");
const { request, response } = require("../app");
const router = express.Router();

const KidsEvents = require("../kidsEvents.json");

router.get("/", (request, response) => {
  response.json(KidsEvents);
});

//get student by id
router.get("/:id", (request, response) => {
  const eventId = request.params.id;

  const events = KidsEvents.data;

  const singleEvent = events.find((event) => event.id === eventId); // find gives you the the object and the filter gives you the array within the object.

  response.json({ singleEvent }); // send the json for the student with the id of the url
});

router.post('/', (request, response) => {
  const startAge = request.body.startAge;
  const endAge = request.body.endAge;
  const title = request.body.title;
  const date = request.body.date;
  const location = request.body.location;
  
  console.log(request.body);
  response.json({success: true, message:'Event succussfully saved'})
});

module.exports = router;
