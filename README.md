Sprint #1 <October 16 - October 28>
Backlog #	Description 	Story Point Estimate	Story Point Actual	Status	Comments

1	Create Server	5	5	Complete - John	Express app
3	Create user login page	6	4	Complete - John	Not done styling
4	Create list produce page	5	4	Complete -Joshua	API and view are not connected
6	Implement methods to handle data transfer	4	6	Complete - Ralph	API and view are not connected
5	Create view produce page	7	4	Complete - Joshua	API and view are not connected
7	Create client	3	8	Complete - Ralph	React app

Our application currently shows a login page, register page, and two buttons that lead to different routes (vegetable, fruit).

The User table has been created by John on the Azure SQL service, but have yet to connect the front-end with the back-end (database).

The REST APIs have been made by Ralph, which can be found in the src/components/api folder. These have yet to be connected with the database. The server file can be found in the src/Server.js file.

The database folder, which has the getProduce.js file successfully calls the names and prices of produce (both fruits and vegetables). We have finished testing on both the Produce and User back-end calls from Azure SQL database.

The App.js file contains the different routes that we have configured.

Testing of the application can be done through trying the different routes on the web browser (front end) or running the getProduce.js/getUsers.js file in the database folder (back end).

Overall, we have finished all the requirements of the Sprint 1. However, we finished some objectives quicker than expected and some took longer. 