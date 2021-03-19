# fitness-tracker
Workout Tracker

[Deployed on Heroku!](https://agile-journey-00411.herokuapp.com/)

## Coding Challenge
Code was provided that covered the front-end, as well as a seeder file which hints at what the model should look like. Through reading the provided html/css/js files the model, routes, and server had to be built from scratch. The given files were not to be adjusted, beyond any superficial styling. The challenge is meeting the needs of a hypothetical front-end developer by creating the database and a means by which that database can be interacted with.

## Back-End Development

### MongoDB
[MongoDB](https://www.mongodb.com/cloud/atlas) is a noSQL database provider that was used in this project. Usable, object-styled, packets of information are stored in JS-friendly structures. Unlike SQL which requires querying and transforming, or synching with a tool like sequelize, MongoDB data is already formatted in such a way that a model can be built that is easier to understand from modern coding perspectives.

Mongo also doesn't require seeding the database, so long as the application is pointed to a database it will create the database and all data within when the server launches.

### Express Server & Routes
Express provides serving and routing structure. API and HTML routes are served. In association with Mongo, querying the model is querying the database so all Mongo related tools like "aggregate" is usable in the routes themselves.

### Model
The model is structured almost like an object is, where we see all the various parts of the data packet, and the data itself is served in JSON strings that destructure into an object and/or arrays.

### Deployment
Deployment to Heroku was easy as Mongo provides a key that is accepted by Heroku. As previously mentioned, because Mongo doesn't require manually going in and creating the database, the app does it upon launching.

## Credits

Erik Portillo, 2021