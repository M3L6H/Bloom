////////////////// Users API Endpoints /////////////////////////////////
// Model found in models/User.js

/////////////// Imports
/// Utilities
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
/// Keys
const keys = require('../../config/keys');
/// Validations
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require('../../validation/login');
/// Models
const User = require("../../models/User");
    
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
            pwdDigest: req.body.password
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



module.exports = router;