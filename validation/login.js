////////////////// Login Validaitons //////////////////////////

const Validator = require('validator');
const validText = require('./valid_text');

module.exports = function validateLoginInput(input) {
  let errors = {};

  input.email = validText(input.email) ? input.email : '';
  input.password = validText(input.password) ? input.password : '';

  if (!Validator.isEmail(input.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(input.email)) {
    errors.email = 'Email field is required';
  }

  if (Validator.isEmpty(input.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};