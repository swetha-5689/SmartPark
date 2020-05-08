System Requirements:
MongoDB Compass 

Integration Testing
We have begun integrating our front-end and our back-end in the manager group. While there is currently no official testing procedure, we can use the front-end deployed at https://shielded-lake-21193.herokuapp.com/ to communicate with the back-end at https://cryptic-depths-70075.herokuapp.com/api/. We can verify that changes made in the front-end are communicated to the back-end and completed by looking at the database. For example, if a manager wishes to delete a reservation, they can do so using the front-end. To verify that the changes were actually made, we can look at the database. The data can be viewed by connecting through Mongo Shell or MongoDB 
Compass with the following connection string
mongodb+srv://swetha5689:SmartPark2020@smartpark-necgp.mongodb.net/SmartPark?authSource=admin&replicaSet=SmartPark-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true.

Integration across Subgroups:
Some parts of the system are integrated. For example, when a reservation is made through the Google Assistant, this will be reflected across the Customer and Manager interfaces. Likewise, the formats for updates for spots and reservations are consistent across the different subgroups