Currently, the customer backend consists of a MongoDB cluster that houses our billing data for each customer/user as well as their reservation which is also tied to their account. 

1. Billing (Model and Route)
The model for a billing document is formed by a JSON formatted structure that contains:
{
	email: { type: String, required: true },
 	username: { type: String, required: true },
 	currentDues: { type: Number, required: true },
 	dateofDues: { type: Date, required: true },
 	description: { type: String, required: true }
}

When making a bill, the only required elements are the email, username, currentDues, dateofDues, and description. Adding a bill is only possible through doing a post request to the route: https://boiling-river-38785.herokuapp.com/billing/add which is accessible when a customer logs in to their account. 

It is also possible to update someone’s current bill by posting using the route: https://boiling-river-38785.herokuapp.com/billing/update/:id. The id is the unique identifier that MongoDB gives any new added info when placed into the database. Adding that id to the end of the route will allow you to update the currentDues and the description.

Deleting a due (someone pays their bill) is also possible by doing a delete request to the route https://boiling-river-38785.herokuapp.com/billing/:id. The id is the same as mentioned before and when used with url, the information associated with that bill will be deleted from the database.

In addition to all these things, you are also able to see all the bills in a table by doing a get request from the route: https://boiling-river-38785.herokuapp.com/billing/.


2. Reservations (Model and Route):
The model for a reservation document is formed by a JSON formatted structure that contains: 

{
    username: { type: String, required: true },
   	lengthreserve: { type: Number, required: true },
    date: { type: Date, required: true },
    startTime: { type: Number, required: true },
    endTime: { type: Number, required: true }
}


When making a reservation, the only required elements are the username, lengthreserve, date, startTime, and endTime. Adding a reservation is only possible through doing a post request to the route: https://boiling-river-38785.herokuapp.com/reservation/add which is accessible when a customer logs in to their account.

In addition to this, you are also able to see all the reservations in a table by doing a get request from the route: https://boiling-river-38785.herokuapp.com/reservation/. 
