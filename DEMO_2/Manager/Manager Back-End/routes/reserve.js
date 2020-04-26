const express = require("express");
const router = express.Router();
var cors = require("cors");
var nodeMailer = require("nodemailer");
const Res = require("../models/ResModel");
const CRes = require("../models/CustomerResModel");
const bodyParser = require("body-parser");
var handlebars = require("handlebars");
router.use(bodyParser.json());
router.use(cors());

router.post("/", (req, response) => {
  var name = req.body.queryResult.parameters.name.name;
  var name = name.split(" ");
  var d1 = new Date(req.body.queryResult.parameters.date);
  var d2 = new Date(req.body.queryResult.parameters.timePeriod.startTime);
  var d3 = new Date(req.body.queryResult.parameters.timePeriod.endTime);
  d2.setDate(d1.getDate());
  d3.setDate(d1.getDate());
  const min = 100000;
  const max = 1000000;
  var rand = min + Math.random() * (max - min);
  var resID1 = Math.floor(rand);

  let transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: "smartparkrutgers@gmail.com",
      pass: "Spring2020",
    },
  });
  var message =
    "<p>Thank you for reserving a spot at SmartPark, {{name}}. Your reservation ID is {{resID1}}. We can't wait to see you there!</p>";
  var temp = handlebars.compile(message);
  let mailOptions = {
    from: "smartparkrutgers@gmail.com",
    to: req.body.queryResult.parameters.email,
    subject: "SmartPark Confirmation",
    html: temp({
      name: req.body.queryResult.parameters.name.name,
      resID1: resID1,
    }),
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message %s sent: %s", info.messageId, info.response);
  });

  const newRes = Res({
    custFName: name[0],
    custLName: name[1],
    type: "Confirmed",
    car: req.body.queryResult.parameters.licensePlate,
    email: req.body.queryResult.parameters.email,
    resID: resID1,
    Paid: false,
    startTime: d2,
    reserveTime: d3,
  });
  const newCRes = CRes({
    email: req.body.queryResult.parameters.email,
    date: d2,
    startTime: d2,
    endTime: d3,
  });
  newRes.save();
  newCRes.save(function (err, reservation) {
    if (err) {
      response.status(404).send(err);
    } else {
      response.json(reservation);
    }
  });
});
router.get("/", (req, response) => {
  Res.find({}, function (err, reservation) {
    if (err) {
      response.status(404).send(err);
    } else {
      response.json(reservation);
    }
  });
});
/* DELETE Reservation */
router.route("/:id").delete((req, res, next) => {
  Res.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});
router.get("/search/:resID", (req, response) => {
  Res.find({ resID: req.params.resID }, function (err, reservation) {
    if (err) {
      response.status(404).send(err);
    } else {
      response.json(reservation);
    }
  });
});
module.exports = router;
