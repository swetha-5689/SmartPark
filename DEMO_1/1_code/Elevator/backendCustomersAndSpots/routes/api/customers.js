const express = require("express"); //Express is used for the back end modules

const router = express.Router();

const Customer = require("../../models/Customer"); //import the Customer model

var cors = require("cors");

router.use(cors()); //make pages accessible

router.get("/", (req, res) => {
  //HTTP request to get the list of customers in the database
  Customer.find()
    .then(customers => res.json(customers))
    .catch(err => res.status(400).json(err));
});

router.post("/addCustomer", (req, res) => {
  //HTTP request to add customers
  const newCustomer = new Customer({
    name: req.body.name,
    licensePlate: req.body.licensePlate,
    membershipNumber: Number(req.body.membershipNumber)
  });

  newCustomer
    .save()
    .then(customers =>
      res.json(customers).catch(err => res.status(400).json(err))
    );
});

router.get("/searchPlate/:licensePlate", (req, res) => {
  //Search for a license plate and return the license plate and associated customer IF it is in the system
  Customer.findOne({ licensePlate: req.params.licensePlate })
    .then(customers => res.json(customers))
    .catch(err => res.status(400).json(err));
});

router.delete("/deleteCustomer/:name", (req, res) => {
  //HTTP request to delete a customer
  Customer.findOne({ name: req.params.name })
    .then(customers =>
      customers.remove().then(() => res.json({ success: true }))
    )
    .catch(err => res.status(404).json(err));
});

module.exports = router;
