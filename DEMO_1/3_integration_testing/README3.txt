https://cryptic-depths-70075.herokuapp.com/api/res/
System Requirements:
MongoDB Compass 
Integration Testing
We have begun integrating our front-end and our back-end in the manager group. While there is currently no official testing procedure, we can use the front-end deployed at https://shielded-lake-21193.herokuapp.com/ to communicate with the back-end at https://cryptic-depths-70075.herokuapp.com/api/. We can verify that changes made in the front-end are communicated to the back-end and completed by looking at the database. For example, if a manager wishes to delete a reservation, they can do so using the front-end. To verify that the changes were actually made, we can look at the database. The data can be viewed by connecting through Mongo Shell or MongoDB Compass with the following connection string
mongodb+srv://swetha5689:SmartPark2020@smartpark-necgp.mongodb.net/SmartPark?authSource=admin&replicaSet=SmartPark-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true.

Pricing-Admin:
Integration testing for baked and front end components on the Pricing-Admin module were performed using the same input/output data referenced in the Pricing-Admin-Unit-testing.txt document.
Cross class, or module integration testing has not yet been performed.