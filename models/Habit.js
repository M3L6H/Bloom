////////////// Habit Model and Schema ////////////////////////////////////////

////// Imports

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { TaskSchema } = require("./Task");

////// Main

const HabitSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true 
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
    },
    tasks: [TaskSchema]
},{
    timestamps:true
})

module.exports = Habit = mongoose.model("Habit", HabitSchema);