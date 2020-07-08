////////////////// Users API Endpoints /////////////////////////////////
// Model found in models/User.js

/////////////// Imports
/// Utilities
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport'); 
/// Keys
const keys = require('../../config/keys');
/// Validations
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require('../../validation/login');
/// Models
const User = require("../../models/User");
const Habit = require("../../models/Habit");
    
////////////// Main

router.get("/test", (req,res)=>{res.json({msg:"users routes"})}); 

// User Registration
router.post("/register", (req,res)=>{
    
  // Validate user input
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  // If fields are all valid, sign up the user
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        // If email is taken, send an error message
        errors.email = 'Email already exists';
        return res.status(400).json(errors);
      } else {
        // Otherwise, create a new user
        const newUser = new User({
            fName: req.body.fName,
            lName: req.body.lName,
            email: req.body.email,
            pwdDigest: req.body.password,
            petals: 0,
            rewards: req.body.rewards 
        });

        // Generate a secure password digest
        bcrypt.genSalt(10, (err,salt) => {
          bcrypt.hash(newUser.pwdDigest, salt, (err,hash)=>{
            if(err) throw err;

            // Save the new user
            newUser.pwdDigest = hash;
            newUser.save()
              .then(user => {
                const payload = { id: user.id, fName: user.fName, lName: user.lName };

                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                });
              })
              .catch(err => console.log(err)); 
          });
        });
      }
    });
}); 

// User Login
router.post("/login", (req,res)=>{
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      errors.handle = "This user does not exist";
      return res.status(400).json(errors);
    }

    bcrypt.compare(password, user.pwdDigest).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id, fName: user.fName, lName: user.lName };

        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token
          });
        });
      } else {
        errors.password = "Incorrect password";
        return res.status(400).json(errors);
      }
    });
  });
})

// Reorganize task list
// Returns user with updated task list

router.get("/reorganize_tasks", passport.authenticate("jwt", { session: false }), async (req,res)=>{
  let newTaskList = [];
  let user;
  let habits;
  // Find the user model and habits
  try{

    user = await User.findOne({_id:req.user.id});
    habits = await Habit.find({ _id: { $in: user.habits } });

  }catch(err){

    return res.status(422).json({ ...err, message: "Bad request." });
  }
  
  // If no tasks, return an error
  if(!habits || habits.length === 0){
    return res.json("Could not find any tasks!").status(404);
  }

  // Order the habits
  habits = user.habits.map((habitId)=> habits.find(habit => habit.id===habitId)); 

  habits.forEach((habit)=>{
    habit.tasks.forEach((task)=>{
      newTaskList.push(task.id);
    })
  })

  user.dailyTaskList = newTaskList;

  user.save()
    .then((user)=> res.json(user))
    .catch((err)=>res.json(err).status(422));
})

// Update dailyTaskList
// expects a new array that will replace the original
router.post("/update_tasks",passport.authenticate("jwt",{session:false}), async (req,res)=>{
  
  //First, make sure the request is valid
  if(!req.body.dailyTaskList || !Array.isArray(req.body.dailyTaskList)){
      return res.status(422).json("dailyTaskList must be an array of task id's!");
  }

  let user;
  
  // Find the user model
  try {

    user = await User.findOne({ _id: req.user.id });
  } catch (err) {

    return res.status(422).json({ ...err, message: "Bad request." });
  }

  // Check if user exists
  if(!user){
    return res.status(404).json("User not found!");
  }

  //Update the list 
  user.dailyTaskList = req.body.dailyTaskList;

  user.save()
    .then((user)=> res.json(user))
    .catch((err)=> res.json(err).status(422)); 

})

module.exports = router;