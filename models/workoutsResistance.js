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
    name: {
        type: String,
        trim: true,
        required: "Workout name is required!"
    },
    weight: {
        type: Number,
        unique: false,
        required: true
    },
    sets: {
        type: Number,
        unique: false,
        required: true
    },
    reps: {
        type: Number,
        unique: false,
        required: true
    },
    duration: {
        type: Number,
        unique: false,
        required: true
    },
    
    created: {
        type: Date,
        default: Date.now
    },
});

const ResistanceWorkout = mongoose.model("Resistance", Resistance);

module.exports = ResistanceWorkout;