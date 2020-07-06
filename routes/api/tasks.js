// Express
const express = require("express");
const router = express.Router();

// Models
const Task = require("../../models/Task");

// Create new task
router.post("/", 
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { 
      habit,
      title, 
      periodNum, 
      periodUnit, 
      numTimesToDo, 
      numPetals 
    } = req.body;

    const newTask = new Task({
      habit,
      title,
      periodNum,
      periodUnit,
      numTimesToDo,
      numPetals
    });

    newTask.save()
      .then(task => res.json(task))
      .catch(err => res.status(500).json(err));
});

module.exports = router;