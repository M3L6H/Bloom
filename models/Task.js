const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  habit: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "habits"
  },
  title: { type: String, required: true },
  periodNum: { type: Number, default: 1 },
  periodUnit: { type: String, default: "day" },
  numTimesDone: { type: Number, default: 0 },
  numPetals: { type: Number, default: 1 }
}, {
  timestamps: true
});

module.exports = Task = mongoose.model("Task", taskSchema);