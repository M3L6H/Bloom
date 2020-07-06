////////////////// Users API Endpoints /////////////////////////////////
// Model found in models/User.js

/////////////// Imports
  /// Utilities
    const express = require("express");
    const router = express.Router();
    const bcrypt = require('bcryptjs');

  /// Registration validations
    const validateRegisterInput = require("../../validation/register");


////////////// Main

router.get("/test", (req,res)=>{res.json({msg:"users routes"})}); 

router.post("/register", (req,res)=>{
    
});
module.exports = router; 