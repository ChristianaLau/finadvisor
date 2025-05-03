import { Schema, model, models } from "mongoose";

const finDataSchema = new Schema({
  salary: {
    type: Number,
    required: false,
  },
  wage: {
    type: Number,
    required: false,
  },
  hourly: {
    type: Boolean,
  },
  salaried: {
    type: Boolean,
  },
  weeklyHours: {
    type: Number,
    required: false,
  },
  rent: {
    type: Number,
    required: false,
  },
  payperiod: {
    type: Number,
    required: false,
  },
  created_at: {
    type: Date,
    required: true,
  },
  person: {
    type: Object,
    required: false,
  },
  income: [
    {
      incomeName: String,
      amount: Number,
      recurring: Boolean,
      period: Number,
      recurringStart: Date,
      recurringEnd: Date,
      received:Boolean,
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
