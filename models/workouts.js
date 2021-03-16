const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Workout = new Schema({
    type: {
        type: String,
        trim: true,
        required: false
    },
    name: {
        type: String,
        trim: true,
        required: false
    },

    distance: {
        type: Number,
        unique: false,
        required: false
    },
    
    name: {
        type: String,
        trim: true,
        required: false
    },
    weight: {
        type: Number,
        unique: false,
        required: false
    },
    sets: {
        type: Number,
        unique: false,
        required: false
    },
    reps: {
        type: Number,
        unique: false,
        required: false
    },
    duration: {
        type: Number,
        unique: false,
        required: false
    },
    day: {
        type: Date,
        default: Date.now
    },

})

let Workouts = mongoose.model("Workout", Workout);



module.exports = Workouts;