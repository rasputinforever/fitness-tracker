const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Resistance = new Schema({
// Workout {

        // type (resistance) string x
        // name string x
        // weight number
        // sets number
        // reps number
        // duration number
    // }

});

const ResistanceWorkout = mongoose.model("Resistance", Resistance);

module.exports = ResistanceWorkout;