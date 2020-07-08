////////////////// Rewards API Endpoints /////////////////////////////////
// Model in models/User.js (nested in user schema)

/////////////// Imports
/// Utilities
const express = require("express");
const router = express.Router();
const passport = require("passport");
const positiveInt = require("../../validation/positive_int");
const validateReward = require("../../validation/rewards");

/// Validations


/// Models
const User = require("../../models/User");

////////////// Main

/// Edit Reward

router.patch("/:id", passport.authenticate("jwt", { session: false }), (req,res)=>{

    let user = req.user;

    let reward = user.rewards.find(({ _id }) => _id == req.params.id);

    // If the reward does not exist, return an error message
    if(!reward){
        return res.json(`Could not find reward with id ${req.params.id}`).status(404);
    }

    // If it does exist, modify and save
    const {
        title,
        petalCost,
        description
    } = req.body;

    reward.title = title || reward.title;
    reward.petalCost = petalCost || reward.petalCost;
    reward.description = description || reward.description; 

    // Make sure petal cost is a number 
    if (!positiveInt(reward.petalCost)) {
        return res.json("Petal cost must be positive integer!").status(422);
    }

    user.save()
        .then(obj => res.json(obj))
        .catch(err => res.status(422).json(err));
})

// Delete a reward
router.delete("/:id",passport.authenticate("jwt",{session:false}),(req,res)=>{

    let user = req.user;

    let reward = user.rewards.find(({ _id }) => _id == req.params.id);

    // If the reward does not exist, return an error message
    if (!reward) {
        return res.json(`Could not find reward with id ${req.params.id}`).status(404);
    }

    // Delete the reward
    user.rewards = user.rewards.filter(({ _id }) => _id != req.params.id);

    user.save()
        .then((user)=> res.json(user))
        .catch((err)=>res.json(err).status(422)); 
     
})

//Create a new reward

router.post("/",passport.authenticate("jwt",{session:false}), (req,res)=>{

    let user = req.user;
    
    // Validate the incoming reward
    const {errors,isValid} = validateReward(req.body);

    if(!isValid){
        return res.json(errors).status(422);
    }

    let newReward = {
        title: req.body.title,
        description: req.body.description,
        petalCost: req.body.petalCost
    }

    user.rewards.push(newReward);

    user.save()
        .then((user)=>res.json(user))
        .catch((err)=>res.json(err).status(422)); 

})

module.exports = router;