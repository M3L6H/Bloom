////////////////// Habits API Endpoints /////////////////////////////////
// Model found in models/Habit.js

/////////////// Imports
  /// Utilities
    const express = require("express");
    const router = express.Router();
    const bcrypt = require('bcryptjs');
    const jwt = require('jsonwebtoken');
    const passport = require("passport");

/// Validations
    const validateNewHabitInput = require("../../validation/new_habit");
/// Models
    const Habit = require("../../models/Habit");
    const Task = require("../../models/Task");

////////////// Main

//Test route
    router.get("/test",(req,res) => {res.json({msg:"habits"})});

// Create Habit 
// expects req body to have keys title, description,
router.post("/", passport.authenticate("jwt", { session: false }), (req,res)=>{
  const {errors,isValid} = validateNewHabitInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  let newHabit = new Habit({
    completed: false,
    title: req.body.title ,
    description: req.body.description || "",
    user: req.user 
  });

  newHabit.save().then((habit)=> res.json(habit)); 
});

//View Habit
router.get("/:id", passport.authenticate("jwt", { session: false }), async (req,res)=>{
  let myHabit;

  try {
    myHabit = await Habit.findOne({ _id: req.params.id });
  } catch(err) {
    return res.status(422).json({ ...err, message: "Bad request." });
  }
  
  // Check the habit exists
  if (!myHabit) {
    return res.status(404).json(`Could not find habit with id ${ req.params.id }`);
  }

  // Check that we are the author
  if (req.user.id != myHabit.user) {
    return res.status(403).json("Cannot get another user's habits!");
  }

  res.json(myHabit);
});

// Delete Habit
// Returns deleted habit id or "failed"
router.delete("/:id", passport.authenticate("jwt", { session: false }), async (req,res) => {
  let myHabit;

  try {
    myHabit = await Habit.findOne({ _id: req.params.id });
  } catch(err) {
    return res.status(422).json({ ...err, message: "Bad request." });
  }
  
  // Check the habit exists
  if (!myHabit) {
    return res.status(404).json(`Could not find habit with id ${ req.params.id }`);
  }

  // Check that we are the author
  if (req.user.id != myHabit.user) {
    return res.status(403).json("Cannot delete another user's habits!");
  }

  Habit.deleteOne({_id: req.params.id})
    .then((msg) => {
      if(msg && msg.deletedCount > 0) {
        res.json({id: req.params.id});
      } else {
        res.json("Failed");
      }
    })
});

// Update Habit
// Returns JSON of updated Habit or old habit if no updates are passed in body
// Expects body to contain ONLY new key:value pairs
router.patch("/:id", passport.authenticate("jwt", { session: false }), async (req,res)=>{
  let myHabit;

  try {
    myHabit = await Habit.findOne({ _id: req.params.id });
  } catch(err) {
    return res.status(422).json({ ...err, message: "Bad request." });
  }
  
  // Check the habit exists
  if (!myHabit) {
    return res.status(404).json(`Could not find habit with id ${ req.params.id }`);
  }

  // Check that we are the author
  if (req.user.id != myHabit.user) {
    return res.status(403).json("Cannot edit another user's habits!");
  }
  
  const {
    title,
    description,
    completed
  } = req.body;

  myHabit.title = title || myHabit.title;
  myHabit.description = description || myHabit.description;
  myHabit.completed = completed || myHabit.completed;

  myHabit.save()
    .then(obj=>res.json(obj)); 
});

router.post("/:id/tasks", passport.authenticate("jwt", { session: false }), async (req, res) => {
  let myHabit;

  try {
    myHabit = await Habit.findOne({ _id: req.params.id });
  } catch(err) {
    return res.status(422).json({ ...err, message: "Bad request." });
  }

  // Check that we are the author
  if (!myHabit) {
    return res.status(404).json(`Could not find habit with id ${ req.params.id }`);
  }
  
  // Prevent the user from accessing another's habits
  if (req.user.id != myHabit.user) {
    return res.status(403).json("Cannot edit another user's habits!");
  }

  const { 
    title, 
    periodNum, 
    periodUnit, 
    numPetals 
  } = req.body;

  const newTask = new Task({
    habit: myHabit,
    user: req.user,
    title,
    periodNum,
    periodUnit,
    numTimesToDo,
    numPetals
  });

  myHabit.tasks.push(newTask);
  myHabit.save()
    .then(obj => res.json(obj.tasks[obj.tasks.length - 1]));
});

module.exports = router; 