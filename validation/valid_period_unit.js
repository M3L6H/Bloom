const periodUnits = ["day", "week", "month", "year"];

module.exports = unit => (
  periodUnits.includes(unit)  
);

module.exports.periodUnits = periodUnits;