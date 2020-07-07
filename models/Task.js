const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  user:{
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true 
  },
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

module.exports = Task = mongoose.model("Task", TaskSchema);
module.exports.TaskSchema = TaskSchema;