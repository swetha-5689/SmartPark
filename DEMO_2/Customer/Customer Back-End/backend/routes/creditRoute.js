const router = require("express").Router(); // required router
let Card = require("../models/creditcard.model");

router.route("/").get((req, res) => {
  //get request
  Card.find() //mongoose command
    .then((card) => res.json(card)) // if successful then return in json format
    .catch((err) => res.status(400).json("Error: " + err)); //if unsuccessful then return error
});

router.route("/add").post((req, res) => {
  //post request
  const cardNumber = Number(req.body.cardNumber);
  const expDate = req.body.expDate;
  const cvc = Number(req.body.cvc);

  const newCard = new Card({
    cardNumber,
    expDate,
    cvc,
  });

  newCard
    .save()
    .then(() => res.json("Card added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id/").delete((req, res) => {
  //delete request
  Card.findByIdAndDelete(req.params.id)
    .then(() => res.send("Card Deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
