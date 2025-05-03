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
  income: {
    payType: String,
    amount: Number,
  },
  spending: [
    {
      name: String,
      amount: Number,
      recurring: Boolean,
      period: Number,
      type: String,
      wantLevel: Number,
      updated_at: Date,
    },
  ],
});

const finData =
  models?.finDataSchema ||
  model("finDataSchema", finDataSchema, "Nutrixa_Users");

export default finData;
