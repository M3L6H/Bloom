// Express
const express = require("express");
const router = express.Router();
const passport = require("passport");

/// Validations
const validateTask = require("../../validation/tasks");

// Models
const Habit = require("../../models/Habit");

// Edit a task
router.patch("/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
  const {errors,isValid} = validateTask(req.body);

  if (!isValid) {
    return res.status(422).json(errors);
  }
  
  let myTask;
  let myHabit;

  try {
    myHabit = await Habit.findOne({ tasks: { $elemMatch: { _id: req.params.id } } });
    if (!myHabit) {
      return res.status(404).json(`Could not find task with id ${ req.params.id }`);
    }
    myTask = myHabit.tasks.find(({ _id }) => _id == req.params.id);
  } catch(err) {
    return res.status(422).json({ ...err, message: "Bad request." });
  }
  
  // Check the task exists
  if (!myTask) {
    return res.status(404).json(`Could not find task with id ${ req.params.id }`);
  }

  // Check that we are the author
  if (req.user.id != myHabit.user) {
    return res.status(403).json("Cannot edit another user's tasks!");
  }
  
  const {
    title,
    periodNum,
    periodUnit, 
    numTimesDone,
    numPetals
  } = req.body;

  myTask.title = title || myTask.title;
  myTask.periodNum = periodNum || myTask.periodNum;
  myTask.periodUnit = periodUnit || myTask.periodUnit;
  myTask.numTimesDone = numTimesDone || myTask.numTimesDone;
  myTask.numPetals = numPetals || myTask.numPetals;

  myHabit.save()
    .then(obj=>res.json(obj)) 
    .catch(err => res.status(422).json(err));
});

// Delete a task
router.delete("/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
  let myHabit;

  try {
    myHabit = await Habit.findOne({ tasks: { $elemMatch: { _id: req.params.id } } });
    if (!myHabit) {
      return res.status(404).json(`Could not find task with id ${ req.params.id }`);
    }
  } catch(err) {
    return res.status(422).json({ ...err, message: "Bad request." });
  }
  
  // Check that we are the author
  if (req.user.id != myHabit.user) {
    return res.status(403).json("Cannot delete another user's tasks!");
  }

  myHabit.tasks = myHabit.tasks.filter(({ _id }) => _id != req.params.id);
  
  myHabit.save()
    .then(obj=>res.json(obj)) 
    .catch(err => res.status(422).json(err));
});

module.exports = router;