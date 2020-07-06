////////////////// Habits API Endpoints /////////////////////////////////
// Model found in models/Habit.js

/////////////// Imports
  /// Utilities
    const express = require("express");
    const router = express.Router();
    const bcrypt = require('bcryptjs');
    const jwt = require('jsonwebtoken');
    const passport = require("passport");

/// Keys
    const keys = require('../../config/keys');
/// Validations
    const validateNewHabitInput = require("../../validation/new_habit");
/// Models
    const Habit = require("../../models/Habit");

////////////// Main

router.get("/test",(req,res) => {res.json({msg:"habits"})});

// Create Habit
// expects req body to have keys title, description, and user(pojo with key "id")
router.post("/", passport.authenticate("jwt", { session: false }), (req,res)=>{
    
    const {errors,isValid} = validateNewHabitInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    let newHabit = new Habit({
        completed: false,
        title: req.body.title ,
        description: req.body.description || "",
        user: req.body.user.id 
    });

    newHabit.save().then((habit)=> res.json(habit)); 

});

module.exports = router; 