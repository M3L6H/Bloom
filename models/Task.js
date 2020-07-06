const mongoose = require("mongoose");
const Schema = mongoos.Schema;

const taskSchema = new Schema({
  title: String,
  periodNum: { type: Number, default: 1 },
  periodUnit: { type: String, default: "day" },
  numTimesToDo: { type: Number, default: 1 },
  numTimesDone: { type: Number, default: 0 },
  numPetals: { type: Number, default: 1 }
}, {
  timestamps: true
});

module.exports = Task = mongoose.model("Task", taskSchema);