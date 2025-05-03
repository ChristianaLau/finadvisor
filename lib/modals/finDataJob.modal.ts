import { Schema, model, models } from "mongoose";

const finDataJobSchema = new Schema({
  user: {
    required: [true, 'Please add a user'],
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  jobName: String,
  jobType: String,
  payPeriod: Number,
  hoursPerPeriod: Number,
  startDate: Date,
  endDate: Date,
  lastReceived: Date,
},{timestamps: true});


const finDataJob =
  models?.Job ||
  model("Job", finDataJobSchema);

export default finDataJob;
