// TODOs
// Create Mongoose Model

    // What all information is needed in our database? Check the public files for specifics. 
    // Workout {
        // type (cardio) string x
        // name string x
        // distance number
        // duration number

        // type (resistance) string x
        // name string x
        // weight number
        // sets number
        // reps number
        // duration number
    // }
    // Actually, the above will be split into two "collections", one per type of workout. I think that's how to keep things tight.


// create routes
    // we have given files for what to serve, the question is what format do these need to be in. Inspect the public files for what is expected.
    // /api/workouts
        // GET, PUT, POST, 
    // /api/workouts/range
        // GET

// create server

// npms
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// public stuff, which is given
app.use('/', express.static('public'));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true });

// routes
require('./routes/routes.js')(app)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
