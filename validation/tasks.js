const Validator = require("validator");
const validText = require("./valid-text");
const positiveInt = require("./positive_int");
const validPeriodUnit = require("./valid_period_unit");

module.exports = (data) => {
  const { 
    habit,
    title, 
    periodNum, 
    periodUnit, 
    numTimesToDo, 
    numPetals 
  } = data;

  let errors = {};

  
};