const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Cardio = new Schema({
// Workout {
        // type (cardio) string x
        // name string x
        // distance number
        // duration number

    // }

});

const CardioWorkout = mongoose.model("Cardio", Cardio);

module.exports = CardioWorkout;