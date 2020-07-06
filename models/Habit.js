////////////// Habit Model and Schema ////////////////////////////////////////

////// Imports

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

////// Main

const HabitSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: "users"
    },

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
        required: true 
    }
},{
    timestamps:true
})

module.exports = Habit = mongoose.model("Habit", HabitSchema);