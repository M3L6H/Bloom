//////////////////// Registration Validations ////////////////////////

const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(input){
  // Initialize an empty errors object
  let errors = {};
  
  // Check that all inputs are valid text, or an empty string
  input.email = validText(input.email) ? input.email : "";
  input.fName = validText(input.fName) ? input.fName : "";
  input.lName = validText(input.lName) ? input.lName : "";
  input.password = validText(input.password) ? input.password : "";
  input.password2 = validText(input.password2) ? input.password2 : "";

  // Validations
  if (Validator.isEmpty(input.email)) {
    errors.email = 'Email field is required';
  } else if (!Validator.isEmail(input.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(input.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(input.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (Validator.isEmpty(input.password2)) {
    errors.password2 = 'Confirm Password field is required';
  }

  if (!Validator.equals(input.password, input.password2)) {
    errors.password2 = 'Passwords must match';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};