////////////// User Model and Schema ////////////////////////////////////////

////// Imports

const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

////// Main

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

}, {
    timestamps: true
})

module.exports = User = mongoose.Model('User', UserSchema); 