////////////// Habit Model and Schema ////////////////////////////////////////

////// Imports

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

////// Main

const HabitSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true 
    }
})

module.exports = Habit = mongoose.model("Habit", HabitSchema);