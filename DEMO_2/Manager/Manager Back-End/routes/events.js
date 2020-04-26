const express = require("express");
const router = express.Router();
const Event = require("../models/EventModel");
var cors = require("cors");
const bodyParser = require("body-parser");
router.use(cors());
router.use(bodyParser.json());
router.post("/", (req, res) => {
  const newEvent = new Event({
    id: Number(req.body.id),
    time: String(req.body.time),
    title: String(req.body.title),
    location: String(req.body.location),
    description: String(req.body.description),
  });
  newEvent
    .save()
    .then((events) =>
      res.json(events).catch((err) => res.status(400).json(err))
    );
});
router.route('/:id').delete((req, res, next) => {
    Event.findOneAndRemove({id: req.params.id}, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  });
router.get("/", (req, response) => {
  Event.find({}, function (err, event) {
    if (err) {
      response.status(404).send(err);
    } else {
      response.json(event);
    }
  });
});

module.exports = router;
