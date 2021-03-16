const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Cardio = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Workout name is required!"
    },

    distance: {
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

const CardioWorkout = mongoose.model("Cardio", Cardio);

module.exports = CardioWorkout;