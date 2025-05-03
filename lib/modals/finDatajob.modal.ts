import { Schema, model, models } from "mongoose";

const finDataJobSchema = new Schema({
  person: {
    type: Object,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
  },
  jobName: String,
  jobType: String,
  payPeriod: Number,
  hoursPerPeriod: Number,
  startDate: Date,
  endDate: Date,
  lastReceived: Date,
});

const finDataJob =
  models?.finDataJobSchema ||
  model("finDataJobSchema", finDataJobSchema, "Nutrixa_Users");

export default finDataJob;
