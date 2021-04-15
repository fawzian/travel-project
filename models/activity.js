const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    booked: Boolean
  });
  
  const Activity = mongoose.model("Activity", activitySchema);
  
  module.exports = Activity;