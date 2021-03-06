////////////// User Model and Schema ////////////////////////////////////////

////// Imports

const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

////// Main

const RewardSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    petalCost: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    }
})



const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    pwdDigest: {
        type: String,
        required: true
    },
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true 
    },
    petals: {
        type: Number,
        required: true
    },
    rewards: [RewardSchema],
    dailyTaskList: {
        type: Array,
        default: []
    },
    habits: {
        type: Array,
        default: [] 
    },
    petalsEarned: {
      type: Number,
      default: 0
    },
    petalsUsed: {
      type: Number,
      default: 0
    }

}, {
    timestamps: true
})



module.exports = User = mongoose.model('User', UserSchema);