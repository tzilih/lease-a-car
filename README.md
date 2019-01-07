This project was created with Create React App.

From the main project directory, you can run `npm test` to run the tests.

To start the app in development mode, run `npm start` and you should be directed to localhost:3000.

Technologies used:
* React
* Create React App
* Bootstrap for styling
* Enzyme
* Jest

'Lease A Car' is a car listing site that lets you find cars with various monthly payment options. 

You can filter by minimum mileage. This feature is not optimal, as the filtering is done on the front-end due to a limited mock API. Ideally, you would send the minimum mileage requirement as a url param and have it filtered on the backend. This would prevent something like have 1 result on the first page, and then 10 on the next page. 

You can also 'favorite' and 'unfavorite' a car on the car listing page as well as on the car details page. 

Due to time constraints, minimal tests were written. 