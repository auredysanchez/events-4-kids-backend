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
  // console.log(eventId, 'id')

  const events = KidsEvents;
  // console.log(KidsEvents.data, "le")

  const singleEvent = events.find(event => event.id = eventId); // find gives you the the object and the filter gives you the array within the object.
  console.log({singleEvent}, 'single')
  response.json({ singleEvent }); // send the json for the student with the id of the url
});

router.post('/', (request, response) => {
  console.log(request.body, 'body')
  const startAge = request.body.startAge;
  const endAge = request.body.endAge;
  const title = request.body.title;
  const date = request.body.date;
  const location = request.body.location;

  // const addEvent = {title, date, location, startAge, endAge}

  console.log(request.body.addEvent);
  response.json({success: true, message:'Event succussfully saved'})
});

module.exports = router;
