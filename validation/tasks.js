const Validator = require("validator");
const validText = require("./valid-text");
const positiveInt = require("./positive_int");
const validPeriodUnit = require("./valid_period_unit");
const { periodUnits } = require("./valid_period_unit");

module.exports = (data) => {
  let { 
    title, 
    periodNum, 
    periodUnit, 
    numPetals 
  } = data;

  let errors = {};

  title = validText(title) ? title : "";

  // Validations
  if (Validator.isEmpty(title)) {
    errors.title = "Title is required";
  }

  if (periodUnit && !validPeriodUnit(periodUnit)) {
    errors.periodUnit = `Period unit should be one of: ${ periodUnits.join(", ") }`;
  }

  if (periodNum && !positiveInt(periodNum)) {
    errors.periodNum = "periodNum should be a positive integer";
  }

  if (numPetals && !positiveInt(numPetals)) {
    errors.numPetals = "numPetals should be a positive integer";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};