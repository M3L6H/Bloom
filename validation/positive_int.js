const Validator = require("validator");

module.exports = num => (
  Validator.isInt(num.toString()) && parseInt(num) > 0
);