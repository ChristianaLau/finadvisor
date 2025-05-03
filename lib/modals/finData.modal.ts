import { Schema, model, models } from "mongoose";

const finDataSchema = new Schema({
  person: {
    type: Object,
    required: false,
  },
  rent: {
    type: Number,
    required: false,
  },
  created_at: {
    type: Date,
    required: true,
  },
  job:[
    {
      jobName:String,
      jobType:String,
      payPeriod:Number,
      hoursPerPeriod:Number,
      startDate:Date,
      endDate:Date,
      lastReceived:Date,
    }
  ],
  income: [
    {
      incomeName: String,
      amount: Number,
      recurring: Boolean,
      period: Number,
      recurringStart: Date,
      recurringEnd: Date,
      received: Boolean,
      updated_at: Date,
    },
  ],
  spending: [
    {
      spendingName: String,
      amount: Number,
      recurring: Boolean,
      period: Number,
      spendingType: String,
      wantLevel: Number,
      recurringStart: Date,
      recurringEnd: Date,
      updated_at: Date,
    },
  ],
});

const finData =
  models?.finDataSchema ||
  model("finDataSchema", finDataSchema, "Nutrixa_Users");

export default finData;
