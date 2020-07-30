//////////////////// New Habit Validations ////////////////////////

const Validator = require('validator');
const validText = require('./valid_text');

module.exports = function validateNewHabitInput(input) {
    // Initialize an empty errors object
    let errors = {};

    // Check that all inputs are valid text, or an empty string
      input.title = validText(input.title) ? input.title : "";
      input.description = validText(input.description) ? input.description : "";
      
    // Validations

    if(Validator.isEmpty(input.title)){
        errors.title = "Title is required";
    }

    if(input.tasks.length === 0){
        errors.tasks = "Must add at least one Task"
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};