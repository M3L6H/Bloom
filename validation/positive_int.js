const Validator = require("validator");

module.exports = num => (
  Validator.isInt(num) && parseInt(num) > 0
);