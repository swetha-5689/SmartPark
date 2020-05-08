Welcome to the Pricing-Admin module!

The code for the Pricing-Admin module is seperated into the following folders:
.
├── client
├── config
├── models
├── node_modules
├── routes
└── services

The front end is contained under client, all future references to fronend assume client/ as the starting point. A single /src/App.js file 
is where you can find the assigned routes for navigation and page elements.
To find the individual components navigate to /src/components/ . Here you will find the components for things such as the Nav Bar, graphs,
and, of course, the landing pages themselves.

The back end is contained under the folder not named client. All API documents are located at /routes/api.
The primary computing system of the pricing-admin page is located under /service/PriceModelClass.js, examples of its
use are given in the system documentation accompanying this submission.

The database models are located at /models/

{
    "price": 12.50
}