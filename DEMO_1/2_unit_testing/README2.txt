System Requirements:
Node.js
yarn
Postman (optional)

How to Run Front-End Unit Tests:
In the manager folder, there is a subfolder labelled tests. This contains the tests for the react front-end components. You can run the tests from anywhere in the manager folder by typing yarn test. The tests create snapshots for components and compare the DOMs rendered.

To Run Back-End Unit Tests:
The back end is currently deployed at
https://cryptic-depths-70075.herokuapp.com/.
It can be tested by sending requests through an application like Postman.
So to find reservations, one can send a GET request to 
https://cryptic-depths-70075.herokuapp.com/api/res/.
Currently active:
https://cryptic-depths-70075.herokuapp.com/api/res/
https://cryptic-depths-70075.herokuapp.com/api/spots/
https://cryptic-depths-70075.herokuapp.com/api/floors/
https://cryptic-depths-70075.herokuapp.com/api/spots/floor/:floorNumber