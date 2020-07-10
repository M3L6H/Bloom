////////////////// Habits API Endpoints /////////////////////////////////
// Model found in models/Habit.js

/////////////// Imports
  /// Utilities
const express = require("express");
const router = express.Router();
const passport = require("passport");

/// Validations
const validateNewHabitInput = require("../../validation/new_habit");
const validateTask = require("../../validation/tasks");

/// Models
const Habit = require("../../models/Habit");
const Task = require("../../models/Task");
const User = require("../../models/User");

////////////// Main

//Test route
router.get("/test",(req,res) => {res.json({msg:"habits"})});

//Get all a user's habits
router.get("/", passport.authenticate("jwt", { session: false }), (req,res)=>{
  // Find all the User's habits, return null if none
  Habit.find({user: req.user.id})
      .then((habits)=>res.json(habits))
      .catch((err)=> res.json(err));
});

// Create Habit 
// expects req body to have keys title, description,
router.post("/", passport.authenticate("jwt", { session: false }), async (req,res)=>{
  const {errors,isValid} = validateNewHabitInput(req.body);

  if (!isValid) {
    return res.status(422).json(errors);
  }

  let newHabit = new Habit({
    completed: false,
    title: req.body.title,
    description: req.body.description || "",
    user: req.user
  });

  // This will store the Habit's user later
  var user;

  try {
    newHabit = await newHabit.save();
    user = await User.findById(newHabit.user);
    user.habits.push(newHabit.id);
    user.save();
  } catch (err) {
    return res.status(422).json(err);
  }

  if (req.body.tasks) {
    newHabit.tasks = req.body.tasks.map(task => { task.habit = newHabit; return task; });
    newHabit.save()
      .then(obj => res.json(obj))
      .catch(err => res.status(422).json(err));
    user.dailyTaskList.push(...newHabit.tasks.map(task=>task.id));

  } else {
    return res.json(newHabit); 
  }
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
  var myHabit;
  var owner;
  try {
    myHabit = await Habit.findOne({ _id: req.params.id });
    owner = await User.findOne({_id: req.user.id});
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
    .then(async (msg) => {
      if(msg && msg.deletedCount > 0) {
        // remove the habit and its tasks from the owner's habits and dailyTaskList arrays
        let habitIdx = owner.habits.findIndex((habit)=> habit == myHabit.id);
        owner.habits.splice(habitIdx,1); 
        
        let tasks = myHabit.tasks.map((task)=> task._id);
        tasks.forEach((task)=>{
          let taskIdx = owner.dailyTaskList.findIndex((_task)=> _task == task);

          if(taskIdx){
            owner.dailyTaskList.splice(taskIdx,1); 
          }
        });
        await owner.save(); 
        res.json({ user: owner, id: req.params.id });
      } else {
        res.json("Failed");
      }
    })
});

// Update Habit
// Returns JSON of updated Habit or old habit if no updates are passed in body
// Expects body to contain ONLY new key:value pairs
router.patch("/:id", passport.authenticate("jwt", { session: false }), async (req,res)=>{
  const {errors,isValid} = validateNewHabitInput(req.body);

  if (!isValid) {
    return res.status(422).json(errors);
  }

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
    .then(obj=>res.json(obj)) 
    .catch(err => res.status(422).json(err));
});

//Create a new Task
// Returns json of the new task
router.post("/:id/tasks", passport.authenticate("jwt", { session: false }), async (req, res) => {
  const { errors, isValid } = validateTask(req.body);

  if (!isValid) {
    return res.status(422).json(errors);
  }
  
  let myHabit;
  let owner;
  try {
    myHabit = await Habit.findOne({ _id: req.params.id });
    owner = await User.findById(req.user.id);
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
    title,
    periodNum,
    periodUnit,
    numPetals
  });


  myHabit.tasks.push(newTask);
  owner.dailyTaskList.push(newTask.id);
  owner.save();
  myHabit.save()
    .then(obj => res.json(obj.tasks[obj.tasks.length - 1]))
    .catch(err => res.status(422).json(err));
});

module.exports = router; 