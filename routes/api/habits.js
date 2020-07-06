////////////////// Habits API Endpoints /////////////////////////////////
// Model found in models/Habit.js

/////////////// Imports
  /// Utilities
    const express = require("express");
    const router = express.Router();
    const bcrypt = require('bcryptjs');
    const jwt = require('jsonwebtoken');
/// Keys
    const keys = require('../../config/keys');
/// Validations

/// Models
    const Habit = require("../../models/Habit");

////////////// Main

router.get("/test",(req,res) => {res.json({msg:"habits"})});


module.exports = router; 